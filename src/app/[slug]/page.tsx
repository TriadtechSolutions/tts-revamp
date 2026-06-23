import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectionRenderer from "@/components/sections/SectionRenderer";
import { ContactPage, ServiceDetail } from "@/components/pages/PageContent";
import {
  getAllSlugs,
  getPageBySlug,
} from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) return {};
  return buildMetadata(page);
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) notFound();

  if (page.type === "contact") {
    return <ContactPage page={page} />;
  }

  if (page.type === "services") {
    return <ServiceDetail page={page} />;
  }

  return (
    <>
      {page.sections.map((section) => (
        <SectionRenderer key={section.id} section={section} pageSlug={slug} />
      ))}
    </>
  );
}
