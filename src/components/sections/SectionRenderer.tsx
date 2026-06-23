import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection";
import PackagesSection from "./PackagesSection";
import PackageListSection from "./PackageListSection";
import SeoPackageListSection from "./SeoPackageListSection";
import type { Section } from "@/lib/types";

export default function SectionRenderer({
  section,
  pageSlug,
}: {
  section: Section;
  pageSlug?: string;
}) {
  switch (section.type) {
    case "homebanner":
      return <HeroSection section={section} />;
    case "about":
      return <AboutSection section={section} />;
    case "service":
      return <ServicesSection section={section} />;
    case "testimonials":
      return <TestimonialsSection section={section} />;
    case "packages":
      return <PackagesSection section={section} />;
    case "package_list":
      return <PackageListSection />;
    case "seo_wrapper_packages":
      return <SeoPackageListSection />;
    default:
      return null;
  }
}
