import { describe, expect, it } from "vitest";
import { newClient } from "../src/wrapper/client";
import { rewriteQueryStringPath } from "../src/wrapper/transport";
import { normalizeServerUrl } from "../src/wrapper/url";
import {
	KION_RELEASES,
	KION_VERSIONS,
	kionRelease,
} from "../src/wrapper/versions";

describe("normalizeServerUrl", () => {
	it("forces the /api suffix", () => {
		expect(normalizeServerUrl("https://k.example.com")).toBe(
			"https://k.example.com/api",
		);
		expect(normalizeServerUrl("https://k.example.com/")).toBe(
			"https://k.example.com/api",
		);
		expect(normalizeServerUrl("https://k.example.com/api")).toBe(
			"https://k.example.com/api",
		);
	});
});

describe("rewriteQueryStringPath", () => {
	it("folds /__qs__/ segments into query params", () => {
		const u = rewriteQueryStringPath(
			new URL("https://k.example.com/api/v3/account/__qs__/account-type/aws"),
		);
		expect(u.pathname).toBe("/api/v3/account");
		expect(u.searchParams.get("account-type")).toBe("aws");
	});
	it("merges onto existing query", () => {
		const u = rewriteQueryStringPath(
			new URL("https://k.example.com/api/v3/x/__qs__/kind/y?page=2"),
		);
		expect(u.searchParams.get("kind")).toBe("y");
		expect(u.searchParams.get("page")).toBe("2");
	});
	it("passes through when no marker", () => {
		const u = rewriteQueryStringPath(
			new URL("https://k.example.com/api/v3/project/42"),
		);
		expect(u.pathname).toBe("/api/v3/project/42");
	});
});

describe("newClient", () => {
	it("requires a credential", () => {
		expect(() => newClient({ baseUrl: "https://k.example.com" })).toThrow();
	});

	// Exercises the whole client end-to-end: base-URL /api normalization, the
	// query-string interceptor actually rewriting the outgoing request, and
	// bearer auth (token winning over apiKey) — via a fake fetch that captures
	// the request the client would send.
	it("normalizes /api, rewrites /__qs__/, and sends bearer auth", async () => {
		const client = newClient({
			baseUrl: "https://k.example.com",
			apiKey: "ak",
			token: "tk",
		});
		let seenUrl = "";
		let seenAuth: string | null = null;
		client.setConfig({
			fetch: async (req: Request) => {
				seenUrl = req.url;
				seenAuth = req.headers.get("Authorization");
				return new Response("{}", { status: 200 });
			},
		});
		await client.get({ url: "/v3/account/__qs__/account-type/aws" });
		expect(seenUrl).toBe(
			"https://k.example.com/api/v3/account?account-type=aws",
		);
		expect(seenAuth).toBe("Bearer tk"); // token wins over apiKey
	});

	it("falls back to apiKey when token is an empty string", async () => {
		const client = newClient({
			baseUrl: "https://k.example.com",
			apiKey: "ak",
			token: "",
		});
		let seenAuth: string | null = null;
		client.setConfig({
			fetch: async (req: Request) => {
				seenAuth = req.headers.get("Authorization");
				return new Response("{}", { status: 200 });
			},
		});
		await client.get({ url: "/v3/project/42" });
		expect(seenAuth).toBe("Bearer ak");
	});
});

describe("kionRelease", () => {
	it("stamps every sub-package with a release inside its minor", () => {
		expect(Object.keys(KION_RELEASES).sort()).toEqual(
			Object.keys(KION_VERSIONS).sort(),
		);
		for (const [sub, minor] of Object.entries(KION_VERSIONS)) {
			const rel = kionRelease(sub);
			expect(rel, sub).toBeTruthy();
			if (sub === "master") continue;
			const tag = new RegExp(`^${minor.replace(".", "\\.")}\\.\\d+$`);
			expect(
				tag.test(rel ?? "") || rel === `support-${minor}.x`,
				`${sub}=${rel}`,
			).toBe(true);
		}
		expect(kionRelease("v9_99")).toBeUndefined();
	});
});
