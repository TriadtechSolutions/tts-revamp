import Image from "next/image";
import type { Section } from "@/lib/types";

const DEFAULT_FEATURES = [
  "No Hidden Fees",
  "30-Day Money Back",
  "24/7 Support",
];

export default function PackagesSection({ section }: { section: Section }) {
  return (
    <section className="package-section">
      {section.bgImage && (
        <div className="package-bg-image-wrapper">
          <Image
            src={section.bgImage.path}
            alt={section.bgImage.alt}
            className="package-bg-image"
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      )}
      <div className="package-wrapper">
        <h1 className="package-title">
          Choose Your
          <br />
          <span className="highlight">Perfect Package</span>
        </h1>
        {section.body && (
          <div
            className="package-description"
            dangerouslySetInnerHTML={{ __html: section.body }}
          />
        )}
        <div className="package-features">
          {DEFAULT_FEATURES.map((feature) => (
            <div key={feature} className="feature-item">
              <span className="feature-icon" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
