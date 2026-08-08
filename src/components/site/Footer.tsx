const LINKEDIN = "https://www.linkedin.com/in/claudiaharvey/";

export default function Footer() {
  return (
    <footer className="grid gap-8 bg-night px-6 py-11 text-[10px] tracking-[0.05em] text-white/65 md:grid-cols-[auto_1fr_1fr_1fr] md:px-[6vw]">
      <div className="flex items-center gap-4">
        <img
          src="/logo.png"
          alt="On The Verge Transformational Consulting"
          className="h-16 w-auto bg-white p-2"
          loading="lazy"
        />
      </div>

      <div>
        <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-white">
          Explore
        </p>
        <ul className="space-y-3 text-[13px]">
          <li>
            <a href="/#about" className="transition-colors hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="/#services" className="transition-colors hover:text-white">
              Services
            </a>
          </li>
          <li>
            <a href="/#speaking" className="transition-colors hover:text-white">
              Speaking
            </a>
          </li>
          <li>
            <a href="/insights" className="transition-colors hover:text-white">
              Insights
            </a>
          </li>
        </ul>
      </div>

      <div>
        <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-white">
          Connect
        </p>
        <ul className="space-y-3 text-[13px]">
          <li>
            <a href="/contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </li>
          <li>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="inline-flex  items-start gap-2 transition-colors hover:text-white"
            >
              <span>LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5v15H0v-15zM9 8.98h4.78v2.05h.07c.66-1.25 2.28-2.57 4.7-2.57C23.8 8.46 24 11.06 24 14.16V23.98h-5v-8.1c0-1.93-.03-4.41-2.69-4.41-2.69 0-3.1 2.1-3.1 4.27v8.24H9v-15z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div className="md:text-right">
        <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-white">
          Legal
        </p>
        <p className="text-[13px] text-white/80">
          © 2026 On The Verge Transformations Consulting Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
