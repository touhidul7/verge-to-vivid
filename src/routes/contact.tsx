import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import Header from "@/components/site/Header";

const TITLE = "Contact | On The Verge Transformation Consulting";
const DESCRIPTION =
  "Reach out to On The Verge Transformation Consulting via email for clarity, strategy, and accountability support.";
const EMAIL = "info@OTVtransformation.com";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent("Website inquiry from On The Verge");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-6 py-12 md:px-[6vw] md:py-[8vw]">
        <div className="mx-auto max-w-[900px] rounded-[2rem] border border-ink/10 bg-white p-8 shadow-[0_30px_80px_-55px_rgba(23,63,120,0.35)] md:p-14">
          <div className="mb-10 grid gap-6 text-center">
            <p className="eyebrow text-blue">Contact Claudia</p>
            <h1 className="font-display text-[clamp(2.1rem,4vw,3rem)] leading-[1.08] text-ink">
              Let’s begin the conversation about your next chapter.
            </h1>
            <p className="mx-auto max-w-[680px] text-[17px] leading-[1.8] text-ink/75">
              Use this form to share a few details, and Claudia will follow up by email. If you prefer, send a message directly to {EMAIL}.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-ink/80">Name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  className="mt-3 w-full rounded-xl border border-border/70 bg-surface px-4 py-4 text-sm text-ink outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-ink/80">Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  className="mt-3 w-full rounded-xl border border-border/70 bg-surface px-4 py-4 text-sm text-ink outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-medium text-ink/80">Company</span>
              <input
                type="text"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                className="mt-3 w-full rounded-xl border border-border/70 bg-surface px-4 py-4 text-sm text-ink outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20"
                placeholder="Company name (optional)"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-ink/80">Message</span>
              <textarea
                rows={6}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
                className="mt-3 w-full rounded-[1.25rem] border border-border/70 bg-surface px-4 py-4 text-sm text-ink outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20"
                placeholder="Tell us what you’d like support with…"
              />
            </label>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[560px] text-sm leading-6 text-ink/70">
                Clicking submit will open your email client so you can send the request directly to our team.
              </p>
              <button
                type="submit"
                className="eyebrow inline-flex items-center justify-center rounded-full bg-blue px-8 py-4 text-white transition-colors hover:bg-deep-blue"
              >
                Send Email
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
