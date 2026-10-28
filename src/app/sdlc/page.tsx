
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Software Development Lifecycle | SaqlainHub",
  description:
    "Explore the engineering process behind my software projects, from requirements and architecture to implementation, production, and maintenance.",
};

const phases = [
  {
    number: "01",
    short: "Define",
    title: "Requirements Engineering",
    description:
      "Understand the problem, identify the users, and establish what the software must achieve before designing the solution.",
    purpose: "Establish a clear, agreed direction for the product.",
    objective: "Translate business needs into actionable requirements and measurable outcomes.",
    deliverables: [
      "Problem & solution definition",
      "Requirements specification",
      "Scope, constraints & priorities",
    ],
    groups: [
      {
        title: "Discovery",
        description: "Understand the context before choosing a solution.",
        items: [
          "Understand Business",
          "Understand Users & Roles",
          "Explore Existing System",
          "Define Problem",
          "Expected Solution",
        ],
      },
      {
        title: "Solution Definition",
        description: "Establish the product direction and intended value.",
        items: [
          "Explore Possible Solutions",
          "Define Product Direction",
          "Define Expected Outcomes",
        ],
      },
      {
        title: "Requirements",
        description: "Define the boundaries and behavior of the system.",
        items: [
          "Functional Requirements",
          "Non-Functional Requirements",
          "Platform Requirements",
          "Data Requirements",
          "Business Rules & Permissions",
          "Budget & Timeline",
          "Risks & Assumptions",
        ],
      },
    ],
    accent: "from-blue-400/20 to-transparent",
  },
  {
    number: "02",
    short: "Design",
    title: "Design & Architecture",
    description:
      "Shape the user experience and define how the application's frontend, backend, data, AI services, and infrastructure fit together.",
    purpose: "Create a coherent blueprint before implementation begins.",
    objective: "Reduce architectural uncertainty and establish clear implementation boundaries.",
    deliverables: [
      "Product flows & interface designs",
      "System architecture",
      "Implementation plan",
    ],
    groups: [
      {
        title: "Product Design",
        description: "Map the user journey and define the interface.",
        items: [
          "Sitemap",
          "User & Application Flows",
          "Wireframes",
          "Design System",
        ],
      },
      {
        title: "Technical Specification",
        description: "Select the technologies and define the system structure.",
        items: [
          "Technology Stack & Tools",
          "Frontend Architecture",
          "Backend Architecture",
          "Database Architecture",
          "AI Architecture",
          "Infrastructure & Deployment Design",
        ],
      },
      {
        title: "Implementation Planning",
        description: "Turn the design into an executable development plan.",
        items: [
          "Break Down Features into Tasks",
          "Define Implementation Order",
          "Identify Dependencies & Priorities",
        ],
      },
    ],
    accent: "from-violet-400/20 to-transparent",
  },
  {
    number: "03",
    short: "Build",
    title: "Implementation",
    description:
      "Turn the approved design into working software through structured development, integration, and continuous verification.",
    purpose: "Build software that satisfies the defined requirements.",
    objective: "Deliver functional, maintainable, and verified features in manageable increments.",
    deliverables: [
      "Working application features",
      "Integrated system components",
      "Verified codebase",
    ],
    groups: [
      {
        title: "Setup",
        description: "Prepare a consistent and maintainable development environment.",
        items: [
          "Development Environment & Dependencies",
          "Project Structure & Configuration",
          "Git Repository & Workflow",
        ],
      },
      {
        title: "Development",
        description: "Implement the application's required capabilities.",
        items: [
          "Implement Backend",
          "Implement Frontend",
          "Content Writing & SEO",
        ],
      },
      {
        title: "Verification",
        description: "Validate behavior and correct issues before release.",
        items: [
          "Test Features & Workflows",
          "Review Code & Fix Issues",
          "Verify Requirements & Acceptance Criteria",
        ],
      },
    ],
    accent: "from-cyan-400/20 to-transparent",
  },
  {
    number: "04",
    short: "Release",
    title: "Production",
    description:
      "Prepare the application for real users, deploy it to the target environment, and verify its critical workflows.",
    purpose: "Move verified software into a usable production environment.",
    objective: "Release safely with operational readiness, clear ownership, and a reliable handover.",
    deliverables: [
      "Deployed application",
      "Verified production environment",
      "Documentation & handover",
    ],
    groups: [
      {
        title: "Release",
        description: "Deploy and validate the live application.",
        items: [
          "Configure Production Environment",
          "Deploy Application",
          "Verify Live Application",
          "Test Critical Workflows",
        ],
      },
      {
        title: "Documentation & Handover",
        description: "Make the system understandable and transferable.",
        items: [
          "Prepare Technical & User Documentation",
          "Configure Access & Ownership",
          "Handover Application & Credentials Securely",
        ],
      },
    ],
    accent: "from-emerald-400/20 to-transparent",
  },
  {
    number: "05",
    short: "Improve",
    title: "Maintenance",
    description:
      "Keep the application secure, observable, reliable, and aligned with changing user needs after its initial release.",
    purpose: "Preserve software quality throughout its operational life.",
    objective: "Resolve issues, reduce operational risk, and evolve the product based on evidence and approved needs.",
    deliverables: [
      "Operational health & incident records",
      "Security and dependency updates",
      "Performance improvements & new releases",
    ],
    groups: [
      {
        title: "Monitoring & Support",
        description: "Maintain visibility into system health and recoverability.",
        items: [
          "Monitor Errors, Performance & Availability",
          "Handle Bugs & Incidents",
          "Manage Backups & Recovery",
        ],
      },
      {
        title: "Updates & Improvements",
        description: "Keep the product dependable and relevant.",
        items: [
          "Update Dependencies & Security",
          "Optimize Performance & Reliability",
          "Implement Approved Changes & Features",
          "Maintain Documentation",
        ],
      },
    ],
    accent: "from-amber-400/20 to-transparent",
  },
];

const architectureLayers = [
  {
    title: "API Layer",
    description: "Endpoints, request validation, and response contracts.",
  },
  {
    title: "Authentication & Authorization Layer",
    description: "Identity, access control, roles, and permissions.",
  },
  {
    title: "Business Logic Layer",
    description: "Application rules, workflows, and domain operations.",
  },
  {
    title: "Data Layer",
    description: "Database models, queries, and data integrity.",
  },
  {
    title: "AI Layer",
    description: "LLMs, retrieval, tool calling, and AI workflows.",
    optional: true,
  },
  {
    title: "Background Jobs Layer",
    description: "Asynchronous tasks, queues, and scheduled work.",
    optional: true,
  },
  {
    title: "Integrations Layer",
    description: "External APIs, webhooks, and third-party services.",
  },
  {
    title: "Storage & Cache Layer",
    description: "File storage, caching, and temporary data.",
  },
  {
    title: "Communication Layer",
    description: "WebSockets, events, and real-time updates.",
    optional: true,
  },
  {
    title: "Security & Observability Layer",
    description: "Protection, logs, metrics, tracing, and error visibility.",
  },
];

const frontendLayers = [
  {
    title: "Pages & Routes",
    description: "Navigation, page structure, and route organization.",
  },
  {
    title: "Components & Layouts",
    description: "Reusable UI elements and shared visual structure.",
  },
  {
    title: "State & Data Management",
    description: "UI state, server state, and data flow.",
  },
  {
    title: "API Integration",
    description: "Requests, response handling, and error states.",
  },
  {
    title: "Responsive Design",
    description: "Consistent experiences across screen sizes.",
  },
];

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="size-4"
      aria-hidden="true"
    >
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

function PhaseIcon({ index }: { index: number }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const paths = [
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 4 4M8 10.5h5M10.5 8v5" />
    </>,
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M8 4v5M8 13h3M8 16h7" />
    </>,
    <>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
    </>,
    <>
      <path d="M4 20V10l8-6 8 6v10" />
      <path d="M9 20v-6h6v6M2 20h20" />
    </>,
    <>
      <path d="M20 7v5h-5M4 17v-5h5" />
      <path d="M6.5 8.5a7 7 0 0 1 11.8-2L20 12M4 12l1.7 5.5a7 7 0 0 0 11.8-2" />
    </>,
  ];

  return (
    <svg
      viewBox="0 0 24 24"
      {...common}
      className="size-5"
      aria-hidden="true"
    >
      {paths[index]}
    </svg>
  );
}

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)] sm:text-[11px]">
      <span className="h-px w-5 bg-[var(--accent)]" />
      {children}
    </p>
  );
}

function PhaseOverview() {
  return (
    <div className="relative mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-7 lg:p-8">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-[var(--foreground)]">
            The development journey
          </p>
          <p className="mt-1 text-xs leading-5 text-[var(--foreground-muted)]">
            Five connected phases, from problem definition to continuous improvement.
          </p>
        </div>
        <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[10px] font-medium text-[var(--foreground-muted)]">
          End-to-end lifecycle
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {phases.map((phase, index) => (
          <a
            key={phase.number}
            href={`#phase-${phase.number}`}
            className="group relative flex min-h-[132px] flex-col rounded-xl border border-[var(--border)] bg-[var(--background-secondary)] p-4 hover:border-[var(--accent)]/50 hover:bg-[var(--surface-hover)]"
          >
            {index < phases.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute -right-2 top-8 z-10 hidden text-[var(--foreground-muted)] lg:block"
              >
                <ArrowRight />
              </span>
            )}

            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold tracking-[0.12em] text-[var(--foreground-muted)]">
                {phase.number}
              </span>
              <span className="text-[var(--accent)] transition-transform group-hover:translate-x-0.5">
                <ArrowRight />
              </span>
            </div>

            <div className="mt-4 flex items-center gap-2.5">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-[var(--accent)]/20 bg-[var(--accent-soft)] text-[var(--accent)]">
                <PhaseIcon index={index} />
              </span>
              <div>
                <p className="text-sm font-semibold leading-5 text-[var(--foreground)]">
                  {phase.short}
                </p>
                <p className="mt-0.5 text-[10px] text-[var(--foreground-muted)]">
                  Phase {phase.number}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-5 flex items-start gap-3 border-t border-[var(--border)] pt-4">
        <span className="mt-0.5 text-[var(--accent)]">
          <PhaseIcon index={4} />
        </span>
        <p className="max-w-3xl text-xs leading-6 text-[var(--foreground-secondary)]">
          <span className="font-semibold text-[var(--foreground)]">
            The cycle continues.
          </span>{" "}
          Production feedback, changing requirements, and operational findings
          inform the next round of discovery and improvement.
        </p>
      </div>
    </div>
  );
}

function PhaseSection({
  phase,
  index,
}: {
  phase: (typeof phases)[number];
  index: number;
}) {
  return (
    <section
      id={`phase-${phase.number}`}
      aria-labelledby={`phase-title-${phase.number}`}
      className="border-t border-[var(--border)] py-16 sm:py-20 lg:py-24"
    >
      <div className="grid gap-9 lg:grid-cols-[0.76fr_1.24fr] lg:gap-14">
        {/* Phase introduction */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-xl border border-[var(--accent)]/25 bg-[var(--accent-soft)] text-[var(--accent)]">
              <PhaseIcon index={index} />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
                Phase {phase.number} / 05
              </p>
              <p className="mt-1 text-xs font-medium text-[var(--accent)]">
                {phase.short}
              </p>
            </div>
          </div>

          <h2
            id={`phase-title-${phase.number}`}
            className="text-3xl font-bold tracking-[-0.045em] text-[var(--foreground)] sm:text-4xl"
          >
            {phase.title}
            <span className="text-[var(--accent)]">.</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-[var(--foreground-secondary)] sm:text-base sm:leading-8">
            {phase.description}
          </p>

          <div className="mt-7 space-y-4">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--foreground-muted)]">
                Purpose
              </p>
              <p className="mt-2 text-sm font-medium leading-6 text-[var(--foreground)]">
                {phase.purpose}
              </p>
            </div>

            <div className="rounded-xl border border-[var(--accent)]/20 bg-[var(--accent-soft)] p-4 sm:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                Objective
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--foreground-secondary)]">
                {phase.objective}
              </p>
            </div>
          </div>
        </div>

        {/* Phase activities and outputs */}
        <div className="min-w-0">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h3 className="text-sm font-semibold text-[var(--foreground)]">
              Key activities
            </h3>
            <span className="text-[10px] text-[var(--foreground-muted)]">
              {String(phase.groups.reduce((sum, group) => sum + group.items.length, 0)).padStart(2, "0")} activities
            </span>
          </div>

          <div className="space-y-4">
            {phase.groups.map((group, groupIndex) => (
              <div
                key={group.title}
                className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]"
              >
                <div className="flex items-start gap-3 border-b border-[var(--border)] px-4 py-4 sm:px-5">
                  <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg bg-[var(--background-secondary)] text-[10px] font-semibold text-[var(--accent)]">
                    {String(groupIndex + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--foreground)]">
                      {group.title}
                    </h4>
                    <p className="mt-1 text-xs leading-5 text-[var(--foreground-muted)]">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="grid gap-x-5 px-4 py-3 sm:grid-cols-2 sm:px-5">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 border-b border-[var(--border)]/70 py-3 last:border-0 sm:[&:nth-last-child(-n+2)]:border-0"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[7px] size-1.5 shrink-0 rounded-full bg-[var(--accent)]/70"
                      />
                      <span className="text-xs leading-5 text-[var(--foreground-secondary)] sm:text-[13px]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-[var(--border)] bg-[var(--background-secondary)] p-4 sm:p-5">
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="size-4 text-[var(--accent)]"
                aria-hidden="true"
              >
                <path d="M5 3h14v18l-7-4-7 4V3Z" />
                <path d="M9 8h6M9 12h6" />
              </svg>
              <h4 className="text-xs font-semibold text-[var(--foreground)]">
                Expected deliverables
              </h4>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {phase.deliverables.map((deliverable) => (
                <span
                  key={deliverable}
                  className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-[11px] leading-4 text-[var(--foreground-secondary)]"
                >
                  {deliverable}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchitectureBlueprint() {
  return (
    <section
      id="architecture"
      aria-labelledby="architecture-title"
      className="border-t border-[var(--border)] bg-[var(--background-secondary)]"
    >
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1160px] py-16 sm:w-[calc(100%-64px)] sm:py-20 lg:py-24">
        <div className="mb-10 max-w-2xl sm:mb-12">
          <SectionLabel>Inside the design phase</SectionLabel>
          <h2
            id="architecture-title"
            className="text-3xl font-bold tracking-[-0.045em] text-[var(--foreground)] sm:text-4xl"
          >
            Architecture,{" "}
            <span className="text-[var(--accent)]">layer by layer.</span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--foreground-secondary)] sm:text-base">
            Each system is organized around its responsibilities. The exact
            layers depend on the product&apos;s requirements, complexity, and
            operating environment.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          {/* Backend blueprint */}
          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
            <div className="border-b border-[var(--border)] p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl border border-[var(--accent)]/20 bg-[var(--accent-soft)] text-[var(--accent)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="size-5" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="6" rx="2" />
                    <rect x="3" y="14" width="18" height="6" rx="2" />
                    <path d="M7 7h.01M7 17h.01M11 7h6M11 17h6" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[var(--foreground)]">
                    Backend architecture
                  </h3>
                  <p className="mt-1 text-xs text-[var(--foreground-muted)]">
                    Application services & infrastructure
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5">
              <div className="mb-3 flex items-center justify-between px-1">
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--foreground-muted)]">
                  System layers
                </span>
                <span className="text-[10px] text-[var(--foreground-muted)]">
                  Topical responsibilities
                </span>
              </div>

              <div className="space-y-2">
                {architectureLayers.map((layer, index) => (
                  <div
                    key={layer.title}
                    className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--background-secondary)] p-3"
                  >
                    <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[10px] font-semibold text-[var(--accent)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-xs font-semibold text-[var(--foreground)]">
                          {layer.title}
                        </h4>
                        {layer.optional && (
                          <span className="rounded-full border border-[var(--border)] px-2 py-0.5 text-[9px] text-[var(--foreground-muted)]">
                            When needed
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-[11px] leading-5 text-[var(--foreground-muted)]">
                        {layer.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Frontend blueprint */}
          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
            <div className="border-b border-[var(--border)] p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl border border-[var(--accent)]/20 bg-[var(--accent-soft)] text-[var(--accent)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="size-5" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M3 9h18M8 4v5M8 13h3M8 16h7" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[var(--foreground)]">
                    Frontend architecture
                  </h3>
                  <p className="mt-1 text-xs text-[var(--foreground-muted)]">
                    User experience & client-side behavior
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5">
              <div className="mb-3 px-1">
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--foreground-muted)]">
                  Interface layers
                </span>
              </div>

              <div className="space-y-2">
                {frontendLayers.map((layer, index) => (
                  <div
                    key={layer.title}
                    className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--background-secondary)] p-3 sm:p-4"
                  >
                    <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[10px] font-semibold text-[var(--accent)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="text-xs font-semibold text-[var(--foreground)]">
                        {layer.title}
                      </h4>
                      <p className="mt-1 text-xs leading-5 text-[var(--foreground-muted)]">
                        {layer.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-[var(--accent)]/20 bg-[var(--accent-soft)] p-4">
                <p className="text-xs font-semibold text-[var(--foreground)]">
                  The integration boundary
                </p>
                <p className="mt-2 text-xs leading-6 text-[var(--foreground-secondary)]">
                  The frontend communicates with backend services through
                  defined API contracts. Authentication, validation, loading
                  states, error handling, and permissions must be considered
                  across that boundary.
                </p>
              </div>

              <div className="mt-4 rounded-xl border border-[var(--border)] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--foreground-muted)]">
                  Shared design foundations
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Design tokens", "Typography", "Spacing", "Accessibility", "Responsive behavior"].map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-[var(--border)] bg-[var(--background-secondary)] px-2.5 py-1.5 text-[10px] text-[var(--foreground-secondary)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-5 max-w-3xl text-xs leading-6 text-[var(--foreground-muted)]">
          These are architectural responsibilities, not mandatory standalone
          services or folders. A smaller application may combine several
          layers; more complex systems may separate them into independent
          modules or services.
        </p>
      </div>
    </section>
  );
}

function WorkingPrinciples() {
  const principles = [
    {
      number: "01",
      title: "Requirements drive decisions",
      description:
        "Technology and architecture choices follow the product's actual needs, constraints, and expected outcomes.",
    },
    {
      number: "02",
      title: "Build in verifiable increments",
      description:
        "Features are implemented in manageable units, integrated deliberately, and checked against acceptance criteria.",
    },
    {
      number: "03",
      title: "Release with operational readiness",
      description:
        "Deployment includes environment configuration, migration checks, critical workflow verification, and handover.",
    },
    {
      number: "04",
      title: "Improve from real feedback",
      description:
        "Monitoring, incidents, user feedback, and changing requirements inform future maintenance and development.",
    },
  ];

  return (
    <section className="border-t border-[var(--border)]">
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1160px] py-16 sm:w-[calc(100%-64px)] sm:py-20 lg:py-24">
        <div className="mb-9 max-w-2xl">
          <SectionLabel>Engineering principles</SectionLabel>
          <h2 className="text-3xl font-bold tracking-[-0.045em] text-[var(--foreground)] sm:text-4xl">
            A process built around{" "}
            <span className="text-[var(--accent)]">quality.</span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--foreground-secondary)] sm:text-base">
            The phases provide structure. These principles guide decisions
            throughout the lifecycle.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--accent)]/35"
            >
              <span className="text-xs font-semibold tracking-[0.12em] text-[var(--accent)]">
                {principle.number}
              </span>
              <h3 className="mt-4 text-sm font-semibold leading-6 text-[var(--foreground)]">
                {principle.title}
              </h3>
              <p className="mt-2 text-xs leading-6 text-[var(--foreground-secondary)]">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}


function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)] sm:text-xs">
      <span className="h-px w-7 bg-[var(--accent)]" />
      {children}
    </p>
  );
}

function Tag({
  children,
  accent = false,
}: {
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1.5 text-[10px] font-medium sm:text-[11px] ${
        accent
          ? "border-[var(--accent)]/25 bg-[var(--accent-soft)] text-[var(--accent)]"
          : "border-[var(--border)] bg-[var(--surface)] text-[var(--foreground-secondary)]"
      }`}
    >
      {children}
    </span>
  );
}

export default function SDLCPage() {
  return (
    <>
      <Header />

      <main  className="overflow-hidden" id="overview">
        {/* Hero */}
         <section id="sdlc" className="relative isolate overflow-hidden" >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[480px] w-[min(90vw,900px)] -translate-x-1/2 rounded-full opacity-[0.14] blur-[120px]"
            style={{ background: "var(--accent)" }}
          />

          <div className="mx-auto w-[calc(100%-40px)] max-w-[1160px] pb-16 pt-16 sm:w-[calc(100%-64px)] sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28">
            <div className="grid gap-9 lg:grid-cols-[1fr_240px] lg:items-end lg:gap-12">
              <div className="max-w-3xl">
                <SectionEyebrow>Engineering methodology / 001</SectionEyebrow>

                <h1 className="text-4xl font-bold leading-[1.1] tracking-[-0.06em] text-[var(--foreground)] sm:text-5xl md:text-6xl lg:text-[68px]">
                  From problem
                  <br />
                  <span className="text-[var(--accent)]">to live production.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--foreground-secondary)] sm:text-base sm:leading-8">
                  A practical framework for transforming business problems
                  into well-designed, verified, and maintainable software.
                  Every phase has a clear purpose, a defined set of activities,
                  and tangible outputs.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  <Tag accent>Requirements-first</Tag>
                  <Tag>Architecture-led</Tag>
                  <Tag>Quality-focused</Tag>
                  <Tag>Lifecycle-driven</Tag>
                </div>
              </div>

              <aside className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 lg:mb-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--foreground-muted)]">
                  Framework overview
                </p>
                <div className="mt-4 space-y-3">
                  {[
                    ["05", "Lifecycle phases"],
                    ["03", "Build-stage groups"],
                    ["01", "Feedback loop"],
                  ].map(([number, label]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between border-b border-[var(--border)] pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-xs text-[var(--foreground-secondary)]">
                        {label}
                      </span>
                      <span className="font-mono text-sm font-semibold text-[var(--accent)]">
                        {number}
                      </span>
                    </div>
                  ))}
                </div>
              </aside>
            </div>

            <PhaseOverview />
          </div>
        </section>

                
        {/* Lifecycle phases */}
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1160px] sm:w-[calc(100%-64px)]">
          <div className="max-w-2xl border-t border-[var(--border)] pt-10 sm:pt-12">
            <SectionLabel>The five phases</SectionLabel>
            <h2 className="text-3xl font-bold tracking-[-0.045em] text-[var(--foreground)] sm:text-4xl">
              How the process works
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--foreground-secondary)] sm:text-base">
              Each phase has a defined purpose, practical activities, and
              outputs that support the next stage. The level of detail adapts
              to the scope and complexity of each project.
            </p>
          </div>

          {phases.map((phase, index) => (
            <PhaseSection key={phase.number} phase={phase} index={index} />
          ))}
        </div>

        <ArchitectureBlueprint />
        <WorkingPrinciples />

        {/* Closing section */}
        <section className="border-t border-[var(--border)] bg-[var(--background-secondary)]">
          <div className="mx-auto w-[calc(100%-40px)] max-w-[1160px] py-14 sm:w-[calc(100%-64px)] sm:py-20">
            <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-9 lg:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full opacity-[0.09] blur-[90px]"
                style={{ background: "var(--accent)" }}
              />

              <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-2xl">
                  <SectionLabel>One lifecycle. Different systems.</SectionLabel>
                  <h2 className="text-2xl font-bold tracking-[-0.04em] text-[var(--foreground)] sm:text-3xl">
                    Structured enough to be reliable.
                    <br className="hidden sm:block" /> Flexible enough to fit the project.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--foreground-secondary)]">
                    Not every application needs every architectural layer or
                    the same level of ceremony. I select the practices,
                    components, and verification steps that fit the problem
                    while maintaining clear requirements, sound engineering,
                    and operational responsibility.
                  </p>
                </div>

                <a
                  href="#sdlc"
                  className="inline-flex w-fit items-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--background-secondary)] px-4 py-3 text-sm font-semibold text-[var(--foreground)] hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
                >
                  Back to overview
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="size-4"
                    aria-hidden="true"
                  >
                    <path d="M12 19V5m-6 6 6-6 6 6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
