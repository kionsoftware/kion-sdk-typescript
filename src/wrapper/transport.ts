import type { RequestOptions } from "@hey-api/client-fetch";

// MUST match queryStringPathMarker in preprocess/main.go and the go/python transports.
const MARKER = "/__qs__/";

export function rewriteQueryStringPath(url: URL): URL {
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

// @hey-api/client-fetch request interceptor: rewrite the request URL before it is sent.
// Signature per the installed 0.10.2 typings: ReqInterceptor<Request, RequestOptions> =
// (request: Request, options: RequestOptions) => Request | Promise<Request>. We only need
// the request, and TS structurally allows omitting trailing parameters.
export function queryStringInterceptor(
	request: Request,
	_options?: RequestOptions,
): Request {
	const rewritten = rewriteQueryStringPath(new URL(request.url));
	if (rewritten.href === request.url) return request;
	return new Request(rewritten, request);
}
