"use client";

import { useState } from "react";
import ThreeWrapper from "./three-wrapper";

export default function Three() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["Lead Management", "Support & Triage", "Tracking & Logistics", "Custom AI", "Chatbots"];

  const allProjects = [
    {
      client: "Lead Management",
      title: "LeadFlow — AI Leads Manager",
      category: "Lead Management",
      stat: "3×",
      statLabel: "more conversions",
      problem: "Sales teams were manually sorting through hundreds of unqualified leads, wasting hours each week on cold contacts while hot prospects went stale.",
      solution: "An AI CRM that scores every incoming lead, auto-assigns follow-up tasks, and surfaces the top 10% most likely to convert in a dedicated priority queue.",
      result: "3× increase in qualified conversions within the first 60 days of deployment"
    },
    {
      client: "Support & Triage",
      title: "TriageAI — Ticket Triage System",
      category: "Support & Triage",
      stat: "68%",
      statLabel: "faster resolution",
      problem: "A high-volume support team was spending 40% of their time just reading and routing tickets — leaving complex issues stuck behind simple requests.",
      solution: "TriageAI reads every incoming ticket, classifies it by type and urgency, auto-responds to common issues, and routes edge cases to the right specialist in under 2 seconds.",
      result: "68% reduction in average ticket resolution time"
    },
    {
      client: "Tracking & Logistics",
      title: "TrackSense — Vehicle & Order Tracking",
      category: "Tracking & Logistics",
      stat: "91%",
      statLabel: "on-time delivery",
      problem: "A logistics company had no real-time visibility into fleet position or order status, resulting in customer complaints and costly delays that couldn't be diagnosed until after delivery.",
      solution: "Live GPS tracking, AI-predicted ETAs, geofence alerts, and a customer-facing status portal — all connected through a single API.",
      result: "91% on-time delivery rate, up from 74%"
    },
    {
      client: "Custom AI",
      title: "ContractLens — AI Document Analyzer",
      category: "Custom AI",
      stat: "30×",
      statLabel: "faster review",
      problem: "A legal-services firm was spending days manually reviewing vendor contracts for liability clauses, missing critical terms under time pressure.",
      solution: "An LLM fine-tuned on contract language that extracts, flags, and summarizes risk clauses in seconds — with a confidence score and plain-English explanation for each finding.",
      result: "Contract review time cut from 4 hours to under 8 minutes"
    },
    {
      client: "Lead Management",
      title: "OutboundAI — Automated Outreach",
      category: "Lead Management",
      stat: "44%",
      statLabel: "open rate",
      problem: "A B2B sales team was burning rep bandwidth on cold outreach sequences that were generic, poorly timed, and getting ignored.",
      solution: "OutboundAI personalizes each outreach message using company data and LinkedIn signals, schedules sends at optimal times, and pauses sequences the moment a lead engages.",
      result: "44% open rate and 18% reply rate — up from 9% and 3%"
    },
    {
      client: "Chatbots",
      title: "NexBot — AI Customer Chatbot",
      category: "Chatbots",
      stat: "80%",
      statLabel: "resolved without human",
      problem: "An e-commerce brand was handling thousands of repetitive support messages daily — order status, returns, sizing questions — burning through headcount with zero leverage.",
      solution: "NexBot was trained on their product catalog, order data, and return policy. Embedded in their web app, it resolves common requests instantly and escalates edge cases with full context attached.",
      result: "80% of support queries resolved autonomously, saving 1,200+ agent-hours per month"
    },
    {
      client: "Support & Triage",
      title: "ReplyDraft — AI Support Copilot",
      category: "Support & Triage",
      stat: "22 min",
      statLabel: "avg first response",
      problem: "Junior support agents were slow to respond and inconsistent in tone, requiring senior review on most tickets before sending.",
      solution: "ReplyDraft sits inside the support inbox and generates a ready-to-send draft for every ticket — pulling from the knowledge base and past resolved cases. Agents review and send in one click.",
      result: "First-response time dropped from 6 hours to 22 minutes"
    }
  ];

  const filteredProjects = selectedCategory
    ? allProjects.filter(project => project.client === selectedCategory)
    : allProjects;

  return (
    <div style={{ backgroundColor: "#000000" }}>
      <section id="portfolio" className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-0 sm:pt-32 sm:pb-0 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5" style={{ borderColor: "rgba(139,146,201,0.3)", backgroundColor: "rgba(139,146,201,0.08)" }}>
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "#8B5CF6" }} />
            <span className="text-sm font-bold uppercase tracking-wider" style={{ color: "#8B92C9" }}>Product Showcase</span>
          </div>
          <p className="font-display mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl" style={{ color: "#EEF0FF" }}>
            Real Products.{" "}
            <span style={{ color: "#8B5CF6" }}>Real Results</span>
            .<br />
            Powered by AI.
          </p>
          <p className="mt-6 text-lg leading-8" style={{ color: "#8B92C9" }}>
            Every product we ship solves a real operational problem. Here's a look at what we've built and the impact it's had.
          </p>
        </div>

        {/* Category filter buttons */}
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className="rounded-full border px-5 py-2.5 text-sm font-semibold transition-all"
              style={
                selectedCategory === null
                  ? { borderColor: "#8B5CF6", backgroundColor: "#8B5CF6", color: "#0A0E27" }
                  : { borderColor: "rgba(139,146,201,0.25)", backgroundColor: "transparent", color: "#8B92C9" }
              }
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="rounded-full border px-5 py-2.5 text-sm font-semibold transition-all"
                style={
                  selectedCategory === cat
                    ? { borderColor: "#8B5CF6", backgroundColor: "#8B5CF6", color: "#0A0E27" }
                    : { borderColor: "rgba(139,146,201,0.25)", backgroundColor: "transparent", color: "#8B92C9" }
                }
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
