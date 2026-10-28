
"use client";

import { useState } from "react";

const expertise = [
  {
    number: "01",
    title: "Full-Stack Development",
    description:
      "Responsive interfaces, backend APIs, authentication, database design, and production-ready application architecture.",
    technologies: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL"],
    icon: "code",
  },
  {
    number: "02",
    title: "AI Engineering",
    description:
      "Practical AI applications using language models, retrieval-augmented generation, tool calling, and knowledge systems.",
    technologies: ["LLMs", "RAG", "Embeddings", "AI APIs"],
    icon: "ai",
  },
  {
    number: "03",
    title: "Software Systems",
    description:
      "Connecting frontend, backend, databases, and AI services into coherent systems with maintainability in mind.",
    technologies: ["REST APIs", "SQLAlchemy", "Prisma", "Git"],
    icon: "systems",
  },
];

function ExpertiseIcon({ type }: { type: string }) {
  if (type === "code") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="size-5">
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
      </svg>
    );
  }

  if (type === "ai") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="size-5">
        <path d="m12 3 2.3 6.7L21 12l-6.7 2.3L12 21l-2.3-6.7L3 12l6.7-2.3L12 3Z" />
        <path d="M19 3v4M17 5h4M4 17v4M2 19h4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="size-5">
      <rect x="3" y="4" width="18" height="6" rx="2" />
      <rect x="3" y="14" width="18" height="6" rx="2" />
      <path d="M7 7h.01M7 17h.01M11 7h6M11 17h6" />
    </svg>
  );
}

export default function About() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section
      
      aria-labelledby="about-title"
      className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--background-secondary)]"
    >
      {/* Subtle background accents */}
       <div className="pointer-events-none absolute -top-36 left-1/2 h-80 w-[min(85vw,800px)] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: "var(--accent)" }}
      />

      <div className="relative mx-auto w-[calc(100%-40px)] max-w-[1160px] py-16 sm:w-[calc(100%-64px)] sm:py-20 lg:py-24">
        {/* Section heading */}
        <div id="about" className="mb-10 max-w-2xl sm:mb-14">
          <p className="mb-3 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.17em] text-[var(--accent)] sm:text-xs">
            <span className="h-px w-7 bg-[var(--accent)]" />
            Get to know me
          </p>

          <h2
            id="about-title"
            className="text-3xl font-bold tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl md:text-5xl"
          >
            The person behind{" "}
            <span className="text-[var(--accent)]">the code.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--foreground-secondary)] sm:text-base">
            A look at my engineering approach, the software I build, and my focus on practical AI solutions.
          </p>
        </div>

        {/* Profile and introduction */}
        <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          {/* Portrait */}
          <div className="mx-auto w-full max-w-[390px] lg:mx-0">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[28px] border border-[var(--accent)]/15"
              />

              <div className="relative aspect-[4/4.5] overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)]">
                {/* Decorative portrait background */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-[var(--accent-soft)] via-[var(--surface)] to-[var(--background)]"
                />

                <div
                  aria-hidden="true"
                  className="absolute -right-10 top-12 size-48 rounded-full bg-[var(--accent)] opacity-[0.12] blur-[70px]"
                />

                {!imageFailed ? (
                  <img
                    src="/images/saqlain-ahmad.jpg"
                    alt="Saqlain Ahmad, Full-Stack Software Engineer and AI Engineer"
                    className="absolute inset-0 size-full object-cover object-center"
                    onError={() => setImageFailed(true)}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="relative grid size-28 place-items-center rounded-full border border-[var(--accent)]/30 bg-[var(--accent-soft)] sm:size-32">
                      <span className="text-4xl font-semibold tracking-[-0.08em] text-[var(--accent)] sm:text-5xl">
                        SA
                      </span>
                      <span className="absolute bottom-1 right-1 grid size-8 place-items-center rounded-full border-4 border-[var(--surface)] bg-[var(--accent)] text-[var(--accent-foreground)]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
                          <path d="m5 12 4 4L19 6" />
                        </svg>
                      </span>
                    </div>

                    <p className="mt-5 text-lg font-semibold text-[var(--foreground)]">
                      Saqlain Ahmad
                    </p>
                    <p className="mt-1 text-xs text-[var(--foreground-muted)]">
                      Your portrait will appear here
                    </p>
                    <p className="mt-4 max-w-[220px] text-[11px] leading-5 text-[var(--foreground-muted)]">
                      Add your professional photo to public/images/saqlain-ahmad.jpg
                    </p>
                  </div>
                )}

                {/* Portrait label */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080d18]/95 via-[#080d18]/65 to-transparent px-5 pb-5 pt-16 sm:px-6 sm:pb-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#91baff]">
                    Software Engineer · AI Engineer
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white sm:text-xl">
                    Saqlain Ahmad
                  </p>
                  <p className="mt-1 text-xs text-white/70">
                    Building useful software with AI
                  </p>
                </div>
              </div>

              {/* Floating role label */}
              <div className="absolute -bottom-4 -right-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 shadow-xl shadow-[var(--shadow-color)] sm:-right-5">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex size-2.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--accent)] opacity-30" />
                    <span className="relative inline-flex size-2.5 rounded-full bg-[var(--accent)]" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-[var(--foreground)]">
                      Continuous learner
                    </p>
                    <p className="text-[10px] text-[var(--foreground-muted)]">
                      Engineering mindset
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="pt-3 lg:pt-0">
            <p className="text-sm font-medium text-[var(--foreground-secondary)] sm:text-base">
              Hello, it&apos;s me
            </p>

            <h3 className="mt-1 text-3xl font-bold tracking-[-0.045em] text-[var(--foreground)] sm:text-4xl md:text-[42px]">
              Saqlain Ahmad<span className="text-[var(--accent)]">.</span>
            </h3>

            <p className="mt-4 text-lg font-semibold leading-8 text-[var(--foreground)] sm:text-xl">
              I&apos;m a{" "}
              <span className="text-[var(--accent)]">
                Full-Stack Software Engineer
              </span>{" "}
              and{" "}
              <span className="text-[var(--accent)]">AI Engineer.</span>
            </p>

            <div className="mt-5 max-w-2xl space-y-4 text-sm leading-7 text-[var(--foreground-secondary)] sm:text-base sm:leading-8">
              <p>
                I build web applications that bring together thoughtful
                frontend experiences, dependable backend systems, and
                structured data. My focus is on turning practical requirements
                into software that is useful, maintainable, and reliable.
              </p>

              <p>
                I also develop AI-powered applications that go beyond basic
                chat interfaces, including knowledge assistants, document
                retrieval systems, and workflows that connect language models
                with APIs and business logic.
              </p>

            </div>

            {/* Quick profile details */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[var(--foreground-muted)]">
                  Expertise Level
                </p>
                <p className="mt-1.5 text-sm font-semibold text-[var(--foreground)]">
                  2+ Years · 10+ Projects
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[var(--foreground-muted)]">
                  Academic background
                </p>
                <p className="mt-1.5 text-sm font-semibold text-[var(--foreground)]">
                  ICS · Intermediate Education
                </p>
              </div>
            </div>

          </div>
        </div>


      </div>
    </section>
  );
}
