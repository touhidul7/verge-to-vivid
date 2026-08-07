/* eslint-disable prettier/prettier */
import logo from "/public/logo.png";
const LINKEDIN = "https://www.linkedin.com/in/claudiaharvey/";
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
        <div className="flex items-center gap-4">
          <img
            src={logo}
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
    </>
  );
}
