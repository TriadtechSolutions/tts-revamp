import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogBanner, { BlogCategoryFilter } from "@/components/blog/BlogBanner";
import BlogGrid from "@/components/blog/BlogGrid";
import { SITE_NAME } from "@/lib/seo";
import {
  getAllCategories,
  getAllCategorySlugs,
  getCategoryBySlug,
  getPostsByCategory,
} from "@/lib/blog";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return getAllCategorySlugs().map((category) => ({ category }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};

  return {
    title: `${cat.name} | Blog | ${SITE_NAME}`,
    description: `Browse blog posts in ${cat.name} — insights and articles from ${SITE_NAME}.`,
  };
}

export default async function BlogCategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const posts = getPostsByCategory(category);
  const categories = getAllCategories();

  return (
    <>
      <BlogBanner
        title={cat.name}
        description={`Articles and insights about ${cat.name.toLowerCase()}.`}
      />
      <BlogCategoryFilter categories={categories} activeSlug={category} />
      <BlogGrid
        posts={posts}
        emptyMessage={`No posts in ${cat.name} yet. Check back soon!`}
      />
    </>
  );
}
