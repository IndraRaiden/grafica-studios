"use client";

import { useState } from "react";
import ThreeWrapper from "./three-wrapper";

export default function Three() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["Lead Management", "Support & Triage", "Tracking & Logistics", "Custom AI"];

  const allProjects = [
    {
      client: "Lead Management",
      title: "LeadFlow — AI Leads Manager",
      category: "Lead Management",
      problem: "Sales teams were manually sorting through hundreds of unqualified leads, wasting hours each week on cold contacts while hot prospects went stale.",
      solution: "We built LeadFlow — an AI CRM that scores every incoming lead, auto-assigns follow-up tasks, and surfaces the top 10% most likely to convert in a dedicated priority queue.",
      result: "3x increase in qualified conversions within the first 60 days of deployment"
    },
    {
      client: "Support & Triage",
      title: "TriageAI — Ticket Triage System",
      category: "Support & Triage",
      problem: "A high-volume support team was spending 40% of their time just reading and routing tickets — leaving complex issues stuck behind a wall of simple requests.",
      solution: "TriageAI reads every incoming ticket, classifies it by type and urgency, auto-responds to common issues, and routes edge cases to the right specialist — all in under 2 seconds.",
      result: "68% reduction in average ticket resolution time"
    },
    {
      client: "Tracking & Logistics",
      title: "TrackSense — Vehicle & Order Tracking",
      category: "Tracking & Logistics",
      problem: "A logistics company had no real-time visibility into fleet position or order status, resulting in customer complaints and costly delays that couldn't be diagnosed until after delivery.",
      solution: "TrackSense provides live GPS tracking, AI-predicted ETAs, geofence alerts, and a customer-facing status portal — all connected through a single API.",
      result: "91% on-time delivery rate, up from 74%"
    },
    {
      client: "Custom AI",
      title: "ContractLens — AI Document Analyzer",
      category: "Custom AI",
      problem: "A legal-services firm was spending days manually reviewing vendor contracts for liability clauses, missing critical terms under time pressure.",
      solution: "ContractLens uses an LLM fine-tuned on contract language to extract, flag, and summarize risk clauses in seconds — with a confidence score and plain-English explanation for each finding.",
      result: "Contract review time cut from 4 hours to under 8 minutes"
    },
    {
      client: "Lead Management",
      title: "OutboundAI — Automated Outreach",
      category: "Lead Management",
      problem: "A B2B sales team was burning rep bandwidth on cold outreach sequences that were generic, poorly timed, and getting ignored.",
      solution: "OutboundAI personalizes each outreach message using company data and LinkedIn signals, schedules sends at optimal times, and pauses sequences the moment a lead engages.",
      result: "44% open rate and 18% reply rate — up from 9% and 3%"
    },
    {
      client: "Support & Triage",
      title: "ReplyDraft — AI Support Copilot",
      category: "Support & Triage",
      problem: "Junior support agents were slow to respond and inconsistent in tone, requiring senior review on most tickets before sending.",
      solution: "ReplyDraft sits inside the support inbox and generates a ready-to-send draft response for every ticket — pulling from the knowledge base and past resolved cases. Agents review and send in one click.",
      result: "First-response time dropped from 6 hours to 22 minutes"
    }
  ];

  const filteredProjects = selectedCategory
    ? allProjects.filter(project => project.client === selectedCategory)
    : allProjects;

  return (
    <div className="bg-zinc-50">
      <section id="portfolio" className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-0 sm:pt-32 sm:pb-0 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/30 bg-black/10 px-4 py-1.5">
            <div className="h-2 w-2 rounded-full bg-black" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-black">Product Showcase</h2>
          </div>
          <p className="font-display mt-6 text-4xl font-black tracking-tight text-black sm:text-5xl lg:text-6xl">
            Real Products.{" "}
            <span className="text-black">
              Real Results
            </span>
            .<br />
            Powered by AI.
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Every product we ship solves a real operational problem. Here's a look at what we've built and the impact it's had.
          </p>
        </div>

        {/* Category filter buttons */}
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`rounded-2xl border px-6 py-4 text-base font-semibold transition-all ${
                selectedCategory === null
                  ? "border-black/50 bg-black/20 text-black shadow-lg shadow-black/20"
                  : "border-zinc-200 bg-zinc-100/30 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-100/50 hover:text-black"
              }`}
            >
              All Products
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-2xl border px-6 py-4 text-base font-semibold transition-all ${
                  selectedCategory === cat
                    ? "border-black/50 bg-black/20 text-black shadow-lg shadow-black/20"
                    : "border-zinc-200 bg-zinc-100/30 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-100/50 hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <ThreeWrapper projects={filteredProjects} />
    </div>
  );
}
