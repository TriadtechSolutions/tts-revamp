import type { Metadata } from "next";
import { getAllPages } from "@/lib/content";
import { getAllCategories, getAllPosts } from "@/lib/blog";

const SITE_URL = "https://triadtechsolutions.in";

export const dynamic = "force-static";

export default function sitemap() {
  const pages = getAllPages();
  const posts = getAllPosts();
  const categories = getAllCategories();

  const urls = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    ...pages
      .filter(
        (p) =>
          p.slug !== "home" &&
          p.slug !== "ma-testing" &&
          p.slug !== "manual-testing",
      )
      .map((p) => ({
        url: `${SITE_URL}${p.url}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority:
          p.slug === "web-development" || p.slug === "digital-marketing"
            ? 0.95
            : p.type === "contact"
              ? 0.9
              : 0.8,
      })),
    { url: `${SITE_URL}/services-grid`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.6 },
    ...categories.map((cat) => ({
      url: `${SITE_URL}/blog/category/${cat.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    { url: `${SITE_URL}/leadership`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
  ];

  return urls;
}
