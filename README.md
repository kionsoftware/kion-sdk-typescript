# kion-sdk (TypeScript)

Typed TypeScript SDK for the [Kion](https://kion.io) API, generated from Kion's
OpenAPI spec with [@hey-api/openapi-ts](https://heyapi.dev/) +
`@hey-api/client-fetch`. Targets **TypeScript 7**.

Like the Go and Python SDKs, one installable package (`kion-sdk`) ships a
**subpath export per supported Kion release** — `kion-sdk/v3_14` …
`kion-sdk/v3_17`, plus `kion-sdk/master` (unreleased dev; GitLab mirror only —
not on GitHub) — plus a
version-agnostic wrapper at the package root (`kion-sdk`).

> This lane is part of the **kion-sdk monorepo** and is published to its own
> repo by CI. `src/<version>/` is generated (`@hey-api/openapi-ts`); the
> hand-written wrapper lives in `src/wrapper/`.

## Install

```bash
npm install kion-sdk
```

## Quick start

```ts
import { newClient, isNotFound } from "kion-sdk";
import { getProject } from "kion-sdk/v3_16";

const client = newClient({
  baseUrl: "https://kion.example.com",
  apiKey: "app_128_...",           // or: token: "eyJ..."
});

const res = await getProject({ client, path: { id: 42 } });
if (isNotFound(res)) {
  // 404
} else {
  const project = res.data;
}
```

`newClient` normalizes the base URL to the `/api` suffix, wires
`Authorization: Bearer <value>` auth (`apiKey` or `token`; `token` wins), and
installs a transport that transparently handles Kion's query-string-
discriminated endpoints (`verify`, `timeoutMs`, and extra `httpx`-style options
are accepted). Error helpers — `isNotFound` / `isAuthError` / `isConflict` /
`statusCode` — work on a result or a `Response`.

## TypeScript 7 note

The SDK's shipped types, the build, and the type-check all use **TypeScript 7**
(the native compiler). The `@hey-api/openapi-ts` *generator*, however, relies on
the classic TypeScript compiler API that TS 7 removed, so it is run in an
isolated `npx` sandbox pinned to its own `typescript@5.6.3` — a codegen-only
detail that is never a project dependency and is invisible to consumers. The
build uses **esbuild** for the JS bundles and **tsc (TS 7)** for the `.d.ts` +
type-check (`tsup` is not used: its declaration generation needs the removed
classic API).

## Development (in the monorepo)

```bash
make -C ts help
make gen LANG=ts VERSION=v3_16   # from the monorepo root: regenerate one version
make -C ts build                 # esbuild (JS) + tsc (TS7 .d.ts + type-check)
make -C ts typecheck             # tsc --noEmit (TS7)
make -C ts test                  # vitest
make -C ts lint                  # biome (generated src/v3_*, src/master excluded)
```

Generation reads the shared, language-agnostic spec at `../spec/<v>/openapi3.json`
(produced by `../preprocess`) and writes into `src/<v>/`.

### Prerequisites

- Node `>=20` (`.nvmrc` pins `22`).
