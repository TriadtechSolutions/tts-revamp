import type { BlogPost } from "@/lib/types";
import BlogCard from "./BlogCard";

interface BlogGridProps {
  posts: BlogPost[];
  emptyMessage?: string;
}

export default function BlogGrid({ posts, emptyMessage }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="blog-empty">
        <p>{emptyMessage ?? "No blog posts found in this category yet."}</p>
      </div>
    );
  }

  return (
    <div className="blog-grid-container">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
