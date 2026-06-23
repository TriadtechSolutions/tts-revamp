import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/asset-path";
import type { ServiceItem } from "@/lib/types";

export default function ServicesGrid({ services }: { services: ServiceItem[] }) {
  return (
    <div className="services-list">
      <h1 className="services-title">Our Service Portfolio</h1>
      {services.map((service, index) => (
        <div
          key={service.slug}
          className={`service-item ${index % 2 === 0 ? "left-align" : "right-align"}`}
        >
          <div className="service-content">
            <div className="service-text">
              <h2 className="service-title">{service.title}</h2>
              <div
                className="service-description"
                dangerouslySetInnerHTML={{ __html: service.body }}
              />
              <div className="service-buttons">
                <Link href={service.learnMoreUrl} className="btn btn-outline-primary">
                  Know more
                  <span className="quarter" />
                </Link>
                <Link href={service.quoteUrl} className="btn btn-outline-primary">
                  Get Quote
                  <span className="quarter" />
                </Link>
              </div>
            </div>
            <div className="service-image">
              {service.image && (
                <Image
                  src={assetPath(service.image.path)}
                  alt={service.image.alt}
                  width={500}
                  height={400}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
