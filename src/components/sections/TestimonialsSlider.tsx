"use client";

import { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Testimonial = {
  body: string;
};

export default function TestimonialsSlider({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [mounted, setMounted] = useState(false);
  const [isMobileTablet, setIsMobileTablet] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(max-width: 1023px)");
    const update = () => setIsMobileTablet(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const renderCard = (testimonial: Testimonial) => (
    <div className="testimonial-card">
      <div
        className="testimonial-content"
        dangerouslySetInnerHTML={{ __html: testimonial.body }}
      />
    </div>
  );

  if (!mounted) {
    return (
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index}>{renderCard(testimonial)}</div>
        ))}
      </div>
    );
  }

  if (!isMobileTablet) {
    return (
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index}>{renderCard(testimonial)}</div>
        ))}
      </div>
    );
  }

  return (
    <Swiper
      className="testimonials-swiper"
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      spaceBetween={20}
      speed={600}
      loop={testimonials.length > 1}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>{renderCard(testimonial)}</SwiperSlide>
      ))}
    </Swiper>
  );
}
