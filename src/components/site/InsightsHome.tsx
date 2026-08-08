export default function InsightsHome() {
  return (
    <section id="insights" className="px-6 py-20 bg-slate-50 md:px-[8vw] md:py-[120px]">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-[7vw]">
          <div>
            <p className="rule-before eyebrow text-blue">Insights</p>
            <h2 className="mt-6 font-display text-[clamp(2.1rem,4vw,3.1rem)] leading-[1.12] text-ink">
              Define success before you set direction.
            </h2>
            <p className="mt-8 max-w-[560px] text-[16px] leading-[1.85] text-ink/80">
              Leaders and teams often act without a shared definition of success.
              When outcomes are aligned, decisions become clearer, priorities stay
              focused, and the path forward becomes more measurable.
            </p>
          </div>

          <div className="rounded-[2rem] bg-slate-50 p-8 shadow-[0_30px_80px_-45px_rgba(23,63,120,0.16)]">
            <p className="text-[11px] tracking-[0.18em] text-blue">A PRACTICAL RESOURCE</p>
            <h3 className="mt-4 font-display text-[1.75rem] leading-tight text-ink">
              Clarity creates focus, focus creates momentum.
            </h3>
            <p className="mt-5 text-[15px] leading-[1.75] text-ink/80">
              We help you identify what matters, align expectations, and move
              with confidence toward the results that matter most.
            </p>
            <div className="mt-8 grid gap-6 rounded-[1.5rem] bg-white p-6 shadow-[0_20px_40px_-20px_rgba(15,23,42,0.12)]">
              <div>
                <p className="text-[11px] tracking-[0.18em] text-blue">WHAT YOU GET</p>
                <p className="mt-3 text-[15px] leading-[1.75] text-ink/80">
                  A more meaningful definition of success, clearer priorities, and
                  a practical framework for what comes next.
                </p>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.18em] text-blue">HOW IT HELPS</p>
                <ul className="mt-3 space-y-3 text-[15px] leading-[1.75] text-ink/80">
                  <li>Reduce competing priorities</li>
                  <li>Create measurable progress</li>
                  <li>Bring teams into alignment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
