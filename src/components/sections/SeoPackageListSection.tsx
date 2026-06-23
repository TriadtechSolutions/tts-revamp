import Link from "next/link";
import { SEO_PACKAGES } from "@/data/seo-packages";

const CARD_COLORS = [
  "card-blue",
  "card-orange",
  "card-red",
  "card-purple",
] as const;

export default function SeoPackageListSection() {
  return (
    <section className="pricing-section seo-pricing-section">
      <div className="pricing-header">
        <h2>Transparent Pricing, Exceptional Value</h2>
        <p>
          Choose the package that fits your needs. All plans include our commitment to
          excellence and ongoing support.
        </p>
      </div>

      <div className="pricing-list">
        <div className="field--name-field-seo-wrapper-package">
          {SEO_PACKAGES.map((pkg, index) => (
            <div key={pkg.title} className="seo-package-card-wrapper">
              <div
                className={`seo-package-card ${CARD_COLORS[index % CARD_COLORS.length]}`}
              >
                <h2 className="seo-title">{pkg.title}</h2>
                <p className="seo-description">{pkg.subtitle}</p>

                <div className="seo-sections">
                  {pkg.sections.map((section) => (
                    <div key={section.title} className="seo-section">
                      <h3 className="seo-subtitle">
                        <span className="field--name-field-title">
                          {section.title}
                        </span>
                      </h3>
                      <ul className="seo-list">
                        {section.items.map((item) => (
                          <li key={item} className="field__item">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <Link href="/get-a-quote" className="seo-btn">
                  Get a Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
