import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import Insights from "@/components/site/Insights";
import Footer from "@/components/site/Footer";

const TITLE = "Insights | On The Verge Transformation Consulting";
const DESCRIPTION =
  "Insights from Claudia Harvey on transformation, leadership, and what comes next.";

export const Route = createFileRoute("/insights")({
  component: InsightsRoute,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/insights" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
});

function InsightsRoute() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Insights />
      <Footer />
    </div>
  );
}
