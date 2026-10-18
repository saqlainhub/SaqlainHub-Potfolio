"use client";

import { useCallback, useEffect, useState } from "react";

type Category = "AI Engineering" | "Full-Stack" | "Web Applications";

type Screenshot = {
  src: string;
  alt: string;
  label: string;
};

type Project = {
  id: string;
  name: string;
  category: Category;
  type: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: string[];
  decisions: string[];
  stack: string[];
  screenshots: Screenshot[];
  githubUrl?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    id: "customer-support-ai",
    name: "Customer Support AI",
    category: "AI Engineering",
    type: "AI-powered support platform",
    description:
      "A document-grounded support assistant that retrieves relevant knowledge to answer customer questions.",
    overview:
      "A full-stack support application combining a conversational interface, document ingestion, retrieval-augmented generation, and persistent application data.",
    problem:
      "A general-purpose language model does not automatically know the contents of a business's private knowledge base. Answers need to be grounded in relevant documentation rather than relying only on model knowledge.",
    solution:
      "Built a document ingestion and retrieval workflow that connects uploaded knowledge to an AI-powered support experience. The frontend communicates with a Python API, while PostgreSQL stores application data.",
    features: [
      "PDF upload and document processing",
      "Embeddings and retrieval-augmented generation",
      "Answers grounded in retrieved knowledge",
      "Source references for retrieved information",
      "Persistent conversations",
      "Authentication and protected application areas",
      "PostgreSQL-backed data access",
    ],
    architecture: [
      "Next.js frontend for the conversational experience",
      "FastAPI backend for API endpoints and application logic",
      "Document extraction, chunking, embedding, and retrieval workflow",
      "Gemini API for language-model responses",
      "PostgreSQL and SQLAlchemy for persistent data",
    ],
    decisions: [
      "Separate frontend and backend responsibilities",
      "Retrieve relevant document content before generating grounded answers",
      "Use a relational database for persistent application data",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Gemini API",
      "RAG",
      "Embeddings",
    ],
    screenshots: [
      {
        src: "/projects/customer-support-ai/chat.jpg",
        alt: "Customer Support AI chat interface",
        label: "Chat interface",
      },
      {
        src: "/projects/customer-support-ai/chat.jpg",
        alt: "Customer Support AI knowledge-base management",
        label: "Knowledge base",
      },
      {
        src: "/projects/customer-support-ai/chat.jpg",
        alt: "Retrieved source information in Customer Support AI",
        label: "Source retrieval",
      },
    ],
  },
  {
    id: "scholara",
    name: "Scholara",
    category: "Full-Stack",
    type: "Learning platform · PWA",
    description:
      "A student-focused web application built with a modern Next.js stack and a persistent relational data layer.",
    overview:
      "Scholara is a progressive web application built with Next.js, TypeScript, Prisma, and Neon PostgreSQL.",
    problem:
      "A learning platform needs a coherent application structure, responsive interface, and maintainable data layer as its workflows expand.",
    solution:
      "Built the application using a typed React/Next.js foundation, Prisma for database access, and Neon PostgreSQL for persistent storage.",
    features: [
      "Progressive web application foundation",
      "Responsive application interface",
      "TypeScript-based component architecture",
      "Prisma data-access layer",
      "Neon PostgreSQL integration",
    ],
    architecture: [
      "Next.js application and React components",
      "TypeScript for typed application code",
      "Prisma for database access",
      "Neon-hosted PostgreSQL",
      "Tailwind CSS for interface styling",
    ],
    decisions: [
      "Use TypeScript to improve consistency across application code",
      "Keep database access structured through Prisma",
      "Use a responsive, PWA-oriented application foundation",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Neon",
      "PWA",
    ],
    screenshots: [
      {
        src: "/projects/scholara/dashboard.png",
        alt: "Scholara main application screen",
        label: "Application",
      },
      {
        src: "/projects/scholara/tasks.png",
        alt: "Scholara task workflow",
        label: "Task workflow",
      },
      {
        src: "/projects/scholara/mobile.png",
        alt: "Scholara responsive mobile interface",
        label: "Mobile layout",
      },
    ],
    githubUrl: "https://github.com/saqlainhub/Scholara",
  },
  {
    id: "stest",
    name: "STEST",
    category: "Full-Stack",
    type: "Online testing platform",
    description:
      "An exam-focused interface for multiple-choice practice and structured test-taking workflows.",
    overview:
      "A web application centred on the presentation of MCQs and a straightforward test-taking experience.",
    problem:
      "Students need a clear interface for reading questions, choosing answers, and moving through a practice test.",
    solution:
      "Built a web-based testing interface with reusable components and responsive styling.",
    features: [
      "Multiple-choice question interface",
      "Test-taking layout",
      "Answer selection controls",
      "Responsive page structure",
    ],
    architecture: [
      "React components for test screens",
      "Next.js application structure",
      "TypeScript for typed UI code",
      "Tailwind CSS for responsive styling",
    ],
    decisions: [
      "Prioritise question readability and a clear answer-selection layout",
      "Use reusable components for consistent interface patterns",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    screenshots: [
      {
        src: "/projects/stest/test-screen.png",
        alt: "STEST test-taking interface",
        label: "Test screen",
      },
      {
        src: "/projects/stest/questions.png",
        alt: "STEST question layout",
        label: "Questions",
      },
      {
        src: "/projects/stest/results.png",
        alt: "STEST results interface",
        label: "Results",
      },
    ],
  },
  {
    id: "spay",
    name: "sPay",
    category: "Web Applications",
    type: "Banking dashboard UI",
    description:
      "A banking-inspired frontend concept focused on account overview, dashboard layout, and navigation.",
    overview:
      "A frontend project exploring interface patterns used in digital banking products. It is a UI project, not a connected banking service.",
    problem:
      "Dashboard interfaces need a clear information hierarchy and predictable navigation.",
    solution:
      "Created a frontend dashboard concept with reusable interface elements and responsive styling.",
    features: [
      "Login interface",
      "Dashboard layout",
      "Account overview presentation",
      "Reusable interface components",
      "Responsive styling",
    ],
    architecture: [
      "React component-based frontend",
      "JavaScript-driven interface",
      "Tailwind CSS styling",
    ],
    decisions: [
      "Keep key account information visually prominent",
      "Use reusable interface elements for consistency",
    ],
    stack: ["React", "JavaScript", "Tailwind CSS"],
    screenshots: [
      {
        src: "/projects/spay/login.png",
        alt: "sPay login interface",
        label: "Login",
      },
      {
        src: "/projects/spay/dashboard.png",
        alt: "sPay dashboard concept",
        label: "Dashboard",
      },
      {
        src: "/projects/spay/mobile.png",
        alt: "sPay mobile dashboard concept",
        label: "Mobile layout",
      },
    ],
  },
  {
    id: "newsify",
    name: "Newsify",
    category: "Web Applications",
    type: "News website",
    description:
      "A content-focused website with article cards, navigation, responsive styling, and theme switching.",
    overview:
      "A frontend project using HTML, CSS, and JavaScript to explore content hierarchy and interactive web behaviour.",
    problem:
      "News interfaces need readable layouts that help visitors scan headlines and navigate content.",
    solution:
      "Built a responsive news-style interface with article cards, navigation controls, and a theme toggle.",
    features: [
      "Article-card layout",
      "Navigation interactions",
      "Light and dark theme toggle",
      "Responsive styling",
    ],
    architecture: [
      "HTML for page structure",
      "CSS for layout and visual styling",
      "JavaScript for interface interactions",
    ],
    decisions: [
      "Prioritise readable content and scannable article cards",
      "Provide theme switching for different viewing preferences",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    screenshots: [
      {
        src: "/projects/newsify/home.png",
        alt: "Newsify homepage",
        label: "Homepage",
      },
      {
        src: "/projects/newsify/articles.png",
        alt: "Newsify article-card layout",
        label: "Articles",
      },
      {
        src: "/projects/newsify/dark-mode.png",
        alt: "Newsify dark theme",
        label: "Dark theme",
      },
    ],
  },
  {
    id: "scricket",
    name: "SCricket",
    category: "Web Applications",
    type: "Interactive cricket application",
    description:
      "A cricket-themed React project exploring state-driven calculations and interactive interface controls.",
    overview:
      "A small interactive web application focused on React component structure and dynamic UI behaviour.",
    problem:
      "Interactive interfaces need their displayed values to update consistently when the user changes application state.",
    solution:
      "Built a React interface with state-driven calculations and Tailwind CSS styling.",
    features: [
      "Interactive cricket-themed interface",
      "State-driven UI updates",
      "Dynamic calculations",
      "Reusable components",
    ],
    architecture: [
      "React components for the interface",
      "JavaScript for application logic",
      "Tailwind CSS for styling",
    ],
    decisions: [
      "Keep UI updates driven by application state",
      "Separate visual components from calculation logic where appropriate",
    ],
    stack: ["React", "JavaScript", "Tailwind CSS"],
    screenshots: [
      {
        src: "/projects/scricket/game.png",
        alt: "SCricket interactive game interface",
        label: "Game screen",
      },
      {
        src: "/projects/scricket/score.png",
        alt: "SCricket scoring interface",
        label: "Scoring",
      },
    ],
  },
];

const filters = [
  "All",
  "AI Engineering",
  "Full-Stack",
  "Web Applications",
] as const;

type Filter = (typeof filters)[number];

/* -------------------------------------------------------------------------- */
/* Icons                                                                      */
/* -------------------------------------------------------------------------- */

function ImageIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path
        d="m21 15-5-5L5 21"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.31-3.76-1.31-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.7-1.48-2.47-.28-5.06-1.24-5.06-5.5 0-1.21.43-2.2 1.15-2.97-.12-.28-.5-1.41.11-2.94 0 0 .94-.3 3.05 1.13a10.6 10.6 0 0 1 5.55 0c2.11-1.43 3.05-1.13 3.05-1.13.61 1.53.23 2.66.11 2.94.72.77 1.15 1.76 1.15 2.97 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06v3.07c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function ExternalIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M14 4h6v6M20 4l-9 9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronIcon({
  direction,
  className = "h-5 w-5",
}: {
  direction: "left" | "right";
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {direction === "left" ? (
        <path d="m15 18-6-6 6-6" />
      ) : (
        <path d="m9 18 6-6-6-6" />
      )}
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M6 6l12 12M18 6 6 18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Dedicated screenshot gallery popup                                        */
/* -------------------------------------------------------------------------- */


function ImageGalleryModal({
  project,
  initialIndex = 0,
  onClose,
}: {
  project: Project;
  initialIndex?: number;
  onClose: () => void;
}) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [failedImages, setFailedImages] = useState<string[]>([]);
  const screenshots = project.screenshots;
  const current = screenshots[activeIndex];

  const move = useCallback(
    (direction: number) => {
      setActiveIndex(
        (index) =>
          (index + direction + screenshots.length) % screenshots.length,
      );
    },
    [screenshots.length],
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [move, onClose]);

  const imageFailed = failedImages.includes(current.src);

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-2 backdrop-blur-xl sm:p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} screenshot gallery`}
        className="relative flex max-h-[96dvh] w-full max-w-[1500px] flex-col overflow-hidden rounded-xl border border-white/10 bg-[#101116] text-white shadow-2xl sm:rounded-2xl"
      >
        {/* Gallery header */}
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-3 py-3 sm:px-5 sm:py-3.5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-[var(--accent)]">
              <ImageIcon className="h-4 w-4" />
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold tracking-tight">
                {project.name}
              </p>
              <p className="mt-0.5 text-[10px] text-white/45 sm:text-xs">
                Project gallery
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] text-white/65 sm:text-xs">
              {String(activeIndex + 1).padStart(2, "0")}
              <span className="mx-1.5 text-white/25">/</span>
              {String(screenshots.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close image gallery"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        {/* Full-width image stage */}
        <div className="relative flex min-h-[240px] w-full flex-1 items-center justify-center overflow-hidden bg-[#090a0e] p-0">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(120,120,140,0.12),transparent_65%)]" />

          {!imageFailed ? (
            <img
              key={current.src}
              src={current.src}
              alt={current.alt}
              className="relative block h-full max-h-[68dvh] w-full object-contain"
              onError={() =>
                setFailedImages((previous) =>
                  previous.includes(current.src)
                    ? previous
                    : [...previous, current.src],
                )
              }
            />
          ) : (
            <div className="relative flex min-h-64 w-full flex-col items-center justify-center border border-white/10 bg-white/[0.03] p-6 text-center">
              <ImageIcon className="h-8 w-8 text-white/30" />
              <p className="mt-4 text-sm font-medium text-white/80">
                Image unavailable
              </p>
              <p className="mt-2 max-w-sm break-all text-xs leading-5 text-white/40">
                {current.src}
              </p>
            </div>
          )}

          {/* Previous / next controls */}
          {screenshots.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={() => move(-1)}
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white shadow-lg backdrop-blur-md transition hover:border-white/30 hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] sm:left-5 sm:h-12 sm:w-12"
              >
                <ChevronIcon direction="left" />
              </button>

              <button
                type="button"
                aria-label="Next image"
                onClick={() => move(1)}
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white shadow-lg backdrop-blur-md transition hover:border-white/30 hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] sm:right-5 sm:h-12 sm:w-12"
              >
                <ChevronIcon direction="right" />
              </button>
            </>
          )}
        </div>

        {/* Image details and thumbnails */}
        <div className="shrink-0 border-t border-white/10 bg-[#101116] px-3 py-3 sm:px-5 sm:py-3.5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold sm:text-sm">
                {current.label}
              </p>
              <p className="mt-1 truncate text-[10px] text-white/40 sm:text-xs">
                {current.alt}
              </p>
            </div>

            {screenshots.length > 1 && (
              <div className="hidden shrink-0 items-center gap-1.5 sm:flex">
                {screenshots.map((screenshot, index) => (
                  <button
                    key={screenshot.src}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show ${screenshot.label}`}
                    aria-pressed={activeIndex === index}
                    className={`h-1.5 rounded-full transition-all ${
                      activeIndex === index
                        ? "w-6 bg-[var(--accent)]"
                        : "w-2 bg-white/25 hover:bg-white/55"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {screenshots.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {screenshots.map((screenshot, index) => (
                <button
                  key={screenshot.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View ${screenshot.label}`}
                  aria-pressed={activeIndex === index}
                  className={`group/thumb relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border transition sm:h-[68px] sm:w-28 ${
                    activeIndex === index
                      ? "border-[var(--accent)] ring-1 ring-[var(--accent)]"
                      : "border-white/10 opacity-55 hover:border-white/35 hover:opacity-100"
                  }`}
                >
                  <img
                    src={screenshot.src}
                    alt=""
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                  <span
                    className={`absolute inset-x-0 bottom-0 truncate bg-black/70 px-1.5 py-1 text-left text-[9px] ${
                      activeIndex === index
                        ? "text-white"
                        : "text-white/70"
                    }`}
                  >
                    {screenshot.label}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}


/* -------------------------------------------------------------------------- */
/* Card image: static first image with an interactive bottom overlay           */
/* -------------------------------------------------------------------------- */

function ProjectCardImage({
  project,
  onOpenGallery,
}: {
  project: Project;
  onOpenGallery: (project: Project) => void;
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const firstImage = project.screenshots[0];

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Open ${project.name} screenshot gallery`}
      onClick={() => onOpenGallery(project)}
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return;

        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpenGallery(project);
        }
      }}
      className="group/image relative aspect-[16/10] cursor-pointer overflow-hidden bg-[var(--background-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--accent)]"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_50%_0%,var(--accent-soft),transparent_72%)]" />

      {!imageFailed ? (
        <img
          src={firstImage.src}
          alt={firstImage.alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top transition duration-500 ease-out group-hover/image:scale-[1.025]"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] text-sm font-bold text-[var(--accent)]">
            {project.name
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 3)}
          </span>
          <p className="mt-3 text-sm font-semibold text-[var(--foreground)]">
            {project.name}
          </p>
          <p className="mt-1 max-w-[230px] text-[10px] leading-4 text-[var(--foreground-muted)]">
            Add a real screenshot at{" "}
            <span className="text-[var(--foreground-secondary)]">
              {firstImage.src}
            </span>
          </p>
        </div>
      )}

      {/* Bottom gradient: hidden on desktop until hover; visible by default on mobile */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover/image:opacity-100 sm:group-focus-within/image:opacity-100" />

      {/* Bottom image controls */}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-3 pb-3 pt-10 opacity-100 transition-all duration-300 sm:translate-y-2 sm:opacity-0 sm:group-hover/image:translate-y-0 sm:group-hover/image:opacity-100 sm:group-focus-within/image:translate-y-0 sm:group-focus-within/image:opacity-100">
        {/* Project links on the left */}
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.name} source code on GitHub`}
              title="View source code"
              onClick={(event) => event.stopPropagation()}
              className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-black/40 text-white shadow-lg backdrop-blur-md transition hover:border-white/50 hover:bg-black/70 hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${project.name} website`}
              title="Visit website"
              onClick={(event) => event.stopPropagation()}
              className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-black/40 text-white shadow-lg backdrop-blur-md transition hover:border-white/50 hover:bg-black/70 hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              <ExternalIcon className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* Gallery button on the right */}
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onOpenGallery(project);
          }}
          aria-label={`View all ${project.screenshots.length} images for ${project.name}`}
          title="View project images"
          className="pointer-events-auto inline-flex h-8 items-center gap-1.5 rounded-lg border border-white/20 bg-black/45 px-1 text-[10px] font-semibold text-white shadow-lg backdrop-blur-md transition hover:border-white/50 hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        >
          <ImageIcon className="h-4 w-4" />
          <span className="text-[10px]">
            {project.screenshots.length}
          </span>
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Existing card content                                                     */
/* -------------------------------------------------------------------------- */

function ProjectCard({
  project,
  onOpen,
  onOpenGallery,
}: {
  project: Project;
  onOpen: (project: Project) => void;
  onOpenGallery: (project: Project) => void;
}) {
  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] transition duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-xl hover:shadow-[var(--shadow-color)]">
      <ProjectCardImage
        project={project}
        onOpenGallery={onOpenGallery}
      />

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[10px] font-semibold text-[var(--accent)]">
            {project.category}
          </span>
          <span className="truncate text-[9px] text-[var(--foreground-muted)]">
            {project.type}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-bold tracking-tight text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--accent)]">
          {project.name}
        </h3>

        <p className="mt-2 line-clamp-3 min-h-[60px] text-xs leading-5 text-[var(--foreground-secondary)]">
          {project.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[var(--border)] bg-[var(--background-secondary)] px-2 py-1 text-[10px] text-[var(--foreground-secondary)]"
            >
              {tech}
            </span>
          ))}

          {project.stack.length > 4 && (
            <span className="rounded-md border border-[var(--border)] px-2 py-1 text-[10px] text-[var(--foreground-muted)]">
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[var(--border)] pt-4 mt-5">
          
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="ml-auto inline-flex items-center gap-1.5 text-sm text-[var(--foreground)] transition-all duration-300 hover:gap-2.5 hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            Case study <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/* Existing case-study modal                                                  */
/* -------------------------------------------------------------------------- */

function ScreenshotSlider({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<string[]>([]);
  const screenshots = project.screenshots;
  const current = screenshots[activeIndex];

  const move = useCallback(
    (direction: number) => {
      setActiveIndex(
        (index) => (index + direction + screenshots.length) % screenshots.length,
      );
    },
    [screenshots.length],
  );

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [move]);

  const imageFailed = failedImages.includes(current.src);

  return (
    <div
      className={`group/slider relative overflow-hidden bg-[var(--background-secondary)] ${
        large ? "aspect-[16/10]" : "aspect-[16/10]"
      }`}
      aria-label={`${project.name} screenshots`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,var(--accent-soft),transparent_72%)]" />

      {!imageFailed ? (
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top transition duration-500 group-hover/slider:scale-[1.015]"
          onError={() =>
            setFailedImages((previous) =>
              previous.includes(current.src)
                ? previous
                : [...previous, current.src],
            )
          }
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] text-sm font-bold text-[var(--accent)]">
            {project.name
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 3)}
          </span>
          <p className="mt-3 text-sm font-semibold text-[var(--foreground)]">
            {project.name}
          </p>
          <p className="mt-1 max-w-[230px] text-[10px] leading-4 text-[var(--foreground-muted)]">
            Add a real screenshot at{" "}
            <span className="text-[var(--foreground-secondary)]">
              {current.src}
            </span>
          </p>
        </div>
      )}

      {screenshots.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous screenshot"
            onClick={(event) => {
              event.stopPropagation();
              move(-1);
            }}
            className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/55 text-base text-white opacity-100 backdrop-blur transition hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] sm:opacity-0 sm:group-hover/slider:opacity-100 sm:group-focus-within/slider:opacity-100"
          >
            <ChevronIcon direction="left" className="h-4 w-4" />
          </button>

          <button
            type="button"
            aria-label="Next screenshot"
            onClick={(event) => {
              event.stopPropagation();
              move(1);
            }}
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/55 text-base text-white opacity-100 backdrop-blur transition hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] sm:opacity-0 sm:group-hover/slider:opacity-100 sm:group-focus-within/slider:opacity-100"
          >
            <ChevronIcon direction="right" className="h-4 w-4" />
          </button>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/75 to-transparent px-3 pb-3 pt-8">
            <span className="truncate text-[10px] font-medium text-white">
              {current.label}
            </span>

            <div className="flex shrink-0 items-center gap-1.5">
              {screenshots.map((screenshot, index) => (
                <button
                  key={screenshot.src}
                  type="button"
                  aria-label={`Show screenshot ${index + 1}: ${screenshot.label}`}
                  aria-pressed={activeIndex === index}
                  onClick={(event) => {
                    event.stopPropagation();
                    setActiveIndex(index);
                  }}
                  className={`h-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                    activeIndex === index
                      ? "w-5 bg-white"
                      : "w-1.5 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function CaseStudyModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-0 backdrop-blur-md sm:items-center sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        className="relative max-h-[95dvh] w-full max-w-5xl overflow-y-auto rounded-t-2xl border border-[var(--border-strong)] bg-[var(--background)] shadow-2xl sm:rounded-2xl"
      >
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[var(--border)] bg-[var(--background)]/95 px-4 py-3 backdrop-blur-xl sm:px-6">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--foreground-secondary)]">
              Project case study
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-lg text-[var(--foreground-secondary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="grid lg:grid-cols-[1fr_0.92fr]">
          <div className="p-5 sm:p-7 lg:p-9">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1.5 text-[10px] font-semibold text-[var(--accent)]">
                {project.category}
              </span>
              <span className="text-[10px] text-[var(--foreground-muted)]">
                {project.type}
              </span>
            </div>

            <h2
              id="case-study-title"
              className="mt-4 text-3xl font-bold leading-tight tracking-[-0.045em] text-[var(--foreground)] sm:text-4xl"
            >
              {project.name}
            </h2>

            <p className="mt-4 text-sm leading-7 text-[var(--foreground-secondary)]">
              {project.overview}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-4 py-2.5 text-xs font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <GitHubIcon /> View source
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2.5 text-xs font-semibold text-[var(--accent-foreground)] transition hover:opacity-90"
                >
                  Live website <ExternalIcon />
                </a>
              )}
            </div>
          </div>

          <div className="border-t border-[var(--border)] lg:border-l lg:border-t-0">
            <div className="p-4 sm:p-6">
              <div className="overflow-hidden rounded-xl border border-[var(--border)]">
                <ScreenshotSlider project={project} large />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border)] p-5 sm:p-7 lg:p-9">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:gap-12">
            <div className="space-y-8">
              <section>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  01 / The challenge
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                  Problem statement
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--foreground-secondary)]">
                  {project.problem}
                </p>
              </section>

              <section>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  02 / The solution
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                  Implementation approach
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--foreground-secondary)]">
                  {project.solution}
                </p>
              </section>

              <section>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  03 / Functionality
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                  Key features
                </h3>
                <ul className="mt-4 space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[var(--accent-soft)] text-[9px] font-semibold text-[var(--accent)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-5 text-[var(--foreground-secondary)]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  04 / Engineering
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                  Technical decisions
                </h3>
                <ul className="mt-4 space-y-3">
                  {project.decisions.map((decision) => (
                    <li key={decision} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span className="text-sm leading-5 text-[var(--foreground-secondary)]">
                        {decision}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="space-y-6">
              <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  Architecture
                </p>
                <h3 className="mt-2 text-base font-semibold text-[var(--foreground)]">
                  How it is structured
                </h3>
                <ol className="mt-4 space-y-3">
                  {project.architecture.map((layer, index) => (
                    <li key={layer} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] text-[9px] font-semibold text-[var(--accent)]">
                        {index + 1}
                      </span>
                      <span className="pt-0.5 text-xs leading-5 text-[var(--foreground-secondary)]">
                        {layer}
                      </span>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="h-fit rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  Built with
                </p>
                <h3 className="mt-2 text-base font-semibold text-[var(--foreground)]">
                  Technology stack
                </h3>
                <p className="mt-2 text-xs leading-5 text-[var(--foreground-muted)]">
                  The tools and technologies used in this project.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[var(--border)] bg-[var(--background)] px-2.5 py-1.5 text-[10px] text-[var(--foreground-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 border-t border-[var(--border)] pt-4">
                  <p className="text-xs font-medium text-[var(--foreground)]">
                    Engineering focus
                  </p>
                  <p className="mt-1.5 text-xs leading-5 text-[var(--foreground-secondary)]">
                    {project.category === "AI Engineering"
                      ? "AI integration, retrieval workflows, and full-stack application engineering."
                      : project.category === "Full-Stack"
                        ? "Application architecture, frontend engineering, and data integration."
                        : "Interface design, responsive layout, and interactive web development."}
                  </p>
                </div>
              </section>

              <section className="rounded-xl border border-[var(--border)] p-4 sm:p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
                  Project links
                </p>
                <div className="mt-3 flex flex-col gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between gap-3 text-xs font-medium text-[var(--foreground-secondary)] transition hover:text-[var(--accent)]"
                    >
                      Source code <GitHubIcon />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between gap-3 text-xs font-medium text-[var(--foreground-secondary)] transition hover:text-[var(--accent)]"
                    >
                      Live website <ExternalIcon />
                    </a>
                  )}

                  {!project.githubUrl && !project.liveUrl && (
                    <p className="text-xs leading-5 text-[var(--foreground-muted)]">
                      Source and live-demo links will appear here when
                      available.
                    </p>
                  )}
                </div>
              </section>
            </aside>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-[var(--border)] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-[var(--foreground-muted)]">
              Case study · {project.name}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-xs font-semibold text-[var(--accent-foreground)] transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              Back to projects <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Projects section                                                           */
/* -------------------------------------------------------------------------- */

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [galleryProject, setGalleryProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      
      aria-labelledby="projects-title"
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
      
      <div id="projects" className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.17em] text-[var(--accent)] sm:text-xs">
              <span className="h-px w-7 bg-[var(--accent)]" />
              Selected Work
            </p>

            <h2
              id="projects-title"
              className="text-3xl font-bold tracking-[-0.045em] text-[var(--foreground)] sm:text-4xl md:text-5xl"
            >
              Projects built{" "}
              <span className="text-[var(--accent)]">with purpose.</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--foreground-secondary)]">
              Explore the interfaces, implementation choices, and technical
              details behind my software projects.
            </p>
          </div>
        </div>

        {/* Filters left, project count right */}
        <div className="mb-7 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
          <div
            className="inline-flex w-fit max-w-full flex-wrap items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--background-secondary)] p-1"
            role="group"
            aria-label="Filter projects by category"
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative rounded-lg px-3 py-2 text-[11px] font-medium transition-all duration-200 sm:px-4 sm:text-xs ${
                    isActive
                      ? "border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--accent)] shadow-sm"
                      : "border border-transparent text-[var(--foreground-secondary)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <p
            className="flex shrink-0 items-center gap-2 text-xs text-[var(--foreground-muted)] sm:justify-end"
            aria-live="polite"
          >
            <span className="font-mono text-sm font-semibold tracking-wide text-[var(--foreground)]">
              {filteredProjects.length.toString().padStart(2, "0")}
            </span>
            <span>projects in view</span>
          </p>
        </div>

        <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setSelectedProject}
              onOpenGallery={setGalleryProject}
            />
          ))}
        </div>

        
      </div>

      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {galleryProject && (
        <ImageGalleryModal
          key={galleryProject.id}
          project={galleryProject}
          onClose={() => setGalleryProject(null)}
        />
      )}
    </section>
  );
}