import { CALENDLY } from "./Header";

const STATS = [
  { value: "25+", label: "Years leading growth and transformation" },
  { value: "$250M+", label: "Sales portfolios managed" },
  { value: "7,000+", label: "Retail locations reached" },
  { value: "10 to 10,000", label: "Audience sizes inspired" },
];

export default function Hero() {
  return (
    <>
      <section
        id="top"
        className="relative grid min-h-[min(880px,calc(100vh-92px))] items-center gap-[50px] overflow-hidden px-6 pt-16 pb-20 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.85fr)] md:gap-[6vw] md:px-[8vw] md:pt-[8vh] md:pb-[7vh]"
      >
        {/* decorative arc */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-52 hidden h-[640px] w-[640px] rounded-full bg-linear-to-b from-mist to-[#dbe8f8] md:block"
        />

        <div className="relative z-2 max-w-[750px] self-center">
          <p className="rule-before eyebrow text-blue">
            For leaders and organizations ready for what is next
          </p>

          <h1 className="mt-7 font-display text-[clamp(2.3rem,5vw,5rem)] leading-[1.06] tracking-[-0.01em] text-ink">
            Guiding Change.
            <br />
            Driving Growth.
            <br />
            <em className="text-blue not-italic">Achieving Results.</em>
          </h1>

          <p className="mt-8 max-w-[560px] text-[17px] leading-[1.75] text-ink/80">
            Transformation begins with clarity about what comes next, the
            courage to move forward, the right strategy for how to get there,
            and the accountability to make it happen.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noreferrer"
              className="eyebrow bg-blue px-8 py-5 text-white transition-colors hover:bg-deep-blue"
            >
              Book a Complimentary Conversation
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-3 border-b border-ink/30 pb-1 text-[15px] text-ink transition-colors hover:border-blue hover:text-blue"
            >
              Explore how I can help
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        <div className="relative z-2 self-center">
          <div
            aria-hidden
            className="absolute top-8 -right-2 bottom-[-28px] left-8 hidden bg-[#dfe8f4] md:block"
          />
          <div className="relative overflow-visible border border-ink/10 bg-white shadow-[0_30px_70px_-40px_rgba(23,63,120,0.55)]">
            <img
              src="/team-collaboration.png"
              alt="Team collaboration"
              className="relative w-full object-cover"
              loading="eager"
            />
            <div className="relative -mt-14 ml-0 w-fit max-w-[85%] bg-white px-7 py-5 md:-ml-8">
              <p
                className="font-display text-lg text-ink inline-block"
                // style={{ transform: "rotate(-6deg)", transformOrigin: "left bottom" }}
              >
                Claudia Harvey
              </p>
              <p className="eyebrow mt-1 text-[10px] text-blue">
                Founder. Strategist. Speaker. Changemaker.
              </p>
            </div>
          </div>
        </div>

        <span
          aria-hidden
          className="eyebrow absolute top-1/2 right-2 hidden -translate-y-1/2 text-[9px] text-blue/70 [writing-mode:vertical-rl] xl:block"
        >
          Strength • Balance • Harmony
        </span>
      </section>

      <section className="grid gap-10 bg-deep-blue px-6 py-14 text-white sm:grid-cols-2 md:grid-cols-4 md:gap-0 md:px-[8vw]">
        {STATS.map((stat, i) => (
          <div
            key={stat.value}
            className={
              i === 0
                ? "md:pr-8"
                : "md:border-l md:border-white/20 md:pl-8 md:pr-8"
            }
          >
            <p className="font-display text-[34px] leading-none">
              {stat.value}
            </p>
            <p className="mt-3 text-[13px] text-white/75">{stat.label}</p>
          </div>
        ))}
      </section>
    </>
  );
}
