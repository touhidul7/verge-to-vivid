import { createFileRoute } from "@tanstack/react-router";

import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import Speaking from "@/components/site/Speaking";
import Closing from "@/components/site/Closing";

const TITLE = "On The Verge Transformation Consulting | Claudia Harvey";
const DESCRIPTION =
  "Strategic advisory for executives and organizations: clarity for what comes next, strategy for how to get there, accountability to make it happen.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "On The Verge Transformation Consulting",
          description: DESCRIPTION,
          founder: { "@type": "Person", name: "Claudia Harvey" },
          email: "charvey@claudiaharvey.com",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Speaking />
        <Closing />
      </main>
    </div>
  );
}
