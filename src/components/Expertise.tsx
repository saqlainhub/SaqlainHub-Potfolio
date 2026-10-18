
"use client";

import { useEffect, useState } from "react";

const services = [
  {
    number: "01",
    category: "CUSTOMER EXPERIENCE",
    title: "AI Support Assistants",
    description:
      "Intelligent support systems that answer questions, guide users, and help businesses deliver faster customer service.",
    tags: ["LLMs", "Conversation Memory", "Tool Calling"],
    icon: "support",
    featured: true,
  },
  {
    number: "02",
    category: "KNOWLEDGE & SEARCH",
    title: "Knowledge-Base Chatbots",
    description:
      "Chat with your documents and business knowledge using retrieval-augmented generation and context-aware answers.",
    tags: ["RAG", "Embeddings", "Vector Search"],
    icon: "knowledge",
    featured: true,
  },
  {
    number: "03",
    category: "INTELLIGENT WORKFLOWS",
    title: "AI Agents & Workflows",
    description:
      "AI-powered workflows that use tools, process information, and carry out multi-step tasks with less manual effort.",
    tags: ["Agents", "Tool Calling", "APIs"],
    icon: "agent",
    featured: true,
  },
  {
    number: "04",
    category: "BUSINESS OPERATIONS",
    title: "Business Process Automation",
    description:
      "Connect services and automate repetitive tasks, data handling, notifications, and operational workflows.",
    tags: ["API Integrations", "Webhooks", "Background Jobs"],
    icon: "automation",
    featured: false,
  },
  {
    number: "05",
    category: "WEB APPLICATIONS",
    title: "Full-Stack Web Development",
    description:
      "Build responsive, database-driven web applications with robust APIs, authentication, and maintainable architecture.",
    tags: ["Next.js", "TypeScript", "Python"],
    icon: "web",
    featured: false,
  },
  {
    number: "06",
    category: "DOCUMENT INTELLIGENCE",
    title: "Document AI & Information Extraction",
    description:
      "Turn unstructured documents into searchable information and structured outputs that applications can use.",
    tags: ["PDF Processing", "LLMs", "Structured Outputs"],
    icon: "document",
    featured: false,
  },
];

const stages = [
  {
    number: "01",
    title: "Interface",
    subtitle: "Design the experience",
    description:
      "Create responsive, accessible interfaces that make complex functionality clear and easy to use.",
    technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Figma"],
    concepts: ["Responsive Design", "Component Architecture", "UI States"],
    icon: "interface",
  },
  {
    number: "02",
    title: "Application",
    subtitle: "Build the logic",
    description:
      "Connect the interface to application logic, secure endpoints, and reliable integrations.",
    technologies: ["Python", "FastAPI", "Pydantic", "REST APIs", "OAuth", "WebSockets"],
    concepts: ["Authentication", "Validation", "API Design", "Error Handling"],
    icon: "application",
  },
  {
    number: "03",
    title: "Data Systems",
    subtitle: "Structure the information",
    description:
      "Design data models and persistence layers that keep application information organized and accessible.",
    technologies: ["PostgreSQL", "MongoDB", "SQLAlchemy", "Prisma", "Redis"],
    concepts: ["Data Modeling", "ORMs", "Caching", "Migrations", "Background Jobs"],
    icon: "data",
  },
  {
    number: "04",
    title: "AI Layer",
    subtitle: "Add intelligence",
    description:
      "Integrate language models with relevant context, external tools, and structured information to solve practical problems.",
    technologies: ["LLM APIs", "Gemini", "RAG", "Embeddings", "Vector Search"],
    concepts: ["Prompt Engineering", "Retrieval", "Tool Calling", "Structured Outputs", "Agentic Workflows"],
    icon: "ai",
  },
  {
    number: "05",
    title: "Production",
    subtitle: "Ship and improve",
    description:
      "Bring the complete system online with version control, deployment, testing, and operational visibility.",
    technologies: ["Git", "GitHub", "Vercel", "Cloud Deployment"],
    concepts: ["Environment Configuration", "Testing", "Logging", "Monitoring", "Maintainability"],
    icon: "production",
  },
];

function ServiceIcon({ type }: { type: string }) {
  const common = {
    width: 25,
    height: 25,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "support":
      return (
        <svg {...common}>
          <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
          <path d="M4 13H3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h3v-6H4Z" transform="translate(1 -1)" />
          <path d="M20 12h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3v-6h2Z" transform="translate(-1 -1)" />
          <path d="M9 20h6" />
        </svg>
      );
    case "knowledge":
      return (
        <svg {...common}>
          <path d="M12 7v14" />
          <path d="M12 7C9 4 5 4 2 5v13c4-1 7 0 10 3" />
          <path d="M12 7c3-3 7-3 10-2v13c-4-1-7 0-10 3" />
          <path d="M5 9c2-.5 4 0 5 1" />
          <path d="M19 9c-2-.5-4 0-5 1" />
        </svg>
      );
    case "agent":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <circle cx="5" cy="5" r="2" />
          <circle cx="19" cy="5" r="2" />
          <circle cx="5" cy="19" r="2" />
          <circle cx="19" cy="19" r="2" />
          <path d="m7 6.5 3 3.5M17 6.5 14 10M7 17.5l3-3M17 17.5l-3-3" />
        </svg>
      );
    case "automation":
      return (
        <svg {...common}>
          <path d="M12 3v3" />
          <path d="M12 18v3" />
          <path d="M3 12h3" />
          <path d="M18 12h3" />
          <path d="m5.6 5.6 2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
          <circle cx="12" cy="12" r="5" />
          <path d="m10 12 1.4 1.4L14.5 10" />
        </svg>
      );
    case "web":
      return (
        <svg {...common}>
          <rect x="2.5" y="3.5" width="19" height="17" rx="2" />
          <path d="M2.5 8h19" />
          <path d="M6 5.8h.1M9 5.8h.1" />
          <path d="m9 13-2 2 2 2M15 13l2 2-2 2M13.5 12l-3 6" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M6 2.5h8l4 4v15H6z" />
          <path d="M14 2.5v5h4M9 12h6M9 16h6" />
          <path d="M3 6v16h12" />
        </svg>
      );
  }
}

function StageIcon({ type }: { type: string }) {
  const common = {
    width: 23,
    height: 23,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "interface":
      return (
        <svg {...common}>
          <rect x="3" y="3.5" width="18" height="17" rx="2" />
          <path d="M3 8h18M7 5.8h.1M10 5.8h.1M7 12h4M7 16h10" />
        </svg>
      );
    case "application":
      return (
        <svg {...common}>
          <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
        </svg>
      );
    case "data":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
        </svg>
      );
    case "ai":
      return (
        <svg {...common}>
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="1" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="m3 12 5 5L21 4" />
          <path d="M20 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11" />
        </svg>
      );
  }
}

export default function Expertise() {
  const [activeStage, setActiveStage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = window.setInterval(() => {
      setActiveStage((current) => (current + 1) % stages.length);
    }, 3600);

    return () => window.clearInterval(interval);
  }, [paused]);

  return (
    <section

      className="relative overflow-hidden border-t py-14 sm:py-16 lg:py-20"
      style={{
        background: "var(--background)",
        borderColor: "var(--border)",
        color: "var(--foreground)",
      }}
    >
      <div className="pointer-events-none absolute -top-36 left-1/2 h-80 w-[min(85vw,800px)] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: "var(--accent)" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Main section heading */}
        <div id="services" className="mb-8 max-w-2xl sm:mb-10">
          <p className="mb-3 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.17em] text-[var(--accent)] sm:text-xs">
            <span className="h-px w-7 bg-[var(--accent)]" />
            What I Do
          </p>

          <h2
            id="expertise-title"
            className="text-3xl font-bold tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl md:text-5xl"
          >
            Expertise that turns ideas into{" "}
            <span className="text-[var(--accent)]">real solutions.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--foreground-secondary)] sm:text-base">
            I build AI-powered applications and full-stack software, combining
            practical engineering with intelligent technologies to solve real problems.
          </p>
        </div>



        {/* SERVICES */}
        <div className="scroll-mt-24">

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group relative flex min-h-[265px] flex-col overflow-hidden rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 sm:p-6"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.borderColor = "var(--accent)";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                <div
                  className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                  style={{ background: "var(--accent)" }}
                />

                <div className="relative flex items-start justify-between gap-3">
                  <div
                    className="flex size-12 items-center justify-center rounded-xl border"
                    style={{
                      color: "var(--accent)",
                      background: "var(--accent-soft)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <ServiceIcon type={service.icon} />
                  </div>
                  <span
                    className="pt-1 font-mono text-xs"
                    style={{ color: "var(--foreground-muted)" }}
                  >
                    / {service.number}
                  </span>
                </div>

                <p
                  className="relative mt-5 text-[10px] font-semibold tracking-[0.16em]"
                  style={{ color: "var(--accent)" }}
                >
                  {service.category}
                </p>

                <h4 className="relative mt-2 text-lg font-semibold tracking-tight sm:text-xl">
                  {service.title}
                </h4>

                <p
                  className="relative mt-2 text-sm leading-6"
                  style={{ color: "var(--foreground-secondary)" }}
                >
                  {service.description}
                </p>

                <div className="relative mt-auto flex flex-wrap gap-2 pt-5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border px-2 py-1 text-[11px]"
                      style={{
                        borderColor: "var(--border)",
                        color: "var(--foreground-muted)",
                        background: "var(--background-secondary)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>


        <section className="relative overflow-hidden border-t mt-20 "
          style={{
            background: "var(--background)",
            borderColor: "var(--border)",
            color: "var(--foreground)",
          }}>
          <div className="pointer-events-none absolute -top-36 left-1/2 h-80 w-[min(85vw,800px)] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
            style={{ background: "var(--accent)" }}
          />
          {/* Technical section heading */}
          <div className=" mb-8 max-w-2xl scroll-mt-24 sm:mt-20 sm:mb-10">
            <p id="expertise" className="mb-3 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.17em] text-[var(--accent)] sm:text-xs">
              <span className="h-px w-7 bg-[var(--accent)]" />
              Technical Expertise
            </p>

            <h2
              
              className="text-3xl font-bold tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl md:text-5xl"
            >
              From interface{" "}
              <span className="text-[var(--accent)]">to intelligence.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--foreground-secondary)] sm:text-base">
              Follow the path through a modern software system. Select a checkpoint
              to explore the technologies, tools, and concepts at each layer.
            </p>
          </div>


          {/* TECHNICAL ROADMAP */}
          <div className="scroll-mt-24">

            <div
              className="relative rounded-3xl border p-4 sm:p-7 lg:p-9"
              style={{
                borderColor: "var(--border)",
                background: "var(--background-secondary)",
              }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocusCapture={() => setPaused(true)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  setPaused(false);
                }
              }}
            >
              <div className="mb-7 flex items-center justify-between gap-3">
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-xs"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  SYSTEM BUILD PATH
                </span>
                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--accent)" }}
                >
                  STAGE {String(activeStage + 1).padStart(2, "0")} / 05
                </span>
              </div>

              {/* Desktop game-like route */}
              <div className="relative hidden lg:block">
                <svg
                  viewBox="0 0 1000 140"
                  className="pointer-events-none absolute inset-x-0 top-0 h-[140px] w-full overflow-visible"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M 90 68 C 140 68, 145 112, 200 112 S 350 112, 400 68 S 550 24, 600 68 S 750 112, 800 112 S 900 68, 910 68"
                    stroke="var(--border-strong)"
                    strokeWidth="3"
                    strokeDasharray="7 9"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 90 68 C 140 68, 145 112, 200 112 S 350 112, 400 68 S 550 24, 600 68 S 750 112, 800 112 S 900 68, 910 68"
                    stroke="var(--accent)"
                    strokeWidth="3"
                    strokeDasharray="80 1000"
                    strokeLinecap="round"
                    className="roadmap-progress"
                    style={{ animationPlayState: paused ? "paused" : "running" }}
                  />
                </svg>

                <div className="relative grid grid-cols-5">
                  {stages.map((stage, index) => {
                    const active = activeStage === index;
                    const completed = index < activeStage;

                    return (
                      <button
                        key={stage.number}
                        type="button"
                        aria-pressed={active}
                        aria-label={`Stage ${stage.number}: ${stage.title}`}
                        onClick={() => setActiveStage(index)}
                        onMouseEnter={() => {
                          setActiveStage(index);
                          setPaused(true);
                        }}
                        className="group flex min-w-0 flex-col items-center text-center outline-none"
                      >
                        <span
                          className="relative z-10 flex size-[58px] items-center justify-center rounded-2xl border-2 transition duration-300 group-hover:scale-110"
                          style={{
                            marginTop: index === 1 || index === 3 ? "83px" : index === 2 ? "16px" : "40px",
                            color: active || completed ? "var(--accent-foreground)" : "var(--foreground-muted)",
                            background: active || completed ? "var(--accent)" : "var(--surface)",
                            borderColor: active ? "var(--accent)" : "var(--border-strong)",
                            boxShadow: active ? "0 0 0 7px var(--accent-soft), 0 0 30px var(--shadow-color)" : "none",
                          }}
                        >
                          <StageIcon type={stage.icon} />
                          {active && (
                            <span
                              className="absolute -right-1 -top-1 size-3 rounded-full border-2"
                              style={{
                                background: "var(--accent)",
                                borderColor: "var(--background-secondary)",
                              }}
                            />
                          )}
                        </span>

                        <span
                          className="mt-4 text-xs font-semibold tracking-wide transition sm:text-sm"
                          style={{ color: active ? "var(--accent)" : "var(--foreground)" }}
                        >
                          {stage.title}
                        </span>
                        <span
                          className="mt-1 max-w-[145px] text-[11px] leading-5"
                          style={{ color: "var(--foreground-muted)" }}
                        >
                          {stage.subtitle}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mobile and tablet route */}
              <div className="relative lg:hidden">
                <div
                  className="absolute bottom-8 left-[21px] top-8 w-px"
                  style={{ background: "var(--border-strong)" }}
                  aria-hidden="true"
                />
                <div
                  className="absolute left-[21px] top-8 w-px transition-all duration-500"
                  style={{
                    height: `${(activeStage / (stages.length - 1)) * 85}%`,
                    background: "var(--accent)",
                  }}
                  aria-hidden="true"
                />

                <div className="relative flex flex-col gap-3">
                  {stages.map((stage, index) => {
                    const active = activeStage === index;
                    const completed = index < activeStage;

                    return (
                      <button
                        key={stage.number}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setActiveStage(index)}
                        className="flex w-full items-center gap-4 rounded-xl border p-3 text-left transition duration-200 sm:p-4"
                        style={{
                          borderColor: active ? "var(--accent)" : "var(--border)",
                          background: active ? "var(--accent-soft)" : "var(--surface)",
                        }}
                      >
                        <span
                          className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-xl border"
                          style={{
                            color: active || completed ? "var(--accent-foreground)" : "var(--foreground-muted)",
                            background: active || completed ? "var(--accent)" : "var(--surface)",
                            borderColor: active ? "var(--accent)" : "var(--border-strong)",
                          }}
                        >
                          <StageIcon type={stage.icon} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span
                            className="block text-sm font-semibold"
                            style={{ color: active ? "var(--accent)" : "var(--foreground)" }}
                          >
                            {stage.number} / {stage.title}
                          </span>
                          <span
                            className="mt-1 block text-xs"
                            style={{ color: "var(--foreground-muted)" }}
                          >
                            {stage.subtitle}
                          </span>
                        </span>
                        <span
                          className="text-lg"
                          style={{ color: active ? "var(--accent)" : "var(--foreground-muted)" }}
                          aria-hidden="true"
                        >
                          {active ? "−" : "+"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected checkpoint details */}
              <div
                className="mt-8 overflow-hidden rounded-2xl border sm:mt-10"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                }}
                aria-live="polite"
              >
                <div
                  className="h-1 w-full origin-left"
                  style={{
                    background: "var(--accent)",
                    transform: `scaleX(${(activeStage + 1) / stages.length})`,
                    transition: "transform 350ms ease",
                  }}
                />

                <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        className="flex size-11 items-center justify-center rounded-xl"
                        style={{
                          background: "var(--accent-soft)",
                          color: "var(--accent)",
                        }}
                      >
                        <StageIcon type={stages[activeStage].icon} />
                      </span>
                      <div>
                        <p
                          className="text-[10px] font-semibold uppercase tracking-[0.16em]"
                          style={{ color: "var(--accent)" }}
                        >
                          Checkpoint {stages[activeStage].number}
                        </p>
                        <h4 className="mt-1 text-xl font-semibold">
                          {stages[activeStage].title}
                        </h4>
                      </div>
                    </div>

                    <p
                      className="mt-4 text-sm leading-7"
                      style={{ color: "var(--foreground-secondary)" }}
                    >
                      {stages[activeStage].description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {stages.map((stage, index) => (
                        <button
                          key={stage.number}
                          type="button"
                          onClick={() => setActiveStage(index)}
                          aria-label={`Go to ${stage.title}`}
                          aria-pressed={activeStage === index}
                          className="h-1.5 rounded-full transition-all duration-300"
                          style={{
                            width: activeStage === index ? "28px" : "10px",
                            background: activeStage === index ? "var(--accent)" : "var(--border-strong)",
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <p
                        className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em]"
                        style={{ color: "var(--foreground-muted)" }}
                      >
                        Technologies & Tools
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {stages[activeStage].technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-lg border px-3 py-2 text-xs font-medium transition-colors"
                            style={{
                              color: "var(--foreground)",
                              borderColor: "var(--border)",
                              background: "var(--background-secondary)",
                            }}
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p
                        className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em]"
                        style={{ color: "var(--foreground-muted)" }}
                      >
                        Engineering Concepts
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {stages[activeStage].concepts.map((concept) => (
                          <span
                            key={concept}
                            className="rounded-lg px-3 py-2 text-xs"
                            style={{
                              color: "var(--accent)",
                              background: "var(--accent-soft)",
                            }}
                          >
                            {concept}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p
                className="mt-4 text-center text-[11px]"
                style={{ color: "var(--foreground-muted)" }}
              >
                {paused
                  ? "Paused while you explore — select any checkpoint to continue."
                  : "The route advances automatically. Hover, focus, or select a checkpoint to explore it."}
              </p>
            </div>
          </div>

        </section>
      </div>

      <style jsx>{`
        @keyframes roadmap-dash {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -1000;
          }
        }

        .roadmap-progress {
          animation: roadmap-dash 12s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .roadmap-progress {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
