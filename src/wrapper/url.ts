export function normalizeServerUrl(baseUrl: string): string {
	const s = baseUrl.replace(/\/+$/, "");
	return s.endsWith("/api") ? s : `${s}/api`;
}
