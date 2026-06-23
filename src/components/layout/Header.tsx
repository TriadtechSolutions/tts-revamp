"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MainNav from "./MainNav";

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
            src="/images/tts-logo.png"
            srcSet="/images/tts-logo.png 1x, /images/tts-logo.png 2x"
            alt="Triadtech Solutions"
            className="site-logo"
            width={260}
            height={85}
          />
        </Link>

        <button
          className="navbar-toggler d-lg-none"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="navbar-toggler-bars" aria-hidden="true">
            <span className={`hamburger-line${menuOpen ? " open" : ""}`} />
            <span className={`hamburger-line${menuOpen ? " open" : ""}`} />
            <span className={`hamburger-line${menuOpen ? " open" : ""}`} />
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
          <MainNav onClose={closeMenu} />
        </div>
      </nav>
    </header>
  );
}
