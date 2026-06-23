import type { Metadata } from "next";
import BlogBanner, { BlogCategoryFilter } from "@/components/blog/BlogBanner";
import BlogGrid from "@/components/blog/BlogGrid";
import { getAllCategories, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Triad Tech Solutions",
  description:
    "Insights, tips, and updates on web development, digital marketing, technology trends, and digital wellness.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <>
      <BlogBanner />
      <BlogCategoryFilter categories={categories} />
      <BlogGrid posts={posts} />
    </>
  );
}
