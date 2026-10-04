export default function imageLoader({
    src,
}: {
    src: string;
    width: number;
    quality?: number;
}) {
    if (!src) return "";
    if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:")) {
        return src;
    }
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.GITHUB_ACTIONS === "true" ? "/zor" : "");
    const cleanPath = src.startsWith("/") ? src : `/${src}`;
    if (basePath && cleanPath.startsWith(basePath)) {
        return cleanPath;
    }
    return `${basePath}${cleanPath}`;
}
