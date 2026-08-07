/* eslint-disable prettier/prettier */
import speaking from "../../../public/claudia-speaking.jpg";
import { SPEAK_MAIL } from "./Header";

const THEMES = [
  {
    n: "01",
    title: "Leadership and Transformation",
    body: "How leaders create clarity, confidence, and momentum while navigating uncertainty and change.",
  },
  {
    n: "02",
    title: "Entrepreneurship and Innovation",
    body: "Lessons from idea development, product innovation, commercialization, scaling, and successful business exits.",
  },
  {
    n: "03",
    title: "Sales, Influence, and Growth",
    body: "Building trust, strengthening communication, and creating the conditions for sustainable business growth.",
  },
  {
    n: "04",
    title: "Artificial Intelligence and the Human Advantage",
    body: "Using emerging technology thoughtfully while keeping leadership, judgment, and people at the centre of progress.",
  },
  {
    n: "05",
    title: "Resilience and Reinvention",
    body: "Moving beyond limitations, responding to setbacks, and taking purposeful action toward meaningful growth.",
  },
  {
    n: "06",
    title: "Women, Leadership, and Possibility",
    body: "Redefining success, embracing change, and building businesses and lives that create lasting impact.",
  },
];

export default function Speaking() {
  return (
    <section
      id="speaking"
      className="bg-shell px-6 py-20 md:px-[8vw] md:py-[9vw]"
    >
      <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:gap-[clamp(46px,7vw,110px)]">
        <div className="relative max-w-[760px]">
          <div
            aria-hidden
            className="absolute top-6 -right-4 bottom-[-24px] left-6 hidden bg-[#dfe8f4] md:block"
          />
          <a
            href="https://www.youtube.com/watch?v=lf3ljC-M9cQ&t=23s"
            target="_blank"
            rel="noreferrer"
            className="relative block"
          >
            <img
              src={speaking}
              alt="Claudia Harvey speaking on stage at the Business Wealth Summit"
              className="w-full object-cover"
              loading="lazy"
            />
            <span className="eyebrow absolute bottom-4 left-4 bg-blue px-5 py-3 text-white transition-colors hover:bg-deep-blue">
              Watch Claudia speak
            </span>
          </a>
        </div>

        <div>
          <p className="rule-before eyebrow text-blue">
            International keynote speaker
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.1rem,4vw,3.1rem)] leading-[1.12] text-ink">
            Inspire. Believe. Achieve.
          </h2>

          <p className="mt-7 text-[18px] leading-[1.7] text-deep-blue">
            For more than 15 years, Claudia Harvey has spoken internationally to
            audiences ranging from intimate leadership groups to major events of
            up to 10,000 people. Sharing events with notable individuals such as
            Tony Robbins, Mark Victor Hansen, David Chilton, and others, Claudia
            brings a unique perspective to every audience.
          </p>

          <div className="mt-6 space-y-5 text-[15.5px] leading-[1.8] text-ink/80">
            <p>
              As a mother of three, Claudia began her entrepreneurial journey
              after leaving senior executive roles with organizations including
              Citibank and Liberty Health Management. She founded Dig It Apparel
              and successfully struck a deal with Kevin O'Leary of Dragons' Den
              and Shark Tank fame. Claudia grew the brand from her kitchen table
              to more than 7,000 international retail locations and sold the
              business eight years later. She has scaled companies and knows
              what it means to lead through uncertainty and thrive.
            </p>
            <p>
              Her engaging stories of perseverance, focus, pitfalls, and
              successes keep audiences riveted and engaged. Her mission is to
              spread the belief that if you believe, it can happen. Most
              importantly, she leaves every audience with tangible, actionable
              tools they can implement in their own lives and work.
            </p>
            <p>
              Claudia engages C suite executives, franchise organizations,
              technology and startup communities, and women's organizations with
              ideas that are relevant, practical, and grounded in real
              experience. Every keynote is shaped around the audience, the event
              objectives, and the change people need to create next.
            </p>
          </div>

          <a
            href={SPEAK_MAIL}
            className="eyebrow mt-9 inline-block bg-blue px-8 py-5 text-white transition-colors hover:bg-deep-blue"
          >
            Invite Claudia to Speak
          </a>
        </div>
      </div>

      <div className="mt-20 grid gap-12 border-t border-ink/15 pt-14 md:mt-[9vw] md:grid-cols-[0.65fr_1.35fr] md:gap-[clamp(40px,7vw,100px)] md:pt-[6vw]">
        <div>
          <p className="rule-before eyebrow text-blue">Signature themes</p>
          <h3 className="mt-6 font-display text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.18] text-ink">
            Relevant conversations for leaders, teams, and entrepreneurs
            navigating what comes next.
          </h3>
        </div>

        <div className="grid gap-x-14 sm:grid-cols-2">
          {THEMES.map((t) => (
            <article key={t.n} className="border-t border-ink/15 py-8">
              <span className="eyebrow text-[10px] text-blue">{t.n}</span>
              <h4 className="mt-4 font-display text-[1.35rem] leading-tight text-ink">
                {t.title}
              </h4>
              <p className="mt-3 text-[14.5px] leading-[1.75] text-ink/75">
                {t.body}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-14 flex flex-col items-start justify-between gap-6 bg-deep-blue px-8 py-8 text-white md:mt-[5vw] md:flex-row md:items-center md:px-9">
        <p className="font-display text-[clamp(1.15rem,2vw,1.4rem)]">
          Bring Claudia's experience, energy, and practical insight to your next
          event.
        </p>
        <a
          href={SPEAK_MAIL}
          className="group inline-flex items-center gap-3 border-b border-white/40 pb-1 text-[14px] text-white/90 transition-colors hover:border-white hover:text-white"
        >
          Start a speaking conversation
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
