const SERVICES = [
  {
    n: "01",
    title: "Executive Consulting",
    body: "A focused, personal engagement for leaders ready to gain clarity, strengthen decisions, and move confidently into what comes next.",
  },
  {
    n: "02",
    title: "Corporate Transformation",
    body: "Practical strategy for organizations navigating growth, change, operational complexity, leadership transitions, or AI adoption.",
  },
  {
    n: "03",
    title: "Retreats and VIP Experiences",
    body: "Immersive experiences that create the space, structure, and momentum needed for meaningful personal and professional change.",
  },
  {
    n: "04",
    title: "Speaking",
    body: "Engaging keynotes grounded in lived experience, business insight, and the courage required to lead through change.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="grid gap-14 bg-ink px-6 py-20 text-white md:grid-cols-[0.78fr_1.22fr] md:gap-[8vw] md:px-[8vw] md:py-[120px]"
    >
      <div>
        <p className="rule-before eyebrow text-white/70">
          Ways to work together
        </p>
        <h2 className="mt-6 font-display text-[clamp(2.1rem,4vw,3.1rem)] leading-[1.14]">
          Transformation shaped around where you are and where you want to go.
        </h2>
        <p className="mt-7 max-w-[380px] text-[15.5px] leading-[1.75] text-white/70">
          Every engagement is thoughtful, practical, and built to create
          sustainable change.
        </p>
      </div>

      <div className="border-t border-white/15">
        {SERVICES.map((s) => (
          <article
            key={s.n}
            className="group grid grid-cols-[auto_minmax(0,1fr)] gap-6 border-b border-white/15 py-9 md:gap-12"
          >
            <span className="text-[11px] tracking-[0.12em] text-blue">
              {s.n}
            </span>
            <div>
              <div className="flex items-start justify-between gap-6">
                <h3 className="font-display text-[clamp(1.35rem,2.2vw,1.75rem)] leading-tight">
                  {s.title}
                </h3>
                <span className="mt-1 shrink-0 text-blue transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>
              <p className="mt-3 max-w-[560px] text-[15px] leading-[1.75] text-white/70">
                {s.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
