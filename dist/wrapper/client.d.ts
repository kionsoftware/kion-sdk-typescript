export interface NewClientOptions {
    baseUrl: string;
    apiKey?: string;
    token?: string;
    verify?: boolean;
    timeoutMs?: number;
}
export declare function newClient(opts: NewClientOptions): import("@hey-api/client-fetch").Client;
