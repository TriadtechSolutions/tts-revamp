"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", `/#${id}`);
  }
}

export default function NavLink({
  href,
  onClick,
  ...props
}: ComponentProps<typeof Link>) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    const hashMatch = typeof href === "string" && href.match(/^\/#(.+)$/);
    if (!hashMatch) return;

    const onHome =
      window.location.pathname === "/" || window.location.pathname === "";

    if (onHome) {
      event.preventDefault();
      scrollToHash(hashMatch[1]);
    }
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
