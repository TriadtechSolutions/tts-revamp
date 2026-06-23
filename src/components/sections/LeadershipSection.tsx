const LEADERS = [
  {
    image: {
      path: "/images/2025-09/Resized_Image_297x297.png",
      alt: "CODEPILOT leadership profile",
    },
    body: "<p>My expertise lies in using technology to transform transactional relationships into genuine human connections, one thoughtful digital experience at a time.</p><p><strong>CODEPILOT</strong></p><p>Co-founder &amp; Protocol of Creation</p>",
  },
  {
    image: {
      path: "/images/2025-09/ChatGPT Image Sep 2, 2025, 10_00_06 PM.png",
      alt: "VISION FORGE leadership profile",
    },
    body: "<p>Innovation isn&rsquo;t just about technology &mdash; it&rsquo;s about creating meaningful connections between businesses and their customers through thoughtful digital experiences.</p><p><strong>VISION FORGE</strong></p><p>Co-founder &amp; Protocol of Creation</p>",
  },
  {
    image: {
      path: "/images/2025-09/ChatGPT Image Sep 2, 2025, 10_33_16 PM.png",
      alt: "OPTIFLOW leadership profile",
    },
    body: "<p>Building products that elevate functionality - delivering intuitive and scalable digital experiences that empower growth and innovation</p><p><strong>OPTIFLOW</strong></p><p>Co-founder &amp; Protocol of Development</p>",
  },
];

export default function LeadershipSection() {
  return (
    <section className="leadership-section">
      <div className="leader-bg-image-wrapper">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/2025-09/leadership page.png"
          alt="Leadership background"
          className="leader-bg-image"
        />
      </div>
      <div className="leadership-title-wrapper">
        <h2 className="leadership-title">Our Leadership</h2>
      </div>
      <div className="leaders-container">
        <div className="field--name-field-leaders">
          {LEADERS.map((leader) => (
            <div key={leader.image.path} className="leader-card">
              <div className="leader-image-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={leader.image.path} alt={leader.image.alt} />
              </div>
              <div
                className="leader-content"
                dangerouslySetInnerHTML={{ __html: leader.body }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
