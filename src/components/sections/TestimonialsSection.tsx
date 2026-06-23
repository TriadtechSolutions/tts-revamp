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
        <div className="testimonials-grid">
          {section.testimonials?.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div
                className="testimonial-content"
                dangerouslySetInnerHTML={{ __html: t.body }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
