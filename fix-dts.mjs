// Post-build: add explicit ".js" extensions to relative import/export specifiers
// in the emitted .d.ts files. tsc emits the (extensionless) specifiers from the
// generated + wrapper source verbatim, which fail under a consumer's
// `moduleResolution: node16/nodenext` (TypeScript's recommended Node-ESM
// setting) — every per-version subpath's types would resolve to empty. The
// runtime .js is unaffected (esbuild bundles each entry). Idempotent.
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function declarationFiles(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...declarationFiles(p));
    else if (p.endsWith(".d.ts")) out.push(p);
  }
  return out;
}

// Matches a relative specifier in `... from "<spec>"` (import/export) AND in
// inline `import("<spec>")` type references (which .d.ts emit uses heavily).
const SPECIFIER = /((?:\bfrom\s*|\bimport\s*\(\s*)["'])(\.\.?\/[^"']+?)(["'])/g;
const HAS_MODULE_EXT = /\.(js|mjs|cjs|json)$/;

let changed = 0;
for (const file of declarationFiles("dist")) {
  const src = readFileSync(file, "utf8");
  const out = src.replace(SPECIFIER, (match, pre, spec, post) =>
    HAS_MODULE_EXT.test(spec) ? match : `${pre}${spec}.js${post}`,
  );
  if (out !== src) {
    writeFileSync(file, out);
    changed++;
  }
}
console.log(`fix-dts: added .js extensions in ${changed} declaration file(s)`);
