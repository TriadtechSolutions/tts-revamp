export type ServiceFeatureBlock = {
  title: string;
  description: string;
};

export function parseServiceBlocks(html?: string): ServiceFeatureBlock[] {
  if (!html) return [];

  const blocks: ServiceFeatureBlock[] = [];
  const paragraphRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  let match = paragraphRegex.exec(html);

  while (match) {
    const inner = match[1];
    const strongMatch = inner.match(/<strong[^>]*>([\s\S]*?)<\/strong>/i);

    if (strongMatch) {
      const title = strongMatch[1].replace(/<[^>]+>/g, "").trim();
      const afterStrong = inner.slice(inner.indexOf("</strong>") + 9);
      const description = afterStrong
        .replace(/<br\s*\/?>/gi, " ")
        .replace(/<[^>]+>/g, "")
        .replace(/\s+/g, " ")
        .trim();

      if (title) {
        blocks.push({ title, description });
      }
    }

    match = paragraphRegex.exec(html);
  }

  return blocks;
}

export function splitServiceTitle(title: string) {
  const parts = title.trim().split(/\s+/);
  if (parts.length < 2) {
    return { lead: title, accent: "" };
  }

  return {
    lead: parts[0],
    accent: parts.slice(1).join(" "),
  };
}

export function splitCtaHeading(ctaTitle: string) {
  const match = ctaTitle.match(/^Let's\s+(.+)$/i);
  if (!match) {
    return { prefix: ctaTitle, accent: "" };
  }

  const rest = match[1].trim();
  const words = rest.split(/\s+/);

  if (words.length < 2) {
    return { prefix: "Let's", accent: rest };
  }

  return {
    prefix: "Let's",
    accent: words[0],
    suffix: words.slice(1).join(" "),
  };
}
