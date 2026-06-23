"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;

    const scroll = () => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    requestAnimationFrame(scroll);
    const timer = window.setTimeout(scroll, 150);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
