"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Projects", href: "/#projects" },
  { label: "SDLC", href: "/sdlc" },
];

export default function Header() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Restore the saved theme when the component mounts.
  useEffect(() => {
    const savedTheme = localStorage.getItem("saqlainhub-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      document.documentElement.dataset.theme = savedTheme;
    } else {
      document.documentElement.dataset.theme = "light";
    }
  }, []);

  // Switch themes and persist the user's preference.
  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("saqlainhub-theme", nextTheme);
  }

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--header-background)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] w-[calc(100%-40px)] max-w-[1160px] items-center justify-between gap-5 sm:w-[calc(100%-64px)]">

        {/* Text-only brand */}
        <a
          href="#home"
          aria-label="SaqlainHub home"
          className="shrink-0 text-[25px] font-bold tracking-[-1.2px] text-[var(--foreground)] no-underline"
          onClick={closeMobileMenu}
        >
          Saqlain<span className="font-medium text-[var(--accent)]">Hub</span>
          <span className="ml-0.5 text-[var(--accent)]">.</span>
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-2 text-[13px] font-medium tracking-wide text-[var(--foreground-secondary)] no-underline transition-colors duration-200 hover:text-[var(--accent)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="grid size-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground-secondary)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {theme === "dark" ? (
              /* Sun icon */
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-[18px]"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
              </svg>
            ) : (
              /* Moon icon */
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-[18px]"
                aria-hidden="true"
              >
                <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
              </svg>
            )}
          </button>

          <a
            href="/#contact"
            className="hidden items-center gap-2 rounded-lg bg-[var(--accent)] px-4 py-2.5 text-[13px] font-semibold text-[var(--accent-foreground)] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 sm:inline-flex"
          >
            Let&apos;s talk
            <span aria-hidden="true">↗</span>
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="grid size-10 place-items-center rounded-lg border border-[var(--border)] text-[var(--foreground)] transition-colors hover:border-[var(--accent)] lg:hidden"
          >
            {mobileMenuOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                className="size-5"
                aria-hidden="true"
              >
                <path d="m18 6-12 12M6 6l12 12" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                className="size-5"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-[var(--border)] transition-all duration-200 lg:hidden ${
          mobileMenuOpen
            ? "max-h-80 opacity-100"
            : "max-h-0 border-t-transparent opacity-0"
        }`}
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex w-[calc(100%-40px)] max-w-[1160px] flex-col gap-1 py-3 sm:w-[calc(100%-64px)]"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              tabIndex={mobileMenuOpen ? 0 : -1}
              className="rounded-lg px-3 py-3 text-sm font-medium text-[var(--foreground-secondary)] no-underline transition-colors hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/#contact"
            onClick={closeMobileMenu}
            tabIndex={mobileMenuOpen ? 0 : -1}
            className="mt-1 rounded-lg bg-[var(--accent)] px-3 py-3 text-center text-sm font-semibold text-[var(--accent-foreground)] no-underline transition-opacity hover:opacity-90"
          >
            Let&apos;s talk ↗
          </a>
        </nav>
      </div>
    </header>
  );
}