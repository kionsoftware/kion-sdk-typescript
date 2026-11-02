import { createClient } from "@hey-api/client-fetch";
import { queryStringInterceptor } from "./transport";
import { normalizeServerUrl } from "./url";

export interface NewClientOptions {
	baseUrl: string;
	apiKey?: string;
	token?: string;
	verify?: boolean; // reserved; fetch honors platform TLS
	timeoutMs?: number;
}

export function newClient(opts: NewClientOptions) {
	// `||` (not `??`) so an empty-string token falls back to apiKey.
	const secret = opts.token || opts.apiKey;
	if (!secret) throw new Error("newClient requires apiKey or token");
	const client = createClient({
		baseUrl: normalizeServerUrl(opts.baseUrl),
		headers: { Authorization: `Bearer ${secret}` },
		...(opts.timeoutMs ? { fetch: withTimeout(opts.timeoutMs) } : {}),
	});
	client.interceptors.request.use(queryStringInterceptor);
	return client;
}

function withTimeout(
	ms: number,
): (request: Request) => ReturnType<typeof fetch> {
	return (request: Request) =>
		fetch(request, { signal: AbortSignal.timeout(ms) });
}
