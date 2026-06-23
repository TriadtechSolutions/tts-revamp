"use client";

import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type SliderService = {
  slug: string;
  title: string;
  body: string;
  icon: string;
};

export default function ServiceSwiper({
  services,
  renderExcerpt,
}: {
  services: SliderService[];
  renderExcerpt: (body: string) => string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderCard = (service: SliderService) => (
    <div className="service-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={service.icon}
        alt={service.title}
        height={60}
        width={60}
        className="services-image"
      />
      <h2 className="service-title">{service.title}</h2>
      <div
        className="service-excerpt"
        dangerouslySetInnerHTML={{ __html: renderExcerpt(service.body) }}
      />
    </div>
  );

  if (!mounted) {
    return (
      <div className="service-swiper-fallback">
        {services.slice(0, 3).map((service) => (
          <div key={service.slug} className="service-swiper-fallback__slide">
            {renderCard(service)}
          </div>
        ))}
      </div>
    );
  }

  return (
    <Swiper
      className="swiper service-swiper"
      modules={[Autoplay]}
      loop={services.length > 3}
      speed={800}
      slidesPerView={3}
      spaceBetween={30}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 24 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      }}
    >
      {services.map((service) => (
        <SwiperSlide key={service.slug}>{renderCard(service)}</SwiperSlide>
      ))}
    </Swiper>
  );
}
