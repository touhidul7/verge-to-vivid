import { CALENDLY } from "./Header";

export default function AiSolutions() {
  return (
    <section id="ai-solutions" className=" px-6 py-20 md:px-[8vw] md:py-[120px]">
      <div className="mx-auto grid max-w-[1400px] gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-[7vw]">
        <div>
          <p className="rule-before eyebrow text-blue">AI Solutions</p>
          <h2 className="mt-6 font-display text-[clamp(2.1rem,4vw,3.1rem)] leading-[1.12] text-ink">
            Human leadership and intelligent systems working together.
          </h2>
          <p className="mt-8 max-w-[560px] text-[16px] leading-[1.85] text-ink/80">
            On The Verge and The Native AI Group bring strategy, human judgment,
            and practical AI execution into one coordinated approach. The result is
            modern business transformation that scales without losing the
            leadership and people that make your company unique.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-ink/10 bg-white p-7 shadow-[0_20px_50px_-25px_rgba(15,23,42,0.18)]">
              <p className="text-[11px] tracking-[0.18em] text-blue">STRATEGIC FOCUS</p>
              <p className="mt-4 text-[15px] leading-[1.75] text-ink/80">
                Align AI with the business priorities that matter most, not the
                latest shiny technology.
              </p>
            </div>
            <div className="rounded-3xl border border-ink/10 bg-white p-7 shadow-[0_20px_50px_-25px_rgba(15,23,42,0.18)]">
              <p className="text-[11px] tracking-[0.18em] text-blue">OPERATING CAPABILITY</p>
              <p className="mt-4 text-[15px] leading-[1.75] text-ink/80">
                Build practical systems, automation, and execution plans that
                deliver measurable, sustainable value.
              </p>
            </div>
          </div>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noreferrer"
            className="eyebrow mt-10 inline-flex items-center justify-center rounded-full bg-blue px-10 py-4 text-white transition-colors hover:bg-deep-blue"
          >
            Explore the Opportunity
          </a>
        </div>

        <div className="rounded-[2rem] bg-[#f5f9ff] p-8 shadow-[0_30px_80px_-45px_rgba(23,63,120,0.16)]">
          <div className="grid gap-8">
            <div className="space-y-4 rounded-[1.5rem] bg-white p-8 shadow-[0_20px_50px_-25px_rgba(15,23,42,0.12)]">
              <p className="text-[11px] tracking-[0.2em] text-blue">COLLABORATION</p>
              <h3 className="font-display text-[1.5rem] leading-tight text-ink">
                A practical path to scalable growth
              </h3>
              <p className="text-[15px] leading-[1.75] text-ink/80">
                We help established businesses modernize and grow by connecting
                leadership, operations, and AI execution in a single transformation journey.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-blue px-7 py-8 text-white">
              <p className="text-[11px] tracking-[0.2em] text-white/80">WHY IT WORKS</p>
              <ul className="mt-6 space-y-4 text-[15px] leading-[1.8]">
                <li>Clear business outcomes before technology choices</li>
                <li>Human judgment stays central to every decision</li>
                <li>AI is deployed where it creates measurable progress</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
