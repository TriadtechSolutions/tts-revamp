import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToHash from "@/components/layout/ScrollToHash";
import { buildMetadata, organizationJsonLd } from "@/lib/seo";
import { getPageBySlug } from "@/lib/content";
import "./globals.css";

const homePage = getPageBySlug("home")!;

export const metadata: Metadata = buildMetadata(homePage);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://db.onlinewebfonts.com/c/4abc7b446177a4b533468cd3635fe0b6?family=Abril+Fatface"
        />
        <link
          rel="stylesheet"
          href="https://db.onlinewebfonts.com/c/771c49f7c4367802d13ab202d164204b?family=Outfit"
        />
        <link
          rel="stylesheet"
          href="https://db.onlinewebfonts.com/c/b22bc1a9c9f1ee6fa9c2a1de69be7903?family=Syncopate"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
      </head>
      <body>
        <ScrollToHash />
        <div id="page-wrapper">
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </div>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
