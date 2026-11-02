# TypeScript lane generator

- **generator:** `@hey-api/openapi-ts@0.64.0`
- **client:** `@hey-api/client-fetch`
- **generator's TypeScript:** `5.6.3`, used ONLY inside the generator's isolated
  `npx` sandbox (`npx -p @hey-api/openapi-ts@0.64.0 -p typescript@5.6.3 …`). It is
  NOT a project dependency and is invisible to consumers — the generator needs
  the classic TypeScript compiler API that the native TS 7 compiler removed.
- **project / shipped SDK TypeScript:** `7.0.2` (the only `typescript` in
  `package.json`; used for the build's `.d.ts` emit + type-check).

Validated 2026-07-14: the isolated sandbox generates v3_16 cleanly (types/sdk/
client.gen.ts) and the output type-checks + builds under TS 7.
