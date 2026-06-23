import type { Metadata } from "next";
import ServicesGrid from "@/components/services/ServicesGrid";
import { getSiteData } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services | Triad Tech Solutions",
  description:
    "Explore our full service portfolio including web design, development, digital marketing, branding, testing, and IoT solutions.",
};

export default function ServicesGridPage() {
  const { services } = getSiteData();
  return <ServicesGrid services={services} />;
}
