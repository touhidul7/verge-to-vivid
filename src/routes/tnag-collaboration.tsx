import { createFileRoute } from "@tanstack/react-router";

import Header from "@/components/site/Header";
import { CALENDLY } from "@/components/site/Header";
const LINKEDIN = "https://www.linkedin.com/in/claudiaharvey/";

const NATIVE_AI = "https://thenativeaigroup.com";

const STEPS = [
  {
    n: "01",
    title: "See the opportunity",
    body: "Clarify the next stage of growth, identify the barriers holding the business back, and define what success should look like.",
  },
  {
    n: "02",
    title: "Design the path",
    body: "Create a practical transformation roadmap that connects leadership priorities, business strategy, people, process, and technology.",
  },
  {
    n: "03",
    title: "Build the capability",
    body: "Strengthen leadership, sales, and operations while introducing AI and automation where they can create measurable value.",
  },
  {
    n: "04",
    title: "Sustain the results",
    body: "Establish clear ownership, accountability, and measures so progress continues long after the initial engagement.",
  },
];

const AUDIENCE = [
  "Established owners seeking a strategic path to scale while retaining their business.",
  "Leadership teams that need clarity, alignment, and accountability for transformation.",
  "Organizations ready to strengthen sales, operations, leadership, and technology together.",
  "Businesses that want AI and automation tied to real priorities and measurable value.",
];

const TITLE =
  "AI Solutions | On The Verge × The Native AI Group Collaboration";
const DESCRIPTION =
  "Human leadership, intelligent systems, and sustainable growth: On The Verge Transformation Consulting and The Native AI Group help established businesses modernize and scale.";

export const Route = createFileRoute("/tnag-collaboration")({
  component: TnagCollaboration,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/tnag-collaboration" }],
  }),
});

function TnagCollaboration() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-linear-to-b from-mist to-[#dde8f7] px-6 py-16 md:px-[8vw] md:py-[10vh]">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-40 hidden h-[620px] w-[620px] rounded-full border border-blue/15 md:block"
          />
          <div className="relative z-2 grid items-center gap-14 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-[6vw]">
            <div>
              <p className="rule-before eyebrow text-blue">
                On The Verge × The Native AI Group
              </p>
              <h1 className="mt-7 font-display text-[clamp(2.2rem,4.6vw,4.2rem)] leading-[1.08] tracking-[-0.01em] text-ink">
                Human Leadership.
                <br />
                Intelligent Systems.
                <br />
                <span className="text-blue">Sustainable Growth.</span>
              </h1>
              <p className="mt-8 max-w-[580px] text-[17px] leading-[1.75] text-ink/80">
                On The Verge Transformation Consulting and The Native AI Group
                are collaborating to help established businesses modernize,
                grow, and scale without losing the leadership, relationships,
                and human judgment that made them successful.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-8">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noreferrer"
                  className="eyebrow bg-blue px-8 py-5 text-white transition-colors hover:bg-deep-blue"
                >
                  Explore the Opportunity
                </a>
                <a
                  href="#how-we-work"
                  className="group inline-flex items-center gap-3 border-b border-ink/30 pb-1 text-[15px] text-ink transition-colors hover:border-blue hover:text-blue"
                >
                  See how we work
                  <span className="transition-transform group-hover:translate-y-1">
                    ↓
                  </span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div
                aria-hidden
                className="absolute top-6 -right-6 bottom-[-24px] left-6 hidden bg-blue/15 md:block"
              />
              <div className="relative bg-deep-blue px-9 py-11 text-white">
                <p className="eyebrow text-white/70">Together</p>
                <p className="mt-6 font-display text-[clamp(1.5rem,2.3vw,1.9rem)] leading-[1.28]">
                  Technology alone does not transform a business.
                </p>
                <p className="mt-6 text-[14.5px] leading-[1.8] text-white/75">
                  Transformation happens when clear strategy, capable people,
                  strong leadership, and intelligent systems work together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* One shared purpose */}
        <section className="grid gap-12 px-6 py-20 md:grid-cols-2 md:gap-[8vw] md:px-[8vw] md:py-[120px]">
          <div>
            <p className="rule-before eyebrow text-blue">One shared purpose</p>
            <h2 className="mt-6 font-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.14] text-ink">
              Two areas of expertise. One clear path forward.
            </h2>
          </div>
          <p className="text-[16.5px] leading-[1.85] text-ink/80">
            This collaboration brings business transformation and AI execution
            together in one coordinated approach. It is designed for owners, C
            suite executives, and leadership teams that want to strategically
            scale using the latest AI solutions at their disposal. On The Verge
            brings the human in the loop strategic leadership, business insight,
            and accountability, while The Native AI Group brings the intelligent
            systems, automation, and implementation capabilities that turn
            strategy into measurable progress.
          </p>
        </section>

        {/* Two partners */}
        <section className="grid md:grid-cols-2">
          <div className="bg-ink px-6 py-16 text-white md:px-[6vw] md:py-[110px]">
            <p className="rule-before eyebrow text-white/70">
              The Native AI Group
            </p>
            <h3 className="mt-6 max-w-[420px] font-display text-[clamp(1.7rem,2.8vw,2.4rem)] leading-[1.18]">
              Intelligent systems and operating capability
            </h3>
            <p className="mt-6 max-w-[460px] text-[15px] leading-[1.8] text-white/70">
              AI strategy, automation, data, implementation, shared
              infrastructure, and practical operating capabilities that help
              businesses work smarter and scale with confidence.
            </p>
          </div>
          <div className="bg-blue px-6 py-16 text-white md:px-[6vw] md:py-[110px]">
            <p className="rule-before eyebrow text-white/75">On The Verge</p>
            <h3 className="mt-6 max-w-[420px] font-display text-[clamp(1.7rem,2.8vw,2.4rem)] leading-[1.18]">
              Human leadership and business transformation
            </h3>
            <p className="mt-6 max-w-[460px] text-[15px] leading-[1.8] text-white/80">
              Strategic leadership, executive development, sales strategy,
              operational insight, and organizational transformation that turn
              ambition into focused, accountable action.
            </p>
          </div>
        </section>

        {/* Pathway */}
        <section
          id="how-we-work"
          className="grid gap-14 px-6 py-20 md:grid-cols-[0.85fr_1.15fr] md:gap-[7vw] md:px-[8vw] md:py-[120px]"
        >
          <div>
            <p className="rule-before eyebrow text-blue">
              The transformation pathway
            </p>
            <h2 className="mt-6 font-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.14] text-ink">
              Strategy becomes real when people, systems, and execution move
              together.
            </h2>
            <p className="mt-7 max-w-[380px] text-[15.5px] leading-[1.8] text-ink/75">
              Every engagement is tailored to the realities of the business and
              built around measurable, sustainable value.
            </p>
          </div>

          <div className="border-t border-ink/15">
            {STEPS.map((s) => (
              <article
                key={s.n}
                className="grid grid-cols-[auto_minmax(0,1fr)] gap-6 border-b border-ink/15 py-8 md:gap-12"
              >
                <span className="text-[11px] tracking-[0.12em] text-blue">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-display text-[clamp(1.25rem,2vw,1.6rem)] leading-tight text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-[560px] text-[15px] leading-[1.75] text-ink/75">
                    {s.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Who this is for */}
        <section className="bg-deep-blue px-6 py-20 text-center text-white md:px-[8vw] md:py-[110px]">
          <p className="rule-before eyebrow text-white/75">Who this is for</p>
          <h2 className="mx-auto mt-7 max-w-[880px] font-display text-[clamp(2rem,3.9vw,3.1rem)] leading-[1.16]">
            Businesses ready to evolve, without giving up what they have built.
          </h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-0">
            {AUDIENCE.map((item, i) => (
              <p
                key={item}
                className={`px-2 text-[14.5px] leading-[1.8] text-white/80 ${
                  i === 0 ? "" : "md:border-l md:border-white/20"
                }`}
              >
                {item}
              </p>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue px-6 py-20 text-center text-white md:px-[12vw] md:py-[110px]">
          <p className="rule-before eyebrow text-white/80">
            A stronger business starts with a clearer path
          </p>
          <h2 className="mx-auto mt-7 max-w-[820px] font-display text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.16]">
            Ready to lead your company into what comes next?
          </h2>
          <p className="mx-auto mt-6 max-w-[600px] text-[16px] leading-[1.75] text-white/85">
            Let's explore where your greatest opportunities are and how the
            right combination of strategy, leadership, and intelligent systems
            can help you realize them.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noreferrer"
              className="eyebrow border border-white/70 px-9 py-5 text-white transition-colors hover:bg-white hover:text-blue"
            >
              Start a Conversation
            </a>
            <a
              href={NATIVE_AI}
              target="_blank"
              rel="noreferrer"
              className="eyebrow border border-white/70 px-9 py-5 text-white transition-colors hover:bg-white hover:text-blue"
            >
              Visit The Native AI Group
            </a>
          </div>
        </section>

        <footer className="grid items-center gap-6 bg-night px-6 py-11 text-[10px] tracking-[0.05em] text-white/65 md:grid-cols-2 md:px-[6vw]">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="On The Verge Transformational Consulting"
              className="h-16 w-auto bg-white p-2"
              loading="lazy"
            />
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="Claudia Harvey LinkedIn"
              className="text-white/80 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5v15H0v-15zM9 8.98h4.78v2.05h.07c.66-1.25 2.28-2.57 4.7-2.57C23.8 8.46 24 11.06 24 14.16V23.98h-5v-8.1c0-1.93-.03-4.41-2.69-4.41-2.69 0-3.1 2.1-3.1 4.27v8.24H9v-15z" />
              </svg>
            </a>
          </div>
          <p className="md:text-right">
            © 2026 On The Verge Transformation Consulting Inc.
          </p>
        </footer>
      </main>
    </div>
  );
}
