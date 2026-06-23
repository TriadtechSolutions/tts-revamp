import Link from "next/link";
import type { BlogCategory } from "@/lib/types";

interface BlogBannerProps {
  title?: string;
  description?: string;
}

export default function BlogBanner({
  title = "Insights & Updates",
  description = "Explore our latest articles on web development, digital marketing, technology trends, and digital wellness.",
}: BlogBannerProps) {
  return (
    <section className="blog-banner">
      <div className="blog-banner__container">
        <h1 className="blog-banner__title">{title}</h1>
        <p className="blog-banner__subtitle">{description}</p>
      </div>
    </section>
  );
}

interface BlogCategoryFilterProps {
  categories: BlogCategory[];
  activeSlug?: string;
}

export function BlogCategoryFilter({ categories, activeSlug }: BlogCategoryFilterProps) {
  return (
    <nav className="blog-categories" aria-label="Blog categories">
      <Link
        href="/blog"
        className={`blog-category-pill${activeSlug ? "" : " is-active"}`}
      >
        All
      </Link>
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/blog/category/${category.slug}`}
          className={`blog-category-pill${activeSlug === category.slug ? " is-active" : ""}`}
        >
          {category.name}
        </Link>
      ))}
    </nav>
  );
}
