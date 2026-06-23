import SectionRenderer from "@/components/sections/SectionRenderer";
import { getPageBySlug } from "@/lib/content";

export default function HomePage() {
  const page = getPageBySlug("home")!;

  return (
    <>
      {page.sections.map((section) => (
        <SectionRenderer key={section.id} section={section} pageSlug="home" />
      ))}
    </>
  );
}
