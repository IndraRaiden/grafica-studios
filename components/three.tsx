"use client";

import { useState } from "react";
import ThreeWrapper from "./three-wrapper";
import { useCopy } from "./locale-provider";
import { theme } from "@/lib/brand";

const { PAPER, MUTED, BLUE, ON_ACCENT } = theme;

type CategoryId = keyof ReturnType<typeof useCopy>["portfolio"]["categories"];

export default function Three() {
  const { portfolio } = useCopy();
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | null>(null);

  const categoryIds = Object.keys(portfolio.categories) as CategoryId[];

  /* The carousel renders a flat project shape; category doubles as the client label. */
  const projects = portfolio.projects
    .filter((p) => !selectedCategory || p.category === selectedCategory)
    .map((p) => ({
      client: portfolio.categories[p.category],
      category: portfolio.categories[p.category],
      title: p.title,
      stat: p.stat,
      statLabel: p.statLabel,
      problem: p.problem,
      solution: p.solution,
      result: p.result,
    }));

  const chipStyle = (isActive: boolean) =>
    isActive
      ? { borderColor: BLUE, backgroundColor: BLUE, color: ON_ACCENT }
      : { borderColor: "rgba(139,146,201,0.25)", backgroundColor: "transparent", color: MUTED };

  return (
    <div style={{ backgroundColor: theme.INK }}>
      <section id="portfolio" className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-0 sm:pt-32 sm:pb-0 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
            style={{ borderColor: "rgba(139,146,201,0.3)", backgroundColor: "rgba(139,146,201,0.08)" }}
          >
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: BLUE }} />
            <span className="text-sm font-bold uppercase tracking-wider" style={{ color: MUTED }}>
              {portfolio.badge}
            </span>
          </div>
          <p className="font-display mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl" style={{ color: PAPER }}>
            {portfolio.headingLead}{" "}
            <span style={{ color: BLUE }}>{portfolio.headingAccent}</span>
            .<br />
            {portfolio.headingTail}
          </p>
          <p className="mt-6 text-lg leading-8" style={{ color: MUTED }}>
            {portfolio.sub}
          </p>
        </div>

        {/* Category filter buttons */}
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className="rounded-full border px-5 py-2.5 text-sm font-semibold transition-all"
              style={chipStyle(selectedCategory === null)}
            >
              {portfolio.filterAll}
            </button>
            {categoryIds.map((id) => (
              <button
                key={id}
                onClick={() => setSelectedCategory(id)}
                className="rounded-full border px-5 py-2.5 text-sm font-semibold transition-all"
                style={chipStyle(selectedCategory === id)}
              >
                {portfolio.categories[id]}
              </button>
            ))}
          </div>
        </div>
      </section>

      <ThreeWrapper projects={projects} />
    </div>
  );
}
