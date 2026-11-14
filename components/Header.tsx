"use client";

import { useEffect, useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { nav } from "@/lib/content";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled || open
          ? "bg-paper/90 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md"
          : "bg-paper"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:h-18">
        <a href="#main" aria-label="Katsu Seiba, back to top" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-ink-2 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a href="#reserve" className="btn btn-primary !min-h-11">
            Book a table
          </a>
        </nav>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="h-[calc(100dvh-4rem)] border-t border-line bg-paper px-4 pt-6 md:hidden"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-5 font-display text-3xl"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#reserve"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-8 w-full"
          >
            Book a table
          </a>
        </nav>
      )}
    </header>
  );
}
