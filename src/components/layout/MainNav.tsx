"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import { useEffect, useRef, useState } from "react";
import { getSiteData } from "@/lib/content";
import type { MenuItem } from "@/lib/types";

interface NavItem {
  title: string;
  url: string;
  children?: MenuItem[];
}

interface MainNavProps {
  onClose: () => void;
  menuOpen?: boolean;
}

const DROPDOWN_CLOSE_DELAY_MS = 280;

function useDesktopNav() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 992px)");
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

export default function MainNav({ onClose, menuOpen = false }: MainNavProps) {
  const { menus } = getSiteData();
  const items = menus.main;
  const serviceItems = menus.services;
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isDesktop = useDesktopNav();

  useEffect(() => {
    if (!menuOpen) {
      setOpenDropdown(null);
    }
  }, [menuOpen]);

  const whatWeDoChildren: MenuItem[] = serviceItems.filter(
    (item) => item.url !== "/manual-testing"
  );

  const tree: NavItem[] = [
    {
      title: "Company",
      url: "#",
      children: items.filter((i) => ["About us", "Leadership"].includes(i.title)),
    },
    {
      title: "What We Do",
      url: "/services-grid",
      children: whatWeDoChildren,
    },
    {
      title: "Packages",
      url: "#",
      children: items.filter((i) =>
        ["Web Development Package", "SEO Package"].includes(i.title)
      ),
    },
    { title: "Blog", url: "/blog" },
    { title: "Contact Us", url: "/get-a-quote" },
  ];

  const openDropdownMenu = (title: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenDropdown(title);
  };

  const scheduleCloseDropdown = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
      closeTimerRef.current = null;
    }, DROPDOWN_CLOSE_DELAY_MS);
  };

  const toggleDropdown = (title: string) => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setOpenDropdown((current) => (current === title ? null : title));
  };

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      id="block-tts-mainnavigation"
      className="block block-menu navigation menu--main"
    >
      <ul className="clearfix nav navbar-nav">
        {tree.map((item) => (
          <li
            key={item.title}
            className={`nav-item${item.children?.length ? " has-submenu" : ""}${
              openDropdown === item.title ? " open is-open" : ""
            }`}
            onMouseEnter={() =>
              isDesktop && item.children?.length && openDropdownMenu(item.title)
            }
            onMouseLeave={() =>
              isDesktop && item.children?.length && scheduleCloseDropdown()
            }
          >
            {item.children?.length ? (
              <>
                <button
                  type="button"
                  className="nav-link nav-link--parent"
                  aria-expanded={openDropdown === item.title}
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    toggleDropdown(item.title);
                  }}
                >
                  {item.title}
                  <span className="dropdown-arrow" aria-hidden="true">
                    ▼
                  </span>
                </button>
                <ul
                  className="submenu dropdown-menu glass-dropdown"
                  onMouseEnter={() =>
                    isDesktop && openDropdownMenu(item.title)
                  }
                  onMouseLeave={() => isDesktop && scheduleCloseDropdown()}
                >
                  {item.children.map((child) => (
                    <li key={child.url} className="submenu-item">
                      <NavLink
                        href={child.url}
                        className="submenu-link"
                        onClick={onClose}
                      >
                        <span className="submenu-link-text">{child.title}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link
                href={item.url}
                className={`nav-link nav-link--${item.title.toLowerCase().replace(/\s/g, "")}${
                  item.title === "Contact Us" ? " nav-link--contactus" : ""
                }`}
                onClick={onClose}
              >
                {item.title === "Blog" ? "Blogs" : item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
