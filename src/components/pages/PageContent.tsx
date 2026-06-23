import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/asset-path";
import type { Page } from "@/lib/types";
import ContactForm from "@/components/forms/ContactForm";
import {
  parseServiceBlocks,
  splitCtaHeading,
  splitServiceTitle,
  type ServiceFeatureBlock,
} from "@/lib/service-blocks";

export function ContactPage({ page }: { page: Page }) {
  return (
    <div className="contact-page-container">
      <div className="contactus-wrapper">
        <div className="contact-header-content">
          <h1>{page.contact_title || page.title}</h1>
          <p className="contact-description">{page.body}</p>
          <div className="contact-features">
            <ul>
              <li>Free consultation</li>
              <li>24-hour response time</li>
              <li>No obligation quote</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="contactus-formwrapper">
        <div className="form-container">
          <h2>{page.contact_form_title}</h2>
          {page.contact_description && (
            <div
              className="form-description"
              dangerouslySetInnerHTML={{ __html: page.contact_description }}
            />
          )}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

function ServiceFeatureCard({ block }: { block: ServiceFeatureBlock }) {
  return (
    <article className="service-feature-card">
      <h3 className="service-feature-card-title">{block.title}</h3>
      {block.description && (
        <p className="service-feature-card-text">{block.description}</p>
      )}
    </article>
  );
}

function ServiceFeatureGrid({
  image,
  blocks1,
  blocks2,
}: {
  image?: { path: string; alt: string };
  blocks1: ServiceFeatureBlock[];
  blocks2: ServiceFeatureBlock[];
}) {
  const useShowcaseLayout =
    image && blocks1.length >= 1 && blocks2.length >= 2;

  if (useShowcaseLayout) {
    const stackBlocks = blocks2.slice(0, 2);
    const sideBlock = blocks2[2] ?? null;
    const leadBlock = blocks1[0];
    const fullWidthBlocks = blocks1.slice(1);

    return (
      <div className="service-feature-grid service-feature-grid--showcase">
        <div className="service-feature-media">
          <Image
            src={assetPath(image.path)}
            alt={image.alt}
            width={640}
            height={480}
            className="service-feature-media-image"
          />
        </div>

        <div className="service-feature-stack">
          {stackBlocks.map((block) => (
            <ServiceFeatureCard key={block.title} block={block} />
          ))}
        </div>

        {leadBlock && (
          <div className="service-feature-grid-lead">
            <ServiceFeatureCard block={leadBlock} />
          </div>
        )}

        {sideBlock && (
          <div className="service-feature-grid-side">
            <ServiceFeatureCard block={sideBlock} />
          </div>
        )}

        {fullWidthBlocks.map((block) => (
          <div key={block.title} className="service-feature-grid-full">
            <ServiceFeatureCard block={block} />
          </div>
        ))}
      </div>
    );
  }

  const allBlocks = [...blocks1, ...blocks2];

  return (
    <div className="service-feature-grid service-feature-grid--fallback">
      {image && (
        <div className="service-feature-media service-feature-media--fallback">
          <Image
            src={assetPath(image.path)}
            alt={image.alt}
            width={640}
            height={480}
            className="service-feature-media-image"
          />
        </div>
      )}

      {allBlocks.map((block) => (
        <ServiceFeatureCard key={block.title} block={block} />
      ))}
    </div>
  );
}

export function ServiceDetail({ page }: { page: Page }) {
  const heroCta = page.detailed_button ?? {
    title: "Let's Work Together",
    url: "/get-a-quote",
  };
  const title = page.detailed_title ?? page.title;
  const { lead, accent } = splitServiceTitle(title);
  const ctaHeading = splitCtaHeading(heroCta.title);
  const blocks1 = parseServiceBlocks(page.detailed_description1);
  const blocks2 = parseServiceBlocks(page.detailed_description2);

  return (
    <article className="service-detail-page">
      <div className="service-detail-inner">
        <section className="service-hero-panel" aria-labelledby="service-title">
          <div className="service-hero-panel-inner">
            <div className="service-hero-content">
              <span className="service-hero-pill">{heroCta.title}</span>

              <h1 id="service-title" className="service-hero-heading">
                <span className="service-hero-heading-lead">{lead}</span>
                {accent && (
                  <span className="service-hero-heading-accent">{accent}</span>
                )}
              </h1>

              {page.detailed_banner_text && (
                <div
                  className="service-hero-tagline"
                  dangerouslySetInnerHTML={{ __html: page.detailed_banner_text }}
                />
              )}

              <Link href="/get-a-quote" className="service-primary-btn">
                Get a Quote
                <span className="service-primary-btn-icon" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>

            {page.detailed_banner_image && (
              <div className="service-hero-visual">
                <Image
                  src={assetPath(page.detailed_banner_image.path)}
                  alt={page.detailed_banner_image.alt}
                  width={560}
                  height={420}
                  className="service-hero-visual-image"
                  priority
                />
              </div>
            )}
          </div>
        </section>

        <section className="service-features-section">
          <ServiceFeatureGrid
            image={page.detailed_front_image}
            blocks1={blocks1}
            blocks2={blocks2}
          />
        </section>

        {page.detailed_choose_us && (
          <section
            className="service-choose-us"
            dangerouslySetInnerHTML={{ __html: page.detailed_choose_us }}
          />
        )}

        <section className="service-bottom-cta">
          <div className="service-bottom-cta-inner">
            <h2 className="service-bottom-cta-title">
              {ctaHeading.prefix}{" "}
              {ctaHeading.accent && (
                <span className="service-bottom-cta-accent">
                  {ctaHeading.accent}
                </span>
              )}
              {ctaHeading.suffix ? ` ${ctaHeading.suffix}` : ""}
            </h2>

            {page.detailed_banner_text && (
              <div
                className="service-bottom-cta-text"
                dangerouslySetInnerHTML={{ __html: page.detailed_banner_text }}
              />
            )}

            <Link href={heroCta.url} className="service-primary-btn">
              Get a Quote
              <span className="service-primary-btn-icon" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
