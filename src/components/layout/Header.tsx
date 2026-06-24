"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { assetPath } from "@/lib/asset-path";
import MainNav from "./MainNav";

const LOGO = assetPath("/images/tts-logo.png");

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-opened", menuOpen);
    return () => document.body.classList.remove("menu-opened");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header id="header">
      <nav id="navbar-main" className="navbar navbar-expand-lg">
        <Link href="/" className="navbar-brand" onClick={closeMenu}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO}
            srcSet={`${LOGO} 1x, ${LOGO} 2x`}
            alt="Triadtech Solutions"
            className="site-logo"
            width={180}
            height={58}
          />
        </Link>

        <button
          className="navbar-toggler mobile-nav-toggle d-lg-none"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="mobile-nav-toggle-label">
            {menuOpen ? "Close" : "Menu"}
          </span>
        </button>

        {menuOpen && (
          <button
            type="button"
            className="mobile-menu-backdrop d-lg-none"
            aria-label="Close menu"
            onClick={closeMenu}
          />
        )}

        <div
          id="CollapsingNavbar"
          className={`navbar-collapse${menuOpen ? " show" : ""}`}
        >
          <MainNav onClose={closeMenu} menuOpen={menuOpen} />
        </div>
      </nav>
    </header>
  );
}
