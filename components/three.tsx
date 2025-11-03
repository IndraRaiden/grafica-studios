"use client";

import { useState } from "react";
import ThreeWrapper from "./three-wrapper";

export default function Three() {
  const [selectedClient, setSelectedClient] = useState<string | null>(null);

  const clients = [
    "Häagen-Dazs",
    "Wetzel's Pretzels",
    "Gong Cha",
    "Jamba Juice",
    "Ándale Tacos",
    "ChocoBerry",
    "Cilantro Taco Grill"
  ];

  const allProjects = [
    {
      client: "Häagen-Dazs",
      title: "Häagen-Dazs Flagship Store",
      category: "Premium Ice Cream Retail",
      problem: "Needed a modern, inviting space that reflected the premium brand while maximizing customer flow in a compact mall location.",
      solution: "Created an open-concept design with elegant display cases, strategic lighting, and a color palette that emphasized the brand's luxury positioning.",
      result: "30% increase in foot traffic within the first quarter"
    },
    {
      client: "Gong Cha",
      title: "Gong Cha Expansion",
      category: "Beverage Kiosk",
      problem: "Rapid expansion required consistent branding across multiple mall locations with varying space constraints.",
      solution: "Developed a modular design system that maintained brand identity while adapting to different footprints and mall requirements.",
      result: "Successfully launched 5 locations in 6 months"
    },
    {
      client: "Ándale Tacos",
      title: "Ándale Tacos First Mall Location",
      category: "Fast-Casual Restaurant",
      problem: "Transitioning from a popular food truck to a permanent mall location required a design that captured their authentic, street-food vibe while meeting strict mall regulations.",
      solution: "We designed a vibrant, energetic space using rustic woods, colorful tiles, and neon signage. The layout was optimized for high-volume lunch rushes, ensuring quick service without losing the brand's lively character.",
      result: "Achieved profitability in the first six months, exceeding projections by 20%"
    },
    {
      client: "ChocoBerry",
      title: "ChocoBerry Dessert Kiosk",
      category: "Dessert & Specialty Foods",
      problem: "Needed a visually stunning kiosk that would stand out in a crowded food court and effectively showcase their artisanal chocolate-covered strawberries.",
      solution: "A sleek, modern kiosk was designed with high-end finishes, illuminated displays, and a 'selfie-wall' feature, turning the small space into a social media magnet.",
      result: "50% increase in user-generated content on social media"
    },
    {
      client: "Cilantro Taco Grill",
      title: "Cilantro Taco Grill Rebrand",
      category: "Restaurant Refurbishment",
      problem: "Existing location felt dated and didn't reflect the fresh, modern direction of the brand.",
      solution: "Complete interior refresh with new signage, updated materials, vibrant graphics, and improved customer flow without closing for business.",
      result: "Completed in 3 weeks with zero downtime"
    },
    {
      client: "Wetzel's Pretzels",
      title: "Wetzel's Pretzels Mall Kiosk",
      category: "Quick Service Kiosk",
      problem: "Limited space required creative solutions to maximize efficiency while maintaining brand warmth and approachability.",
      solution: "Designed a compact yet welcoming kiosk with optimized workflow, eye-catching signage, and strategic product display.",
      result: "25% improvement in service speed and customer satisfaction"
    },
    {
      client: "Jamba Juice",
      title: "Jamba Juice Refresh",
      category: "Health & Wellness Retail",
      problem: "Store needed modernization to appeal to health-conscious millennials while maintaining family-friendly atmosphere.",
      solution: "Vibrant color scheme, natural materials, digital menu boards, and Instagram-worthy design elements throughout.",
      result: "40% increase in social media engagement and foot traffic"
    }
  ];

  const filteredProjects = selectedClient
    ? allProjects.filter(project => project.client === selectedClient)
    : allProjects;

  return (
    <div className="bg-zinc-50">
      <section id="portfolio" className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/30 bg-black/10 px-4 py-1.5">
            <div className="h-2 w-2 rounded-full bg-black" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-black">Client Showcase</h2>
          </div>
          <p className="font-display mt-6 text-4xl font-black tracking-tight text-black sm:text-5xl lg:text-6xl">
            Trusted by{" "}
            <span className="text-black">
              Leading Brands
            </span>
            .<br />
            Proven Results Across the Country.
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-600">
            We've worked with national franchises and emerging startups to deliver impactful retail designs. Our clients rely on us for quality, speed, and creative excellence.
          </p>
        </div>

        {/* Client selector buttons */}
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setSelectedClient(null)}
              className={`rounded-2xl border px-6 py-4 text-base font-semibold transition-all ${
                selectedClient === null
                  ? "border-black/50 bg-black/20 text-black shadow-lg shadow-black/20"
                  : "border-zinc-200 bg-zinc-100/30 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-100/50 hover:text-black"
              }`}
            >
              All Projects
            </button>
            {clients.map((client) => (
              <button
                key={client}
                onClick={() => setSelectedClient(client)}
                className={`rounded-2xl border px-6 py-4 text-base font-semibold transition-all ${
                  selectedClient === client
                    ? "border-black/50 bg-black/20 text-black shadow-lg shadow-black/20"
                    : "border-zinc-200 bg-zinc-100/30 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-100/50 hover:text-black"
                }`}
              >
                {client}
              </button>
            ))}
            <button
              className="rounded-2xl border border-zinc-200 bg-zinc-100/30 px-6 py-4 text-base font-semibold text-zinc-500"
            >
              + Many More
            </button>
          </div>
        </div>
      </section>

      <ThreeWrapper projects={filteredProjects} />
    </div>
  );
}
