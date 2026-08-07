/* eslint-disable prettier/prettier */
export default function Insights() {
  return (
    <main className="bg-background px-6 py-20 md:px-[8vw] md:py-[10vw]">
      <section className="mx-auto max-w-[1600px]">
        <div className="grid gap-12 lg:grid-cols-[420px_1fr] lg:items-start">
          <div className="flex justify-center lg:justify-start">
            <div className="w-[520px] shadow-[0_30px_80px_-45px_rgba(23,63,120,0.20)] bg-white">
              <img
                src="/claudia-chair.jpg"
                alt="Claudia Harvey"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-[13px] tracking-[0.25em] text-blue/80">A PRACTICAL RESOURCE FOR MEANINGFUL PROGRESS</p>
            <h1 className="mt-6 font-display text-[clamp(2.4rem,4.6vw,3.8rem)] leading-[1.02] text-ink">
              Let's Define Success Together Before You Set the Direction
            </h1>

            <div className="mt-6 text-[16px] leading-[1.85] text-ink/80">
              <p>
                Individuals, teams, and organizations often work toward goals without first establishing what "success" truly means. When success is not clearly defined, priorities compete, resources become scattered, and progress can be difficult to measure.
              </p>
              <p className="mt-4">
                Clarity begins by identifying the values, outcomes, and metrics that matter most. What does success look like? How will it be measured? Who is involved in the decisions and outcome? Which goals will create the greatest impact?
              </p>
              <p className="mt-4">
                Once those questions are flushed out and answers are clear, goals can be prioritized, decisions become more focused, and a practical roadmap can be created. This shared definition of success provides the foundation for purposeful action, meaningful accountability, and measurable progress.
              </p>
            </div>

            <p className="mt-6 text-sm text-blue/80 tracking-[0.18em]">REFLECT. REFOCUS. MOVE FORWARD.</p>

            <div className="mt-8">
              <div className="grid grid-cols-[220px_1fr] gap-6 items-center bg-white p-8 shadow-[0_30px_60px_-10px_rgba(23,63,120,0.12)] border border-ink/10">
                <div className="bg-[#f6f8fb] p-6 flex items-center justify-center">
                  <img src="/five-strategies-book.png" alt="Resource cover" className="max-h-[260px] w-auto object-contain" />
                </div>
                <div>
                  <h3 className="font-display text-[20px] text-ink">5 Strategies to Lead an Unstoppable Life</h3>
                  <p className="mt-3 text-[14px] text-ink/75">This complimentary guide is designed to help you reflect on what matters, challenge thinking that may be holding you back, and take more intentional action toward your goals.</p>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="w-36 h-36 bg-white border p-2 flex items-center justify-center">
                      <img src="/five-strategies-qr.jpeg" alt="QR code" className="w-full h-full object-contain" />
                    </div>
                    <div className="text-sm text-ink/80">Scan to download or <a href="/" className="text-blue underline">learn more</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
