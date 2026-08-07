/* eslint-disable prettier/prettier */
const STEPS = [
  { n: "01", label: "Find clarity" },
  { n: "02", label: "Define the goal" },
  { n: "03", label: "Create the HOW" },
  { n: "04", label: "Deliver results" },
];

export default function About() {
  return (
    <section
      id="about"
      className="grid gap-14 px-6 py-24 md:grid-cols-[0.9fr_1.1fr] md:gap-[7vw] md:px-[10vw] md:py-[120px]"
    >
      <div>
        <p className="rule-before eyebrow text-blue">About On The Verge</p>
        <h2 className="mt-6 font-display text-[clamp(2.1rem,4vw,3.1rem)] leading-[1.12] text-ink">
          Clarity creates direction.
          <br />
          Strategy creates momentum.
        </h2>
      </div>

      <div>
        <p className="font-display text-[clamp(1.35rem,2.2vw,1.75rem)] leading-[1.4] text-ink">
          On The Verge Transformation Consulting is a strategic advisory partner for executives, C
          suite leaders, organizations, and enterprise customers navigating growth, change, and
          complex business decisions.
        </p>

        <div className="mt-8 space-y-6 text-[15.5px] leading-[1.8] text-ink/80">
          <p>
            We bring decades of executive leadership, entrepreneurial, operational, sales, and
            transformation experience to the table. Our role is to help leaders step back from the
            noise, see the bigger picture, define what success truly looks like, and make confident
            decisions about what comes next.
          </p>
          <p>
            Goals alone are not enough. The most important question is how. We work alongside
            leadership teams to turn vision into a clear, practical roadmap. By strategically
            reverse engineering the path from the desired result, we identify the priorities,
            decisions, resources, and actions required to move forward with purpose.
          </p>
          <p>
            The result is more than a plan. It is an achievable path that connects strategy to
            execution, creates accountability at every stage, and builds the conditions for
            measurable, sustainable results.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-6 border-t border-ink/15 py-9 sm:grid-cols-2">
          {STEPS.map((step) => (
            <div key={step.n} className="flex items-baseline gap-4">
              <span className="text-[11px] tracking-[0.12em] text-blue">{step.n}</span>
              <span className="font-display text-lg text-ink">{step.label}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-ink/15 pt-9 text-center">
          <p className="text-[17px] leading-[1.7] text-ink">
            <span className="text-blue">Our Core Promise:</span> “At On The
            Verge, we bring clarity to what comes next, create the strategy to get you there, and
            provide the accountability to make it happen.”
          </p>
          <p className="mt-3 font-script text-[42px] leading-none text-blue">Claudia Harvey</p>
        </div>
      </div>
    </section>
  );
}
