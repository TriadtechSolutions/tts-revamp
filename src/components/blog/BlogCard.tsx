import Link from "next/link";
import { assetPath } from "@/lib/asset-path";
import type { BlogPost } from "@/lib/types";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="blog-card">
      <div className="blog-image-wrapper">
        <img src={assetPath(post.image.path)} alt={post.image.alt} />
        <Link href={`/blog/category/${post.categorySlug}`} className="blog-tag">
          {post.category}
        </Link>
      </div>
      <div className="blog-body">
        <h3 className="blog-title">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="blog-summary">{post.summary}</p>
        <div className="blog-meta">
          <span className="blog-author">By {post.author}</span>
          <span className="blog-time">⏱ {post.readTime}</span>
        </div>
        <Link className="read-more" href={`/blog/${post.slug}`}>
          Read More →
        </Link>
      </div>
    </article>
  );
}
