import type { Metadata } from "next";
import type { Page } from "./types";
import { stripHtml } from "./content";

const SITE_URL = "https://triadtechsolutions.in";
const SITE_NAME = "Triad Tech Solutions";

export function buildMetadata(page: Page): Metadata {
  const description =
    page.body && !page.body.startsWith("<")
      ? page.body.slice(0, 160)
      : stripHtml(page.body || page.detailed_banner_text || "").slice(0, 160) ||
        `${page.title} - ${SITE_NAME}`;

  const url = `${SITE_URL}${page.url === "/" ? "" : page.url}`;

  return {
    title: `${page.title} | ${SITE_NAME}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${page.title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | ${SITE_NAME}`,
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
    email: "contact.triadtechsolutions@gmail.com",
    sameAs: [
      "https://x.com/TriadtechS63725",
    ],
  };
}
