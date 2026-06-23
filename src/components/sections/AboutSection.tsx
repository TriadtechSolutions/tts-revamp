import { assetPath } from "@/lib/asset-path";
import type { Section } from "@/lib/types";

export default function AboutSection({ section }: { section: Section }) {
  return (
    <section id="about-us" className="about-us-section">
      <div className="about-title">
        {section.title && (
          <h2>
            <span className="gradient-word syn-text">{section.title}</span>
          </h2>
        )}
      </div>
      <div className="about-content-section">
        <div className="container-fluid">
          <div className="about-content-grid">
            {section.image && (
              <div className="about-front-image-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetPath(section.image.path)}
                  alt={section.image.alt}
                  className="about-front-image"
                />
              </div>
            )}
            <div className="about-text-column">
              {section.body && (
                <div
                  className="about-body-content"
                  dangerouslySetInnerHTML={{ __html: section.body }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
