import fs from "fs";
import path from "path";
import blogData from "../../content/blog.json";
import type { BlogCategory, BlogData, BlogPost } from "./types";

const data = blogData as BlogData;
const contentDir = path.join(process.cwd(), "content", "blog");

export function getAllCategories(): BlogCategory[] {
  return data.categories;
}

export function getAllPosts(): BlogPost[] {
  return data.posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return data.posts.find((post) => post.slug === slug);
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return data.posts.filter((post) => post.categorySlug === categorySlug);
}

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return data.categories.find((cat) => cat.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return data.posts.map((post) => post.slug);
}

export function getAllCategorySlugs(): string[] {
  return data.categories.map((cat) => cat.slug);
}

export function getPostContent(post: BlogPost): string {
  if (post.body) return post.body;
  if (!post.contentFile) return "";
  const filePath = path.join(contentDir, post.contentFile);
  return fs.readFileSync(filePath, "utf-8");
}
