
"use client";

import { useEffect, useState } from "react";

const services = [
  {
    number: "01",
    category: "AI SOLUTIONS",
    title: "AI Support Systems",
    description:
      "Give customers useful answers from your business knowledge, with AI that retrieves relevant information.",
    tags: ["RAG", "LLMs", "Knowledge bases"],
    type: "support",
  },
  {
    number: "02",
    category: "INTELLIGENT WORKFLOWS",
    title: "AI Agents & Automation",
    description:
      "Connect AI with tools, APIs, and business processes to automate repetitive tasks and coordinate multi-step workflows.",
    tags: ["Tool calling", "APIs", "Workflows"],
    type: "automation",
  },
  {
    number: "03",
    category: "WEB APPLICATIONS",
    title: "Full-Stack Applications",
    description:
      "Build responsive web applications with thoughtful interfaces, reliable backend APIs, authentication, and structured data.",
    tags: ["Next.js", "FastAPI", "PostgreSQL"],
    type: "application",
  },
  {
    number: "04",
    category: "KNOWLEDGE & SEARCH",
    title: "Document Intelligence",
    description:
      "Turn documents and internal information into searchable knowledge systems that help people find relevant answers faster.",
    tags: ["Embeddings", "Retrieval", "LLMs"],
    type: "knowledge",
  },
];

const technologies = [
  "Html", "CSS", "TailwindCSS", "JavaScript", "TypeScript", "React", "Next",
  "Python", "FastAPI", "Pydantic", "PostgreSQL", "MongoDB", "Prisma", "SQLAlchemy",
  "LLMs", "RAG", "Tool Calling", "Agentic AI", "Responsive Design", "Auth", "OAuth",
  "REST API", "GraphQL", "Deployment"
];

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/saqlainhub1097/", mark: "in" },
  { name: "Instagram", href: "https://www.instagram.com/saqlainhub1097/", mark: "ig" },
  { name: "Facebook", href: "https://www.facebook.com/saqlain1097/", mark: "f" },
  { name: "GitHub", href: "https://github.com/saqlainhub/", mark: "gh" },
  { name: "WhatsApp", href: "https://wa.me/923454409621", mark: "wa" },
];

function ServiceVisual({ type }: { type: string }) {
  return (
    <div className="relative max-h-[200px] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background-secondary)] p-3 sm:min-h-[215px] sm:p-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-16 size-48 rounded-full bg-[var(--accent)] opacity-[0.09] blur-[65px]"
      />

      {type === "support" && (
        <div className="relative flex min-h-[172px] flex-col justify-between gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="grid size-8 place-items-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="size-4">
                  <path d="M5 5.5h14v10H11l-4 3v-3H5z" />
                  <path d="M9 9h6M9 12h4" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-[var(--foreground)]">Knowledge assistant</p>
                <p className="text-[10px] text-[var(--foreground-muted)]">Customer workspace</p>
              </div>
            </div>
            <span className="size-2 rounded-full bg-[var(--accent)]" />
          </div>

          <div className="space-y-2.5">
            <div className="ml-auto max-w-[85%] rounded-xl rounded-br-sm bg-[var(--accent-soft)] px-3 py-2 text-xs leading-5 text-[var(--foreground)]">
              What is your refund policy?
            </div>
            <div className="flex items-start gap-2">
              <div className="grid size-7 shrink-0 place-items-center rounded-lg bg-[var(--accent)] text-[10px] font-bold text-[var(--accent-foreground)]">
                AI
              </div>
              <div className="max-w-[90%] rounded-xl rounded-tl-sm border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs leading-5 text-[var(--foreground-secondary)]">
                I found the relevant policy in your knowledge base.
                <div className="mt-1.5 flex items-center gap-1.5 text-[10px] text-[var(--accent)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-3.5">
                    <path d="M7 3h7l5 5v13H7z" />
                    <path d="M14 3v5h5M10 13h6M10 16h6" />
                  </svg>
                  Refund-policy.pdf
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2">
            <span className="size-1.5 rounded-full bg-[var(--accent)]" />
            <span className="text-[10px] text-[var(--foreground-muted)]">
              Answers grounded in your information
            </span>
          </div>
        </div>
      )}

      {type === "automation" && (
        <div className="relative flex min-h-[172px] flex-col justify-between gap-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-[var(--foreground)]">Workflow builder</p>
              <p className="mt-1 text-[10px] text-[var(--foreground-muted)]">Example automation flow</p>
            </div>
            <div className="rounded-lg border border-[var(--border)] px-2.5 py-1.5 text-[10px] text-[var(--foreground-secondary)]">
              Workflow
            </div>
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-1.5">
            {[
              { title: "Trigger", icon: "trigger" },
              { title: "AI step", icon: "ai" },
              { title: "Action", icon: "action" },
            ].map((item, i) => (
              <div key={item.title} className="contents">
                <div className={`rounded-lg border p-2 text-center ${
                  i === 1
                    ? "border-[var(--accent)]/40 bg-[var(--accent-soft)]"
                    : "border-[var(--border)] bg-[var(--surface)]"
                }`}>
                  <div className={`mx-auto grid size-7 place-items-center rounded-lg ${
                    i === 1
                      ? "bg-[var(--surface)] text-[var(--accent)]"
                      : "bg-[var(--accent-soft)] text-[var(--accent)]"
                  }`}>
                    {item.icon === "trigger" && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="size-4">
                        <path d="M12 3v4m0 10v4M3 12h4m10 0h4" />
                        <circle cx="12" cy="12" r="5" />
                      </svg>
                    )}
                    {item.icon === "ai" && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="size-4">
                        <path d="m12 3 2.3 6.7L21 12l-6.7 2.3L12 21l-2.3-6.7L3 12l6.7-2.3L12 3Z" />
                      </svg>
                    )}
                    {item.icon === "action" && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="size-4">
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    )}
                  </div>
                  <p className="mt-1.5 text-[10px] font-medium text-[var(--foreground)]">{item.title}</p>
                </div>
                {i < 2 && <span className="text-xs text-[var(--accent)]">→</span>}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {["API integrations", "Tool calling", "Business logic"].map((tag) => (
              <span key={tag} className="rounded-full border border-[var(--border)] px-2 py-1 text-[10px] text-[var(--foreground-secondary)]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {type === "application" && (
        <div className="relative flex min-h-[172px] flex-col gap-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-[var(--foreground)]">Application overview</p>
              <p className="mt-1 text-[10px] text-[var(--foreground-muted)]">A connected software system</p>
            </div>
            <span className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[10px] text-[var(--foreground-muted)]">
              Web app
            </span>
          </div>

          <div className="grid flex-1 grid-cols-[72px_1fr] gap-2.5">
            <div className="space-y-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-2">
              <div className="mb-3 h-1.5 w-10 rounded-full bg-[var(--accent)] opacity-60" />
              {["Overview", "Records", "Settings"].map((item, i) => (
                <div key={item} className={`rounded-md px-1.5 py-1 text-[9px] ${
                  i === 0
                    ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                    : "text-[var(--foreground-muted)]"
                }`}>
                  {item}
                </div>
              ))}
            </div>

            <div className="min-w-0 space-y-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-2.5">
              <div>
                <p className="text-[10px] text-[var(--foreground-muted)]">Workspace</p>
                <p className="mt-0.5 text-sm font-semibold text-[var(--foreground)]">Dashboard</p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg border border-[var(--border)] p-1.5">
                  <p className="text-[9px] text-[var(--foreground-muted)]">Frontend</p>
                  <p className="mt-0.5 text-[10px] font-semibold text-[var(--foreground)]">Next.js</p>
                </div>
                <div className="rounded-lg border border-[var(--border)] p-1.5">
                  <p className="text-[9px] text-[var(--foreground-muted)]">Backend</p>
                  <p className="mt-0.5 text-[10px] font-semibold text-[var(--foreground)]">FastAPI</p>
                </div>
              </div>

              <div className="flex h-6 items-end gap-1">
                {[35, 60, 43, 78, 52, 88, 67, 100, 74, 90].map((height, i) => (
                  <div key={i} style={{ height: `${height}%` }} className="flex-1 rounded-t-sm bg-[var(--accent)] opacity-70" />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {type === "knowledge" && (
        <div className="relative flex min-h-[172px] flex-col justify-between gap-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-[var(--foreground)]">Knowledge explorer</p>
              <p className="mt-1 text-[10px] text-[var(--foreground-muted)]">Search across documents</p>
            </div>
            <div className="grid size-8 place-items-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="size-4">
                <circle cx="10.5" cy="10.5" r="6.5" />
                <path d="m15.5 15.5 4 4" />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="size-4 shrink-0 text-[var(--accent)]">
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="m15.5 15.5 4 4" />
            </svg>
            <span className="truncate text-xs text-[var(--foreground-muted)]">
              Search policies, guides, files...
            </span>
            <span className="ml-auto text-[10px] text-[var(--foreground-muted)]">↵</span>
          </div>

          <div className="space-y-1.5">
            {[
              { title: "Product documentation", detail: "Relevant passage · Section 2" },
              { title: "Internal policy guide", detail: "Related result · Section 4" },
            ].map((item, i) => (
              <div key={item.title} className="flex items-center gap-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-2.5">
                <div className="grid size-7 shrink-0 place-items-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-4">
                    <path d="M6 3h8l4 4v14H6z" />
                    <path d="M14 3v5h4M9 12h6M9 16h6" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="truncate text-xs font-medium text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-0.5 truncate text-[10px] text-[var(--foreground-muted)]">{item.detail}</p>
                </div>
                {i === 0 && <span className="ml-auto shrink-0 text-[10px] text-[var(--accent)]">Best match</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % services.length);
    }, 5500);

    return () => window.clearInterval(interval);
  }, [paused]);

  const service = services[activeSlide];

  function nextSlide() {
    setActiveSlide((current) => (current + 1) % services.length);
  }

  function previousSlide() {
    setActiveSlide((current) => (current - 1 + services.length) % services.length);
  }

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden"
    style={{
        background: "var(--background)",
        borderColor: "var(--border)",
        color: "var(--foreground)",
      }}>

        <div className="pointer-events-none absolute -top-36 left-1/2 h-80 w-[min(85vw,800px)] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: "var(--accent)" }}
      />
      
      <div className="pointer-events-none absolute -left-40 top-10 size-96 rounded-full bg-[var(--accent)] opacity-[0.045] blur-[100px]" />

      <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1160px] items-center gap-9 py-8 sm:w-[calc(100%-64px)] sm:gap-10 sm:py-10 lg:min-h-[calc(100svh-140px)] lg:grid-cols-[1fr_0.95fr] lg:gap-10 lg:py-6">
        {/* Introduction */}
        <div className="relative z-10">
          <p className="mb-4 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--accent)] sm:text-xs">
            <span className="h-px w-6 bg-[var(--accent)]" />
            Software Engineer · AI Engineer
          </p>

          <h1
            id="hero-title"
            className="max-w-[600px] text-4xl font-bold leading-[1.1] tracking-[-0.045em] text-[var(--foreground)] sm:text-5xl md:text-6xl"
          >
            Software that works.
            <br />
            <span className="text-[var(--accent)]">AI that helps.</span>
          </h1>

          <p className="mt-5 max-w-[510px] text-base leading-7 text-[var(--foreground-secondary)] sm:mt-5 sm:text-lg sm:leading-8">
            I build full-stack applications, intelligent support systems,
            and AI-powered workflows that help businesses solve practical
            problems.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center justify-center gap-3 rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--accent-foreground)] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
            >
              Explore my work <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--border-strong)] px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] no-underline transition-colors duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]"
            >
              Let&apos;s talk
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <span className="mr-1 text-xs text-[var(--foreground-muted)]">Connect</span>

            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                title={social.name}
                className="group relative grid size-8 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[11px] font-bold lowercase text-[var(--foreground-secondary)] no-underline transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
              >
                {social.mark}
                <span className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 -translate-x-1/2 translate-y-1 rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-[11px] font-medium text-[var(--foreground)] opacity-0 shadow-lg transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Compact service carousel */}
        <div
          className="relative mx-auto w-full max-w-[470px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setPaused(false);
            }
          }}
        >
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] opacity-[0.08] blur-[90px]"
          />

          <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3.5 shadow-2xl shadow-[var(--shadow-color)] sm:p-4">
            <div className="flex items-center justify-between gap-3 border-b border-[var(--border)] pb-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
                  What I build
                </p>
                <p className="mt-0.5 text-sm font-semibold text-[var(--foreground)]">
                  Solutions for real problems
                </p>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={previousSlide}
                  aria-label="Previous service"
                  className="grid size-8 place-items-center rounded-full border border-[var(--border)] text-[var(--foreground-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next service"
                  className="grid size-8 place-items-center rounded-full border border-[var(--border)] text-[var(--foreground-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>

            <div key={service.number} className="service-copy pt-4">
      

              <h2 className="mt-2.5 text-xl font-bold tracking-tight text-[var(--foreground)] sm:text-2xl">
                {service.title}
              </h2>

              <p className="mt-1.5 min-h-[60px] text-sm leading-[1.55rem] text-[var(--foreground-secondary)]">
                {service.description}
              </p>

             
            </div>

            <div key={`visual-${service.number}`} className="service-visual mt-3.5">
              <ServiceVisual type={service.type} />
            </div>

            <div className="mt-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5" aria-label={`Slide ${activeSlide + 1} of ${services.length}`}>
                {services.map((item, index) => (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Show ${item.title}`}
                    aria-current={activeSlide === index ? "true" : undefined}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeSlide === index
                        ? "w-7 bg-[var(--accent)]"
                        : "w-1.5 bg-[var(--foreground-muted)] opacity-40 hover:opacity-80"
                    }`}
                  />
                ))}
              </div>

              <span className="text-[10px] text-[var(--foreground-muted)]">
                {paused ? "Paused" : "Auto-playing"}
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-[2px] overflow-hidden rounded-b-2xl bg-[var(--border)]">
              {!paused && (
                <div
                  key={activeSlide}
                  className="carousel-progress h-full bg-[var(--accent)]"
                />
              )}
            </div>
          </div>


        </div>
      </div>

      {/* Technology ticker */}
      <div className="relative border-y border-[var(--border)] bg-[var(--background-secondary)]">
        <div className="mx-auto flex max-w-[1440px] items-center gap-4 overflow-hidden py-3">
          <span className="hidden sm:block z-10 ml-5 shrink-0 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--foreground-muted)] sm:ml-8">
            My toolkit
          </span>

          <div className="ticker-viewport min-w-0 flex-1 overflow-hidden">
            <div className="ticker-track flex w-max items-center">
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className="flex shrink-0 items-center"
                  aria-hidden={copy === 1}
                >
                  {technologies.map((technology) => (
                    <span
                      key={`${copy}-${technology}`}
                      className="mx-2.5 inline-flex items-center gap-2 whitespace-nowrap text-xs font-medium text-[var(--foreground-secondary)] sm:mx-4"
                    >
                      <span className="size-1.5 rounded-full bg-[var(--accent)] opacity-70" />
                      {technology}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .service-copy,
        .service-visual {
          animation: service-enter 320ms ease both;
        }

        .ticker-track {
          animation: ticker-scroll 34s linear infinite;
        }

        .ticker-viewport:hover .ticker-track {
          animation-play-state: paused;
        }

        .carousel-progress {
          animation: progress 5.5s linear both;
        }

        @keyframes service-enter {
          from {
            opacity: 0;
            transform: translateY(7px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }

        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .service-copy,
          .service-visual,
          .ticker-track,
          .carousel-progress {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
