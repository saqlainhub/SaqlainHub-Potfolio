
"use client";

import { useState, type FormEvent } from "react";

const contactInfo = {
  email: "saqlainhub1097@gmail.com",
  phone: "+92 3454409621",
  whatsapp: "92 3454409621",
  address: "Chiniot, Punjab, Pakistan",
};

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/saqlainhub",
    handle: "@saqlainhub",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.2 3.23.92.1-.72.39-1.2.7-1.48-2.47-.28-5.07-1.23-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.28-2.6 5.22-5.08 5.49.4.35.75 1.02.75 2.06v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/saqlainhub1097/",
    handle: "Connect professionally",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.45 2H3.55C2.7 2 2 2.67 2 3.5v17c0 .83.7 1.5 1.55 1.5h16.9c.86 0 1.55-.67 1.55-1.5v-17c0-.83-.69-1.5-1.55-1.5ZM8 19H5V9h3v10ZM6.5 7.65a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 19h-3v-4.87c0-1.16-.02-2.65-1.62-2.65-1.62 0-1.87 1.26-1.87 2.56V19h-3V9h2.88v1.37h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V19Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/saqlainhub1097/",
    handle: "@YOUR-INSTAGRAM",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-5 w-5"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.5"
          cy="6.5"
          r="1"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/saqlain1097/",
    handle: "Connect on Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v1.9H7V13h2.8v8h3.7Z" />
      </svg>
    ),
  },
];

const inputClass =
  "w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--foreground-muted)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/15";

const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  contactInfo.address,
)}`;

const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  contactInfo.address,
)}&output=embed`;

type SubmissionStatus =
  | { type: "success"; message: string }
  | { type: "error"; message: string }
  | null;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const formData = new FormData(form);

      const response = await fetch(
        `https://formsubmit.co/ajax/${contactInfo.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(Object.fromEntries(formData.entries())),
        },
      );

      const result = await response.json();

      if (!response.ok || result.success === "false" || result.success === false) {
        throw new Error(
          typeof result.message === "string"
            ? result.message
            : "Your message could not be sent. Please try again.",
        );
      }

      form.reset();

      setSubmissionStatus({
        type: "success",
        message:
          "Your message has been sent successfully. Thank you for reaching out. I'll get back to you as soon as possible.",
      });
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setSubmissionStatus({
        type: "error",
        message:
          "We couldn't confirm that your message was sent. Please try again or contact me directly by email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

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

      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10rem] top-20 h-72 w-72 rounded-full bg-[var(--accent)]/[0.07] blur-[120px]" />
        <div className="absolute bottom-0 right-[-8rem] h-80 w-80 rounded-full bg-sky-400/[0.06] blur-[130px]" />
      </div>

      <div id="contact" className="container mx-auto max-w-7xl px-5 sm:px-8 ">
        {/* Section heading */}
        <div   className="mb-10 max-w-2xl sm:mb-14">
          <p className="mb-3 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.17em] text-[var(--accent)] sm:text-xs">
            <span className="h-px w-7 bg-[var(--accent)]" />
            Get in touch
          </p>

          <h2
            id="about-title"
            className="text-3xl font-bold tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl md:text-5xl"
          >
            Let's build{" "}
            <span className="text-[var(--accent)]">together.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--foreground-secondary)] sm:text-base">
            Have a project in mind, need an AI-powered solution, or want to discuss an idea? Send me a message and let's explore how we can make it happen.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* Left column: Contact information and map */}
          <div className="min-w-0">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/70 p-5 sm:p-7">
              <div className="mt-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  Click to approach
                </p>

                <h3 className="mt-2 text-xl font-semibold text-[var(--foreground)]">
                  Contact information
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--foreground-secondary)]">
                  Choose whichever way works best for you.
                </p>
              </div>

              <div className="mt-5 space-y-2">
                {/* Email */}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="group flex min-w-0 items-center gap-4 rounded-xl border border-transparent p-3 transition hover:border-[var(--border)] hover:bg-[var(--background-secondary)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background-secondary)] text-[var(--accent)]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="3" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-[var(--foreground-muted)]">
                      Email me
                    </span>
                    <span className="mt-1 block break-all text-sm font-medium text-[var(--foreground)]">
                      {contactInfo.email}
                    </span>
                  </span>

                  <span className="text-[var(--foreground-muted)] transition group-hover:translate-x-1 group-hover:text-[var(--accent)]">
                    ↗
                  </span>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`}
                  className="group flex min-w-0 items-center gap-4 rounded-xl border border-transparent p-3 transition hover:border-[var(--border)] hover:bg-[var(--background-secondary)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background-secondary)] text-[var(--accent)]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >
                      <path d="M7 3h3l2 5-2.5 1.7a15 15 0 0 0 4.8 4.8L16 12l5 2v3c0 1.1-.9 2-2 2C10.7 19 5 13.3 5 5c0-1.1.9-2 2-2Z" />
                    </svg>
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-[var(--foreground-muted)]">
                      Call me directly
                    </span>
                    <span className="mt-1 block text-sm font-medium text-[var(--foreground)]">
                      {contactInfo.phone}
                    </span>
                  </span>

                  <span className="text-[var(--foreground-muted)] transition group-hover:translate-x-1 group-hover:text-[var(--accent)]">
                    ↗
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-w-0 items-center gap-4 rounded-xl border border-transparent p-3 transition hover:border-[var(--border)] hover:bg-[var(--background-secondary)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background-secondary)] text-[var(--accent)]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >
                      <path d="M20 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.2-4.1A8.5 8.5 0 1 1 20 11.5Z" />
                      <path d="M8 8.5c.5 2.5 2 4 4.5 4.5l1.2-1.2 2 1c-.2 1.4-1.2 2.2-2.6 2.2-3.4-.3-6.7-3.6-7-7 0-1.4.8-2.4 2.2-2.6l1 2L8 8.5Z" />
                    </svg>
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-[var(--foreground-muted)]">
                      Chat on WhatsApp
                    </span>
                    <span className="mt-1 block text-sm font-medium text-[var(--foreground)]">
                      +{contactInfo.whatsapp}
                    </span>
                  </span>

                  <span className="text-[var(--foreground-muted)] transition group-hover:translate-x-1 group-hover:text-[var(--accent)]">
                    ↗
                  </span>
                </a>

                {/* Address */}
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-w-0 items-center gap-4 rounded-xl border border-transparent p-3 transition hover:border-[var(--border)] hover:bg-[var(--background-secondary)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background-secondary)] text-[var(--accent)]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >
                      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-[var(--foreground-muted)]">
                      Location · Open map
                    </span>
                    <span className="mt-1 block text-sm font-medium text-[var(--foreground)]">
                      {contactInfo.address}
                    </span>
                  </span>

                  <span className="text-[var(--foreground-muted)] transition group-hover:translate-x-1 group-hover:text-[var(--accent)]">
                    ↗
                  </span>
                </a>
              </div>

              {/* Embedded Google Map */}
              <div className="mt-6 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background-secondary)]">
                <div className="flex items-center justify-between gap-3 px-4 py-3">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[var(--foreground)]">
                      Find my location
                    </p>
                    <p className="mt-1 truncate text-[10px] text-[var(--foreground-muted)]">
                      {contactInfo.address}
                    </p>
                  </div>

                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-xs font-medium text-[var(--accent)] transition hover:opacity-75"
                  >
                    Directions ↗
                  </a>
                </div>

                <iframe
                  title={`Map showing ${contactInfo.address}`}
                  src={mapEmbedUrl}
                  width="100%"
                  height="290"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full border-t border-[var(--border)] grayscale-[0.35] transition hover:grayscale-0"
                />
              </div>
            </div>
          </div>

          {/* Right column: Contact form and social links */}
          <div className="min-w-0 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 p-5 sm:p-8 lg:p-9">
             <div className="mb-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  Send a message
                </p>

                <h3 className="mt-2 text-xl font-semibold text-[var(--foreground)]">
                  Tell me about your project.
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--foreground-secondary)]">
                  Share a few details below. I'll have the information needed to understand your request.
                </p>
              </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input
                type="hidden"
                name="_subject"
                value="New portfolio contact message"
              />
              <input type="hidden" name="_template" value="table" />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-medium text-[var(--foreground-secondary)]"
                  >
                    Your name <span className="text-[var(--accent)]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="John Doe"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-medium text-[var(--foreground-secondary)]"
                  >
                    Email address <span className="text-[var(--accent)]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="john@example.com"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-xs font-medium text-[var(--foreground-secondary)]"
                >
                  Subject <span className="text-[var(--accent)]">*</span>
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs font-medium text-[var(--foreground-secondary)]"
                >
                  Message <span className="text-[var(--accent)]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your idea, project, or question..."
                  required
                  className={`${inputClass} min-h-40 resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[var(--accent)] px-5 py-4 text-sm font-semibold text-[var(--accent-foreground)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:cursor-wait disabled:opacity-70"
              >
                {isSubmitting ? "Sending message..." : "Send message"}
                {!isSubmitting && (
                  <span className="text-base transition-transform group-hover:translate-x-1">
                    →
                  </span>
                )}
                {isSubmitting && (
                  <svg
                    className="h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 0 1 8-8V0C5.37 0 0 5.37 0 12h4Z"
                    />
                  </svg>
                )}
              </button>

{submissionStatus && (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
    role="presentation"
    onClick={() => setSubmissionStatus(null)}
  >
    <div
      className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--background-secondary)] p-8 text-center shadow-2xl"
      role="dialog"
      aria-modal="true"
      aria-labelledby="submission-popup-title"
      onClick={(event) => event.stopPropagation()}
    >
      <div
        className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full ${
          submissionStatus.type === "success"
            ? "bg-green-500/10 text-green-500"
            : "bg-red-500/10 text-red-500"
        }`}
      >
        {submissionStatus.type === "success" ? (
          <svg
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              d="M5 12.5 9.5 17 19 7.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              d="M12 8v4m0 4h.01M10.3 3.9 2.8 17a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3l-7.5-13.1a2 2 0 0 0-3.4 0Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      <h3
        id="submission-popup-title"
        className="mb-3 text-xl font-semibold text-[var(--foreground)]"
      >
        {submissionStatus.type === "success"
          ? "Message Sent Successfully!"
          : "Message Could Not Be Sent"}
      </h3>

      <p className="mb-7 text-sm leading-6 text-[var(--foreground-secondary)]">
        {submissionStatus.message}
      </p>

      <button
        type="button"
        onClick={() => setSubmissionStatus(null)}
        className="w-full rounded-xl bg-[var(--accent)] px-5 py-3 font-medium text-white transition-opacity hover:opacity-90"
      >
        {submissionStatus.type === "success" ? "Done" : "Try Again"}
      </button>
    </div>
  </div>
)}
            </form>

            {/* Social links below the submit button */}
            <div className="mt-8 border-t border-[var(--border)] pt-6">
              <div className="text-center">
                <h4 className="text-sm font-semibold text-[var(--foreground)]">
                  Connect with me
                </h4>
                <p className="mt-1 text-xs leading-5 text-[var(--foreground-muted)]">
                  Follow my work and find me on social platforms.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                {socialLinks.map((social) => (
                  <div key={social.name} className="group/social relative">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background-secondary)] text-[var(--foreground-secondary)] transition duration-200 hover:-translate-y-1 hover:border-[var(--accent)]/60 hover:bg-[var(--accent)]/5 hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    >
                      {social.icon}
                    </a>

                    {/* Hover and keyboard-focus tooltip */}
                    <span
                      role="tooltip"
                      className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg border border-white/10 bg-[#101116] px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-xl transition duration-200 group-hover/social:translate-y-0 group-hover/social:opacity-100 group-focus-within/social:translate-y-0 group-focus-within/social:opacity-100"
                    >
                      {social.name}
                      <span className="absolute left-1/2 top-full -translate-x-1/2 border-[5px] border-transparent border-t-[#101116]" />
                    </span>
                  </div>
                ))}
              </div>
            </div>

           
          </div>
        </div>

       
      </div>
    </section>
  );
}
