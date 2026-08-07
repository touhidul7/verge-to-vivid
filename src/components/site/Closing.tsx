import logo from "@/assets/otv-logo.png.asset.json";
import { CALENDLY } from "./Header";

export default function Closing() {
  return (
    <>
      <section
        id="insights"
        className="bg-mist px-6 py-20 text-center md:px-[16vw] md:py-[110px]"
      >
        <p className="font-display text-4xl leading-none text-grey">“</p>
        <blockquote className="mt-8 font-display text-[clamp(1.8rem,3.6vw,2.9rem)] leading-[1.24] text-ink">
          The most powerful transformations begin the moment you decide that
          where you are is no longer where you are meant to stay.
        </blockquote>
        <p className="eyebrow mt-8 text-[10px] text-blue">Claudia Harvey</p>
      </section>

      <section
        id="contact"
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

      <footer className="grid items-center gap-6 bg-night px-6 py-11 text-[10px] tracking-[0.05em] text-white/65 md:grid-cols-2 md:px-[6vw]">
        <div>
          <img
            src={logo.url}
            alt="On The Verge Transformational Consulting"
            className="h-16 w-auto bg-white p-2"
            loading="lazy"
          />
        </div>
        <p className="md:text-right">
          © 2026 On The Verge Transformation Consulting Inc.
        </p>
      </footer>
    </>
  );
}
