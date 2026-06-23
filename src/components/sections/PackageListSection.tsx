import Link from "next/link";

const CARD_COLORS = [
  "card-blue",
  "card-orange",
  "card-red",
  "card-green",
  "card-purple",
] as const;

const WEB_PACKAGES = [
  {
    title: "Launchpad",
    subtitle: "Kickstart your online presence",
    features: [
      "5-Page CMS Website",
      "Contact Us Form Integration",
      "Mobile Responsive Design",
      "Slider / Banners",
      "Image optimization",
      "Video/Image Galleries",
      "Premium Email Integration",
      "Google Map Integration",
      "Social Media Integration",
      "Mobile Number Integration",
      "Basic SEO Set-up",
      "Google Verification Certificate",
      "SSL Certificate",
      "CMS Guidance Through Remote/In-Person",
      "1 Month Free Support",
    ],
  },
  {
    title: "Momentum",
    subtitle: "Build credibility, attract customers",
    features: [
      "10-Page CMS Website",
      "Contact Form Integration",
      "Mobile Responsive Design",
      "Slider / Banners",
      "Image optimization",
      "Video/Image Galleries",
      "Premium Email Integration",
      "Social Media Integration",
      "Google Map Integration",
      "Mobile Number Integration",
      "Basic SEO Set-up",
      "Google Verification Certificate",
      "SSL Certificate",
      "CMS Guidance Through Remote",
      "1 Month Free Support",
    ],
  },
  {
    title: "Ignite",
    subtitle: "Boost growth with new innovation",
    features: [
      "12-Page CMS Website",
      "Customized Functionality",
      "WhatsApp & Messenger Chat Integration.",
      "Contact Form Integration",
      "Mobile Responsive Design",
      "Slider / Banners",
      "Image optimization",
      "Video/Image Galleries",
      "Social Media Integration",
      "Premium Email Integration",
      "Google Map Integration",
      "Mobile Number Integration",
      "Basic SEO Set-up",
      "Google Verification Certificate",
      "SSL Certificate",
      "1 Month Free Support",
      "CMS Guidance Through Remote",
    ],
  },
  {
    title: "Galaxy",
    subtitle: "Enterprise level, customized solutions.",
    features: [
      "20-Page CMS Website",
      "Customized Functionality",
      "CRM Integration",
      "3D Interactive Website Development",
      "WhatsApp & Messenger Chat Integration.",
      "Multi Language Integration",
      "Contact Form Integration",
      "Mobile Responsive Design",
      "Slider / Banners",
      "Image optimization",
      "Video/Image Galleries",
      "Social Media Integration",
      "Premium Email Integration",
      "Google Map Integration",
      "Mobile Number Integration",
      "Basic SEO Set-up",
      "Google Verification Certificate",
      "SSL Certificate",
      "CMS Guidance Through Remote",
      "1 Month Free Support",
    ],
  },
  {
    title: "E-Commerce",
    subtitle: "Streamlined shopping experience",
    features: [
      "Landing Page",
      "Product Page",
      "E-Commerce Functionality",
      "CRM Integration",
      "Advanced Product Search + Filters",
      "Customized Functionality",
      "Responsive Design",
      "Content Upload",
      "Payment Integration",
      "WhatsApp or Messenger Intergration",
      "Multi Language Integration",
      "Socialmedia Integration",
      "Premium Email Integration",
      "Google Map Integration",
      "Mobile Number Integration",
      "Google Verification Certificate",
      "SSL Certificate",
      "CMS Guidance Through Remote",
      "1 Month Free Support",
    ],
  },
];

export default function PackageListSection() {
  const packages = WEB_PACKAGES;

  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <h2>Transparent Pricing, Exceptional Value</h2>
        <p>
          Choose the package that fits your needs. All plans include our commitment to
          excellence and ongoing support.
        </p>
      </div>

      <div className="pricing-list">
        <div className="field--name-field-list">
          {packages.map((pkg, index) => (
            <div
              key={pkg.title}
              className={`pricing-card ${CARD_COLORS[index % CARD_COLORS.length]}`}
            >
              <h3 className="plan-title">{pkg.title}</h3>
              <p className="plan-subtitle">{pkg.subtitle}</p>
              <div className="field field--name-field-packages-feature">
                {pkg.features.map((feature) => (
                  <div key={feature} className="field__item">
                    {feature}
                  </div>
                ))}
              </div>
              <div className="plan-button">
                <Link href="/get-a-quote">Get a Quote</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
