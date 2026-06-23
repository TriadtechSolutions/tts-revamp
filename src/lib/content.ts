import siteData from "../../content/site-data.json";
import type { Page, SiteData } from "./types";

const data = siteData as SiteData;

export function getSiteData(): SiteData {
  return data;
}

export function getAllPages(): Page[] {
  return Object.values(data.pages);
}

export function getPageBySlug(slug: string): Page | undefined {
  if (slug === "home" || slug === "") return data.pages.home;
  return data.pages[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(data.pages).filter((s) => s !== "home");
}

export function normalizeUrl(url: string): string {
  if (!url || url === "#") return url;
  return url
    .replace("internal:", "")
    .replace("entity:node/", "/node/")
    .replace(/\/+$/, "") || "/";
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

/** First intro paragraph from a service body (before Key Capabilities). */
export function getServiceExcerpt(html: string): string {
  const intro = html.split(/<p>\s*<br>\s*<strong>Key Capabilities|<strong>Key Capabilities/i)[0] || html;
  const match = intro.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  if (match) return `<p>${match[1]}</p>`;
  const text = stripHtml(intro);
  return text ? `<p>${text}</p>` : "";
}
