# ts/Makefile — the TypeScript SDK lane of the kion-sdk monorepo.
#
# Consumes the shared, language-agnostic spec at $(SPEC_DIR)/<v>/openapi3.json
# (produced by ../preprocess, driven by the root Makefile) and generates the
# typed TypeScript client per Kion version into src/<v>/.
#
# The SDK targets TypeScript 7 (the native compiler) — the shipped types and the
# build/type-check all use TS 7. But the @hey-api/openapi-ts GENERATOR uses the
# classic TypeScript compiler API, which TS 7 removed, so it cannot run on TS 7.
# `generate-%` therefore runs the generator in an ISOLATED npx sandbox pinned to
# its own typescript@5.6.3 — that TS 5 is a codegen-tool detail only, never a
# project dependency and invisible to consumers. Generation is normally driven
# by the root orchestrator (`make gen LANG=ts VERSION=<v>`).

.PHONY: help install-ts generate scaffold-version build test lint typecheck clean
.DEFAULT_GOAL := help

SPEC_DIR ?= ../spec
SRC := src
# Generator (isolated from the project — see header). Pinned like the go lane's
# OGEN_VERSION / python's OPC_VERSION.
GEN := @hey-api/openapi-ts@0.64.0
GEN_TS := typescript@5.6.3

help:
	@echo "kion-sdk ts lane (TypeScript 7)"
	@echo "  make generate-<v>   generate one version from \$$(SPEC_DIR)/<v>/openapi3.json into src/<v>/"
	@echo "  make build          esbuild (JS) + tsc (TS7 .d.ts + type-check)"
	@echo "  make typecheck      tsc --noEmit (TS7)"
	@echo "  make test / lint"

install-ts node_modules:
	npm ci || npm install

## scaffold-version: no-op. openapi-ts generates the whole per-version package,
##                   and newClient() in src/wrapper is version-agnostic. Defined
##                   so the root scaffold-version, which loops every lane, does
##                   not die here.
scaffold-version:
	@echo "ts lane needs no per-version scaffolding (newClient is version-agnostic)."

# Regenerate ONE version into src/<v>/ from the shared spec. The generator runs
# in an isolated npx sandbox with its own typescript@5.6.3 (it needs the classic
# TS compiler API that TS 7 removed) — no project deps required.
generate-%:
	rm -rf $(SRC)/$*
	mkdir -p $(SRC)/$*
	npx --yes -p $(GEN) -p $(GEN_TS) openapi-ts \
	  -i $(SPEC_DIR)/$*/openapi3.json -o $(SRC)/$* -c @hey-api/client-fetch

build: node_modules
	npm run build

typecheck: node_modules
	npm run typecheck

test: node_modules
	npm test

lint: node_modules
	npm run lint

clean:
	rm -rf dist node_modules
