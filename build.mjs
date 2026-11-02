// Build the TypeScript SDK: esbuild bundles the JS (it resolves the generated
// code's extensionless relative imports; @hey-api/client-fetch stays external),
// and `tsc` (TypeScript 7) emits the .d.ts + type-checks — see package.json's
// "build" script. tsup is not used: its .d.ts generation relies on the classic
// TypeScript compiler API, which the native TS 7 compiler no longer exposes.
import { existsSync, readdirSync } from "node:fs";
import { build } from "esbuild";

// Discovered from src/, not hand-listed. A hardcoded array silently dropped a
// newly generated version from dist/ — the build stayed green (the skip below
// is deliberate, for partial checkouts) and the version simply never shipped.
// Deriving it means generating a version is enough to build it.
const versions = readdirSync("src", { withFileTypes: true })
  .filter((e) => e.isDirectory() && /^(v3_\d+|master)$/.test(e.name))
  .map((e) => e.name)
  .sort();

// Build the wrapper plus whatever versions are actually generated, so the lane
// builds cleanly with a partial checkout (e.g. before all versions exist).
const entryPoints = { "wrapper/index": "src/wrapper/index.ts" };
for (const v of versions) {
  const entry = `src/${v}/index.ts`;
  if (existsSync(entry)) entryPoints[`${v}/index`] = entry;
}

await build({
  entryPoints,
  outdir: "dist",
  bundle: true,
  format: "esm",
  platform: "node",
  target: "node20",
  external: ["@hey-api/client-fetch"],
  logLevel: "info",
});
