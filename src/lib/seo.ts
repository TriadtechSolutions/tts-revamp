import type { Metadata } from "next";
import type { Page } from "./types";
import { stripHtml } from "./content";

const SITE_URL = "https://triadtechsolutions.in";
export const SITE_NAME = "Triadtech Solutions";
export const SITE_TAGLINE = "Build. Design. Market.";

const HOME_DESCRIPTION =
  "Triadtech Solutions delivers expert web development and digital marketing services. We build high-performing websites, design standout digital experiences, and help businesses grow online.";

const NOINDEX_SLUGS = new Set(["ma-testing", "manual-testing"]);

export function buildMetadata(page: Page): Metadata {
  const isHome = page.slug === "home";
  const pageTitle = isHome ? SITE_TAGLINE : page.title;

  const description =
    page.metaDescription ??
    ((page.body && !page.body.startsWith("<")
      ? page.body.slice(0, 160)
      : stripHtml(page.body || page.detailed_banner_text || "").slice(0, 160)) ||
      (isHome ? HOME_DESCRIPTION : `${page.title} - ${SITE_NAME}`));

  const url = `${SITE_URL}${page.url === "/" ? "" : page.url}`;
  const noindex = NOINDEX_SLUGS.has(page.slug);

  return {
    title: `${pageTitle} | ${SITE_NAME}`,
    description,
    alternates: { canonical: url },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title: `${pageTitle} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageTitle} | ${SITE_NAME}`,
      description,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: HOME_DESCRIPTION,
    email: "contact.triadtechsolutions@gmail.com",
    sameAs: ["https://x.com/TriadtechS63725"],
  };
}
