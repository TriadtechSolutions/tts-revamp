export interface ImageAsset {
  path: string;
  alt: string;
}

export interface Testimonial {
  body: string;
}

export interface Section {
  id: string;
  type: string;
  title?: string;
  subtitle?: string;
  body?: string;
  button?: string;
  bgImage?: ImageAsset;
  image?: ImageAsset;
  testimonials?: Testimonial[];
}

export interface Page {
  id: string;
  slug: string;
  title: string;
  type: string;
  url: string;
  sections: Section[];
  body?: string;
  detailed_title?: string;
  detailed_banner_text?: string;
  detailed_description1?: string;
  detailed_description2?: string;
  detailed_choose_us?: string;
  detailed_button?: { title: string; url: string };
  detailed_banner_image?: ImageAsset;
  detailed_front_image?: ImageAsset;
  image2?: ImageAsset;
  contact_title?: string;
  contact_form_title?: string;
  contact_description?: string;
  contact_list?: string;
  metaDescription?: string;
}

export interface MenuItem {
  title: string;
  url: string;
  parent: string | null;
  expanded: boolean;
}

export interface ServiceItem {
  slug: string;
  title: string;
  body: string;
  image: ImageAsset;
  learnMoreUrl: string;
  quoteUrl: string;
}

export interface SiteSettings {
  contactHeading: string;
  contactPhone: string;
  contactEmail: string;
  socialHeading: string;
  tagline: string;
  instagramLink: string;
  facebookLink: string;
  logoLink: string;
  footerLogo: string;
}

export interface SiteData {
  pages: Record<string, Page>;
  menus: {
    main: MenuItem[];
    footer: MenuItem[];
    services: MenuItem[];
  };
  aliases: Record<string, string>;
  services: ServiceItem[];
  settings: SiteSettings;
}

export interface BlogCategory {
  name: string;
  slug: string;
}

export interface BlogStat {
  value: string;
  suffix: string;
  description: string;
}

export interface BlogHero {
  eyebrow: string;
  titleHtml: string;
  subtitle: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  category: string;
  categorySlug: string;
  author: string;
  readTime: string;
  published: string;
  tag?: string;
  template: "editorial" | "standard";
  image: ImageAsset;
  hero?: BlogHero;
  stats?: BlogStat[];
  contentFile?: string;
  body?: string;
}

export interface BlogData {
  categories: BlogCategory[];
  posts: BlogPost[];
}
