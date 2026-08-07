/* eslint-disable prettier/prettier */
import { CALENDLY } from "./Header";
import Footer from "./Footer";

export default function Closing() {
  return (
    <>
      <section
        className="bg-blue px-6 py-20 text-center text-white md:px-[12vw] md:py-[110px]"
      >
        <p className="rule-before eyebrow text-white/80">
          Your next chapter can begin today
        </p>
        <h2 className="mx-auto mt-7 max-w-[820px] font-display text-[clamp(2.1rem,4.4vw,3.3rem)] leading-[1.14]">
          Are you on the verge of something extraordinary?
        </h2>
        <p className="mx-auto mt-6 max-w-[560px] text-[16px] leading-[1.75] text-white/85">
          Let's talk about where you are, where you want to go, and the path
          that will take you there.
        </p>
        <a
          href={CALENDLY}
          target="_blank"
          rel="noreferrer"
          className="eyebrow mt-10 inline-block border border-white/70 px-9 py-5 text-white transition-colors hover:bg-white hover:text-blue"
        >
          Book Your Complimentary Conversation
        </a>
      </section>

      <Footer />
    </>
  );
}
