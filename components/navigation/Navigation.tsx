"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/lab", label: "Lab" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-sm font-semibold tracking-wide text-ink hover:text-accent"
        >
          Usman Ali Awan
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const active = pathname === link.href || pathname?.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm ${
                  active ? "text-ink" : "text-ink-muted hover:text-ink"
                } relative py-1`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-[1px] left-0 h-px w-full bg-accent" />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="text-sm text-ink-muted hover:text-ink"
          >
            Contact
          </Link>
          <a
            href="/resume-usman-ali-awan.pdf"
            className="ml-2 rounded border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm text-accent hover:bg-accent/15"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-9 w-9 flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`h-px w-5 bg-ink transition-transform duration-200 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-ink transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-px w-5 bg-ink transition-transform duration-200 ${
              open ? "-translate-y-[5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="md:hidden border-t border-border bg-bg px-6 py-6 flex flex-col gap-5"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base text-ink-muted hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="text-base text-ink-muted hover:text-ink">
            Contact
          </Link>
          <a
            href="/resume-usman-ali-awan.pdf"
            className="mt-2 inline-block w-fit rounded border border-accent/40 bg-accent/10 px-4 py-2 text-sm text-accent"
          >
            Download Resume
          </a>
        </nav>
      )}
    </header>
  );
}
