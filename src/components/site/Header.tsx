import logo from "@/assets/otv-logo.png.asset.json";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "AI Solutions", href: "#services" },
  { label: "Speaking", href: "#speaking" },
  { label: "Insights", href: "#insights" },
];

export const CALENDLY = "https://calendly.com/charvey-claudiaharvey/30min-1";
export const SPEAK_MAIL =
  "mailto:charvey@claudiaharvey.com?subject=Speaking%20Inquiry";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-3 md:grid-cols-[auto_1fr_auto] md:px-[6vw]">
        <a href="#top" className="flex min-w-0 items-center">
          <img
            src={logo.url}
            alt="On The Verge Transformational Consulting"
            className="h-12 w-auto shrink-0 md:h-14"
          />
        </a>

        <nav className="hidden items-center justify-center gap-9 md:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[15px] text-ink/85 transition-colors hover:text-blue"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={CALENDLY}
          target="_blank"
          rel="noreferrer"
          className="eyebrow shrink-0 border border-ink/70 px-5 py-3 text-ink transition-colors hover:bg-ink hover:text-background md:px-7"
        >
          Let's Talk
        </a>
      </div>
    </header>
  );
}
