import Link from "next/link";
import type { Section } from "@/lib/types";
import { normalizeUrl } from "@/lib/content";

export default function HeroSection({ section }: { section: Section }) {
  return (
    <section className="home-banner">
      {section.bgImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={section.bgImage.path}
          alt={section.bgImage.alt}
          className="home-bg"
        />
      )}
      <div className="home-content">
        <h2 className="home-title">
          <span className="home-title-line gradient-word">We Buckled Up to</span>
          <span className="home-title-line gradient-word">Build. Design. Market.</span>
        </h2>
        {section.button && (
          <div className="home-btn">
            <Link href={normalizeUrl(section.button)}>Explore Services</Link>
          </div>
        )}
      </div>
    </section>
  );
}
