import type { RequestOptions } from "@hey-api/client-fetch";
export declare function rewriteQueryStringPath(url: URL): URL;
export declare function queryStringInterceptor(request: Request, _options?: RequestOptions): Request;
