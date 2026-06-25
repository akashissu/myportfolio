"use client";

import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { NavItem } from "@/src/types";

type NavbarProps = {
  items: NavItem[];
};

export function Navbar({ items }: NavbarProps) {
  const [activeSection, setActiveSection] = useState(items[0]?.id ?? "home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const onScroll = () => {
      const midpoint = window.innerHeight * 0.3;
      let current = items[0]?.id ?? "home";

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= midpoint && rect.bottom >= midpoint) {
          current = section.id;
          break;
        }
      }

      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-shell glass-card">
        <a className="brand-mark" href="#home" onClick={closeMenu}>
          <span className="brand-icon">AI</span>
          <span>
            <strong>Portfolio</strong>
            <small>Full Stack AI Engineer</small>
          </span>
        </a>

        <button className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className={`nav-links ${open ? "nav-links-open" : ""}`}>
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a className="button button-small button-secondary resume-button" href="/resume.txt" download onClick={closeMenu}>
            <Download size={16} />
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
