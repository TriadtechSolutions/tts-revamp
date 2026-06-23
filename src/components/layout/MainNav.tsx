"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import { useRef, useState } from "react";
import { getSiteData } from "@/lib/content";
import type { MenuItem } from "@/lib/types";

interface NavItem {
  title: string;
  url: string;
  children?: MenuItem[];
}

interface MainNavProps {
  onClose: () => void;
}

const DROPDOWN_CLOSE_DELAY_MS = 280;

export default function MainNav({ onClose }: MainNavProps) {
  const { menus } = getSiteData();
  const items = menus.main;
  const serviceItems = menus.services;
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
        <li className="nav-item menu-close d-lg-none">
          <button
            className="close-menu-btn"
            aria-label="Close menu"
            type="button"
            onClick={onClose}
          >
            ×
          </button>
        </li>
        {tree.map((item) => (
          <li
            key={item.title}
            className={`nav-item${item.children?.length ? " has-submenu" : ""}${
              openDropdown === item.title ? " open is-open" : ""
            }`}
            onMouseEnter={() => item.children?.length && openDropdownMenu(item.title)}
            onMouseLeave={() => item.children?.length && scheduleCloseDropdown()}
          >
            {item.children?.length ? (
              <>
                <span
                  className="nav-link nav-link--parent"
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleDropdown(item.title)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      toggleDropdown(item.title);
                    }
                  }}
                >
                  {item.title}
                  <span className="dropdown-arrow">▼</span>
                </span>
                <ul
                  className="submenu dropdown-menu glass-dropdown"
                  onMouseEnter={() => openDropdownMenu(item.title)}
                  onMouseLeave={scheduleCloseDropdown}
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
