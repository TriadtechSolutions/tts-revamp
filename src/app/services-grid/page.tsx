import type { Metadata } from "next";
import ServicesGrid from "@/components/services/ServicesGrid";
import { getSiteData } from "@/lib/content";

import { SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Services | ${SITE_NAME}`,
  description:
    "Explore our web development and digital marketing services, plus web design, branding, IoT solutions, and 3D architectural design.",
};

export default function ServicesGridPage() {
  const { services } = getSiteData();
  return <ServicesGrid services={services} />;
}
