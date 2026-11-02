export function statusCode(x: unknown): number | undefined {
	const r = x as { response?: { status?: number }; status?: number };
	const s = r?.response?.status ?? r?.status;
	return typeof s === "number" ? s : undefined;
}
export const isNotFound = (x: unknown) => statusCode(x) === 404;
export const isAuthError = (x: unknown) => {
	const s = statusCode(x);
	return s === 401 || s === 403;
};
export const isConflict = (x: unknown) => statusCode(x) === 409;
