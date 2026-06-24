import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostEditorial from "@/components/blog/BlogPostEditorial";
import { assetPath } from "@/lib/asset-path";
import {
  getAllPostSlugs,
  getPostBySlug,
  getPostContent,
} from "@/lib/blog";
import { SITE_NAME } from "@/lib/seo";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | ${SITE_NAME}`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const contentHtml = getPostContent(post);

  if (post.template === "editorial") {
    return <BlogPostEditorial post={post} contentHtml={contentHtml} />;
  }

  return (
    <article className="blog-post-standard">
      <div className="blog-post-standard__header">
        <span className="blog-tag">{post.category}</span>
        <h1>{post.title}</h1>
        <div className="blog-meta">
          <span>By {post.author}</span>
          <span>{post.published}</span>
          <span>⏱ {post.readTime}</span>
        </div>
      </div>
      {post.image && (
        <div className="blog-post-standard__image">
          <img src={assetPath(post.image.path)} alt={post.image.alt} />
        </div>
      )}
      <div
        className="blog-post-standard__body"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
