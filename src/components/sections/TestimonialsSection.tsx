import TestimonialsSlider from "@/components/sections/TestimonialsSlider";
import type { Section } from "@/lib/types";

export default function TestimonialsSection({ section }: { section: Section }) {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          {section.title && <h2 className="testimonials-title">{section.title}</h2>}
          {section.subtitle && (
            <p className="testimonials-subtitle">{section.subtitle}</p>
          )}
        </div>
        {section.testimonials && (
          <TestimonialsSlider testimonials={section.testimonials} />
        )}
      </div>
    </section>
  );
}
