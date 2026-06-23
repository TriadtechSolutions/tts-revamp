"use client";

import Link from "next/link";
import type { Section } from "@/lib/types";
import { getServiceExcerpt, getSiteData, normalizeUrl } from "@/lib/content";
import OrbMount from "@/components/orb/OrbMount";
import ServiceSwiper from "@/components/sections/ServiceSwiper";

const SERVICE_ICONS: Record<string, string> = {
  "web-design": "/images/2025-08/Web design minimized.png",
  "web-development": "/images/2025-08/Web dev minimized.png",
  "digital-marketing": "/images/2025-09/marketing.png",
  "digital-branding": "/images/2026-01/digital-campaign.png.webp",
  "ma-testing": "/images/2025-09/automated.png",
  "manual-testing": "/images/2025-08/manual testing.png",
  iot: "/images/2025-08/IoT mini.png",
};

export default function ServicesSection({ section }: { section: Section }) {
  const { services } = getSiteData();
  const sliderServices = services.map((service) => ({
    ...service,
    icon: SERVICE_ICONS[service.slug] || service.image.path,
  }));

  return (
    <section className="what-we-do-section">
      {section.bgImage && (
        <div className="service-bg-image-wrapper">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={section.bgImage.path}
            alt={section.bgImage.alt}
            className="bg-image"
          />
        </div>
      )}
      <div className="container">
        <div className="content-wrapper">
          <div className="content-section">
            {section.body && (
              <div dangerouslySetInnerHTML={{ __html: section.body }} />
            )}
          </div>
          <div className="title-section">
            <h2 className="gradient-wording syn-text">
              What We <span>Do</span>
            </h2>
            <OrbMount />
          </div>
        </div>

        <div className="service-grid">
          <ServiceSwiper
            services={sliderServices}
            renderExcerpt={getServiceExcerpt}
          />
        </div>

        {section.button && (
          <div className="button-section">
            <Link href={normalizeUrl(section.button)} className="explore-btn">
              Explore Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
