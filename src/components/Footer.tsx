"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { label: "About", href: "/#about", number: "01" },
  { label: "Services", href: "/#services", number: "02" },
  { label: "Expertise", href: "/#expertise", number: "03" },
  { label: "Projects", href: "/#projects", number: "04" },
  { label: "Contact", href: "/#contact", number: "05" },
  { label: "Process", href: "/sdlc", number: "06" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/saqlainhub",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saqlainhub1097/",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/saqlainhub1097/",
    icon: "instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/saqlain1097/",
    icon: "facebook",
  },
];

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      aria-hidden="true"
    >
      <path
        d="M7 17 17 7M7 7h10v10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SocialIcon({ name }: { name: string }) {
  const common = {
    className: "h-[18px] w-[18px]",
    "aria-hidden": true as const,
  };

  switch (name) {
    case "github":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.41.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.22-5.08 5.49.4.35.75 1.02.75 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      );

    case "linkedin":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.34H4.96V9h2.97v9.34ZM6.44 7.73a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm11.9 10.61h-2.97v-4.55c0-1.09-.02-2.49-1.52-2.49-1.52 0-1.75 1.19-1.75 2.41v4.63H9.13V9h2.85v1.28h.04c.4-.75 1.37-1.52 2.82-1.52 3.02 0 3.58 1.99 3.58 4.57v4.99Z" />
        </svg>
      );

    case "instagram":
      return (
        <svg
          {...common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle
            cx="17.5"
            cy="6.5"
            r=".8"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );

    case "facebook":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.5 21v-8.2h2.76l.41-3.2H13.5V7.56c0-.93.26-1.56 1.59-1.56h1.7V3.14c-.29-.04-1.29-.14-2.45-.14-2.43 0-4.09 1.48-4.09 4.2v2.4H7.5v3.2h2.75V21h3.25Z" />
        </svg>
      );

    default:
      return null;
  }
}

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative isolate overflow-hidden border-t border-[var(--border)] bg-[var(--background)]"
      style={{
        background: "var(--background)",
        borderColor: "var(--border)",
        color: "var(--foreground)",
      }}>
      {/* Ambient background effects */}
      <div className="pointer-events-none absolute -top-36 left-1/2 h-80 w-[min(85vw,800px)] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: "var(--accent)" }}
      />

      <div className="container mx-auto max-w-7xl px-5 sm:px-8">


        {/* Main footer content */}
        <div className="grid gap-12 py-12 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr] lg:gap-16 lg:py-16">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="#home"
              className="shrink-0 text-[25px] font-bold tracking-[-1.2px] text-[var(--foreground)] no-underline"
              aria-label="Saqlain Ahmad — back to home"
            >
              Saqlain<span className="font-medium text-[var(--accent)]">Hub</span>
              <span className="ml-0.5 text-[var(--accent)]">.</span>
            </Link>

            <p className="mt-2 text-sm leading-7 text-[var(--foreground-secondary)]">
              Full Stack Software Engineer | AI Engineer

            </p>

            <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
              Engineering thoughtful digital experiences, intelligent
              applications, and dependable software.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-md border border-[var(--border)] px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-wider text-[var(--foreground-secondary)]">
                Full Stack Development
              </span>
              <span className="rounded-md border border-[var(--border)] px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-wider text-[var(--foreground-secondary)]">
                AI Engineering
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
              Navigation
            </h3>

            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex w-fit items-center gap-3 text-sm text-[var(--foreground-secondary)] transition-colors duration-200 hover:text-[var(--accent)]"
                  >
                    <span className="font-mono text-[10px] text-[var(--foreground-muted)] transition-colors group-hover:text-[var(--accent)]">
                      {item.number}
                    </span>
                    <span>{item.label}</span>
                    <span className="h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-5" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social and location */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
              Connect
            </h3>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const isPlaceholder = social.href.startsWith("YOUR-");

                return (
                  <a
                    key={social.label}
                    href={isPlaceholder ? undefined : social.href}
                    target={isPlaceholder ? undefined : "_blank"}
                    rel={isPlaceholder ? undefined : "noopener noreferrer"}
                    aria-label={social.label}
                    aria-disabled={isPlaceholder || undefined}
                    title={isPlaceholder ? "Add your profile URL" : social.label}
                    onClick={
                      isPlaceholder
                        ? (event) => event.preventDefault()
                        : undefined
                    }
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background-secondary)] text-[var(--foreground-secondary)] transition-all duration-300 ${isPlaceholder
                      ? "cursor-not-allowed opacity-40"
                      : "hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-[0_8px_24px_-12px_var(--accent)]"
                      }`}
                  >
                    <SocialIcon name={social.icon} />
                  </a>
                );
              })}
            </div>

            <div className="mt-8 border-t border-[var(--border)] pt-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
                Based in
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-[var(--foreground-secondary)]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-[var(--accent)]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  aria-hidden="true"
                >
                  <path
                    d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                Chiniot, Punjab, Pakistan
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-[var(--border)] py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-[var(--foreground-muted)]">
            © {currentYear ?? ""}{" "}
            <span className="font-medium text-[var(--foreground-secondary)]">
              Saqlain Ahmad
            </span>
            . All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <span className="flex items-center gap-2 text-xs text-[var(--foreground-muted)]">
              Designed with intention
              <span className="text-[var(--accent)]">✳</span>
            </span>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="group inline-flex items-center gap-2 text-xs font-medium text-[var(--foreground-secondary)] transition-colors hover:text-[var(--accent)]"
            >
              Back to top
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[var(--accent)]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path
                    d="M12 19V5m-6 6 6-6 6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}