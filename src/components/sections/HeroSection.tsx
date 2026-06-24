import Link from "next/link";
import { assetPath } from "@/lib/asset-path";
import type { Section } from "@/lib/types";
import { normalizeUrl } from "@/lib/content";

export default function HeroSection({ section }: { section: Section }) {
  return (
    <section className="home-banner">
      {section.bgImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={assetPath(section.bgImage.path)}
          alt={section.bgImage.alt}
          className="home-bg"
        />
      )}
      <div className="home-content">
        <h2 className="home-title">
          <span className="home-title-line">
            <span className="home-title-text">We Buckled </span>
            <span className="gradient-word">Up</span>
            <span className="home-title-text"> to </span>
            <span className="gradient-word">Build.</span>
          </span>
          <span className="home-title-line">
            <span className="home-title-text">Design. </span>
            <span className="gradient-word">Market.</span>
          </span>
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
