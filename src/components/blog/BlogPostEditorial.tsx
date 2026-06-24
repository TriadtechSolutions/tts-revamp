"use client";

import { useEffect } from "react";
import Link from "next/link";
import type { BlogPost } from "@/lib/types";
import { SITE_NAME } from "@/lib/seo";

interface BlogPostEditorialProps {
  post: BlogPost;
  contentHtml: string;
}

export default function BlogPostEditorial({ post, contentHtml }: BlogPostEditorialProps) {
  useEffect(() => {
    const reveals = document.querySelectorAll(".blog-editorial .reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="blog-editorial">
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />

        <nav className="top-bar">
          <Link href="/blog" className="brand">
            {SITE_NAME} &nbsp;·&nbsp; Blog
          </Link>
        </nav>

        <div className="hero-content">
          {post.hero?.eyebrow && <div className="hero-eyebrow">{post.hero.eyebrow}</div>}
          <h1 dangerouslySetInnerHTML={{ __html: post.hero?.titleHtml ?? post.title }} />
          {post.hero?.subtitle && <p className="hero-sub">{post.hero.subtitle}</p>}
          <div className="hero-meta">
            <div className="meta-item">
              <span className="meta-label">Published</span>
              <span className="meta-value">{post.published}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Read Time</span>
              <span className="meta-value">{post.readTime}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Category</span>
              <Link href={`/blog/category/${post.categorySlug}`} className="meta-value meta-link">
                {post.category}
              </Link>
            </div>
          </div>
        </div>

        <div className="scroll-hint">
          <div className="scroll-line" />
          <span className="scroll-text">Scroll to read</span>
        </div>
      </section>

      {post.stats && post.stats.length > 0 && (
        <div className="stat-strip">
          {post.stats.map((stat) => (
            <div key={stat.description} className="stat-cell reveal">
              <div className="stat-number">
                {stat.value}
                <sup>{stat.suffix}</sup>
              </div>
              <div className="stat-desc">{stat.description}</div>
            </div>
          ))}
        </div>
      )}

      <article
        className="article"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      <section className="cta-section">
        <h3>Your attention is yours to reclaim.</h3>
        <p>
          Explore more insights on digital wellness, technology, and building a healthier
          relationship with the digital world.
        </p>
        <Link href="/blog/category/digital-wellness" className="cta-btn">
          <span>More in Digital Wellness</span>
          <span>→</span>
        </Link>
      </section>
    </div>
  );
}
