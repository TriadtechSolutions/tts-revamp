const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix local public asset paths for GitHub Pages project sites. */
export function assetPath(path: string): string {
  if (!path || path.startsWith("http") || path.startsWith("data:")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
