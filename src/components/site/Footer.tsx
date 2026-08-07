const LINKEDIN = "https://www.linkedin.com/in/claudiaharvey/";

export default function Footer() {
  return (
    <footer className="grid items-center gap-6 bg-night px-6 py-11 text-[10px] tracking-[0.05em] text-white/65 md:grid-cols-2 md:px-[6vw]">
      <div className="flex items-center gap-4">
        <img
          src="/logo.png"
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
  );
}
