// src/wrapper/client.ts
import { createClient } from "@hey-api/client-fetch";

// src/wrapper/transport.ts
var MARKER = "/__qs__/";
function rewriteQueryStringPath(url) {
  const idx = url.pathname.indexOf(MARKER);
  if (idx < 0) return url;
  const suffix = url.pathname.slice(idx + MARKER.length);
  const out = new URL(url);
  out.pathname = url.pathname.slice(0, idx) || "/";
  const parts = suffix.split("/");
  for (let i = 0; i + 1 < parts.length; i += 2) {
    out.searchParams.set(parts[i], parts[i + 1]);
  }
  return out;
}
function queryStringInterceptor(request, _options) {
  const rewritten = rewriteQueryStringPath(new URL(request.url));
  if (rewritten.href === request.url) return request;
  return new Request(rewritten, request);
}

// src/wrapper/url.ts
function normalizeServerUrl(baseUrl) {
  const s = baseUrl.replace(/\/+$/, "");
  return s.endsWith("/api") ? s : `${s}/api`;
}

// src/wrapper/client.ts
function newClient(opts) {
  const secret = opts.token || opts.apiKey;
  if (!secret) throw new Error("newClient requires apiKey or token");
  const client = createClient({
    baseUrl: normalizeServerUrl(opts.baseUrl),
    headers: { Authorization: `Bearer ${secret}` },
    ...opts.timeoutMs ? { fetch: withTimeout(opts.timeoutMs) } : {}
  });
  client.interceptors.request.use(queryStringInterceptor);
  return client;
}
function withTimeout(ms) {
  return (request) => fetch(request, { signal: AbortSignal.timeout(ms) });
}

// src/wrapper/errors.ts
function statusCode(x) {
  const r = x;
  const s = r?.response?.status ?? r?.status;
  return typeof s === "number" ? s : void 0;
}
var isNotFound = (x) => statusCode(x) === 404;
var isAuthError = (x) => {
  const s = statusCode(x);
  return s === 401 || s === 403;
};
var isConflict = (x) => statusCode(x) === 409;

// src/wrapper/releases.ts
var KION_RELEASES = {
  v3_14: "3.14.15",
  v3_15: "3.15.14",
  v3_16: "3.16.6",
  v3_17: "3.17.3"
};

// src/wrapper/versions.ts
var VERSION = "0.14.0";
var KION_VERSIONS = {
  v3_14: "3.14",
  v3_15: "3.15",
  v3_16: "3.16",
  v3_17: "3.17"
};
function kionVersion(subPackage) {
  return KION_VERSIONS[subPackage];
}
function kionRelease(subPackage) {
  return KION_RELEASES[subPackage];
}
export {
  KION_RELEASES,
  KION_VERSIONS,
  VERSION,
  isAuthError,
  isConflict,
  isNotFound,
  kionRelease,
  kionVersion,
  newClient,
  normalizeServerUrl,
  rewriteQueryStringPath,
  statusCode
};
