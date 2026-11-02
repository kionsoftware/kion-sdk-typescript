/**
 * SDK release version and Kion API version metadata.
 *
 * Lives in the wrapper (not in a generated `src/<v>/` package) because those
 * directories are deleted and re-created on every regeneration.
 */

import { KION_RELEASES } from "./releases";

export { KION_RELEASES };

/**
 * This SDK's own release version, shared by every language lane (Go, Python,
 * TypeScript) — they are generated from one spec and released together.
 * Stamped from the repo-root VERSION file by `scripts/set-release.sh`;
 * `make check-release` fails if it drifts from `package.json`.
 */
export const VERSION = "0.14.0";

/**
 * Which Kion release each generated sub-package targets. The SDK ships every
 * supported Kion version at once — a single consumer routinely imports several —
 * which is why the SDK's own {@link VERSION} cannot be a Kion version.
 */
export const KION_VERSIONS: Readonly<Record<string, string>> = {
	v3_14: "3.14",
	v3_15: "3.15",
	v3_16: "3.16",
	v3_17: "3.17",
};

/** Return the Kion release for a sub-package name (`"v3_16"` → `"3.16"`). */
export function kionVersion(subPackage: string): string | undefined {
	return KION_VERSIONS[subPackage];
}

/**
 * Return the exact Kion release a sub-package was generated from
 * (`"v3_17"` → `"3.17.1"`).
 */
export function kionRelease(subPackage: string): string | undefined {
	return KION_RELEASES[subPackage];
}
