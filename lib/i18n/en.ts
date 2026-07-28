import type { Brand } from "@/lib/brand";
import type { Dictionary } from "./types";

export const en = (brand: Brand): Dictionary => ({
  meta: {
    title: `${brand.name} — AI-Powered Web Apps for Modern Business`,
    description: `${brand.name} builds AI-powered web applications — from lead management and ticket triage to vehicle tracking — engineered to automate and scale your operations.`,
    localeSwitchLabel: "Switch language",
  },

  nav: {
    links: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      process: "Process",
      contact: "Contact",
    },
    cta: "Get in Touch",
    callAria: "Call us",
    callUs: "Call us",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  hero: {
    eyebrow: "AI software studio",
    headingLead: "AI software.",
    headingAccent: "Built to scale",
    headingTail: "your business.",
    sub: `${brand.name} builds AI-powered web apps that automate the work slowing you down — from lead capture and ticket triage to real-time tracking. Ready-to-deploy, built for results.`,
    ctaPrimary: "See Our Products",
    ctaSecondary: "Get in Touch",
    scroll: "Scroll",
    phaseDeveloping: "developing",
    phaseFocus: "in focus",
  },

  services: {
    eyebrow: "Our products",
    headingLead: "AI does the work.",
    headingAccent: "You focus on growth.",
    cta: "Get Early Access",
    cards: {
      leads: {
        title: "Leads Manager & CRM",
        description:
          "Capture, score, and auto-assign leads. Your team only sees the ones that matter.",
        stat: "3×",
        statLabel: "more conversions",
      },
      triage: {
        title: "Ticket Triage AI",
        description: "Routes, prioritizes, and auto-responds in under 2 seconds.",
        stat: "68%",
        statLabel: "faster resolution",
      },
      tracking: {
        title: "Tracking AI System",
        description: "Live GPS, predictive ETAs, and anomaly alerts for vehicles or orders.",
        stat: "91%",
        statLabel: "on-time delivery",
      },
      custom: {
        title: "Custom AI Apps",
        description:
          "Bespoke AI built around your data and workflows. Prototype to production fast.",
        badgeLines: ["Weeks,", "not months"],
      },
      chatbots: {
        title: "AI Chatbots",
        description:
          "Custom-trained chatbots that handle support, sales, and onboarding — embedded in your web app or site. Available 24/7, no handoff needed for common requests.",
        stat: "80%",
        statLabel: "queries resolved without human",
      },
      integration: {
        title: "AI Integration",
        description:
          "Plug AI directly into your existing CRM, ERP, or support stack — no rip-and-replace.",
      },
    },
    mockups: {
      chatStatus: "assistant • online",
      chat: [
        { role: "user" as const, text: "What's my order status?" },
        {
          role: "ai" as const,
          text: "Order #4821 is out for delivery — estimated arrival today between 2–4 PM.",
        },
        { role: "user" as const, text: "Can I reschedule?" },
        { role: "ai" as const, text: "Sure! Pick a new date and I'll update it now." },
      ],
      leadsStatus: "live pipeline",
      leads: [
        { name: "Acme Corp", score: 94, status: "hot" as const },
        { name: "Dunder Mifflin", score: 81, status: "warm" as const },
        { name: "Initech", score: 73, status: "warm" as const },
        { name: "Globex Inc", score: 58, status: "cold" as const },
      ],
      leadStatus: { hot: "Hot", warm: "Warm", cold: "Cold" },
      ticketStatus: "ai triage — 2s avg",
      tickets: [
        { id: "#1042", label: "Billing Error", priority: "P1", routed: "Finance" },
        { id: "#1043", label: "Login Issue", priority: "P2", routed: "Auth" },
        { id: "#1044", label: "Feature Request", priority: "P3", routed: "Product" },
      ],
      trackingStatus: "4 assets • live",
      codeFile: "model.py",
      codeAccuracy: "✓ 98.2% accuracy on test set",
      integrations: ["Salesforce", "HubSpot", "Zendesk", "Custom API"],
      connected: "connected",
    },
  },

  portfolio: {
    badge: "Product Showcase",
    headingLead: "Real Products.",
    headingAccent: "Real Results",
    headingTail: "Powered by AI.",
    sub: "Every product we ship solves a real operational problem. Here's a look at what we've built and the impact it's had.",
    filterAll: "All",
    categories: {
      leads: "Lead Management",
      support: "Support & Triage",
      logistics: "Tracking & Logistics",
      custom: "Custom AI",
      chatbots: "Chatbots",
    },
    carousel: {
      eyebrow: "Case studies",
      headingLead: "Work that holds up",
      headingAccent: "in production.",
      label: "Case studies carousel",
      next: "Next case study",
      previous: "Previous case study",
      drag: "Drag",
      problem: "Problem",
      solution: "Solution",
      result: "Result",
    },
    projects: [
      {
        key: "leadflow",
        category: "leads" as const,
        title: "LeadFlow — AI Leads Manager",
        stat: "3×",
        statLabel: "more conversions",
        problem:
          "Sales teams were manually sorting through hundreds of unqualified leads, wasting hours each week on cold contacts while hot prospects went stale.",
        solution:
          "An AI CRM that scores every incoming lead, auto-assigns follow-up tasks, and surfaces the top 10% most likely to convert in a dedicated priority queue.",
        result: "3× increase in qualified conversions within the first 60 days of deployment",
      },
      {
        key: "triageai",
        category: "support" as const,
        title: "TriageAI — Ticket Triage System",
        stat: "68%",
        statLabel: "faster resolution",
        problem:
          "A high-volume support team was spending 40% of their time just reading and routing tickets — leaving complex issues stuck behind simple requests.",
        solution:
          "TriageAI reads every incoming ticket, classifies it by type and urgency, auto-responds to common issues, and routes edge cases to the right specialist in under 2 seconds.",
        result: "68% reduction in average ticket resolution time",
      },
      {
        key: "tracksense",
        category: "logistics" as const,
        title: "TrackSense — Vehicle & Order Tracking",
        stat: "91%",
        statLabel: "on-time delivery",
        problem:
          "A logistics company had no real-time visibility into fleet position or order status, resulting in customer complaints and costly delays that couldn't be diagnosed until after delivery.",
        solution:
          "Live GPS tracking, AI-predicted ETAs, geofence alerts, and a customer-facing status portal — all connected through a single API.",
        result: "91% on-time delivery rate, up from 74%",
      },
      {
        key: "contractlens",
        category: "custom" as const,
        title: "ContractLens — AI Document Analyzer",
        stat: "30×",
        statLabel: "faster review",
        problem:
          "A legal-services firm was spending days manually reviewing vendor contracts for liability clauses, missing critical terms under time pressure.",
        solution:
          "An LLM fine-tuned on contract language that extracts, flags, and summarizes risk clauses in seconds — with a confidence score and plain-English explanation for each finding.",
        result: "Contract review time cut from 4 hours to under 8 minutes",
      },
      {
        key: "outboundai",
        category: "leads" as const,
        title: "OutboundAI — Automated Outreach",
        stat: "44%",
        statLabel: "open rate",
        problem:
          "A B2B sales team was burning rep bandwidth on cold outreach sequences that were generic, poorly timed, and getting ignored.",
        solution:
          "OutboundAI personalizes each outreach message using company data and LinkedIn signals, schedules sends at optimal times, and pauses sequences the moment a lead engages.",
        result: "44% open rate and 18% reply rate — up from 9% and 3%",
      },
      {
        key: "nexbot",
        category: "chatbots" as const,
        title: "NexBot — AI Customer Chatbot",
        stat: "80%",
        statLabel: "resolved without human",
        problem:
          "An e-commerce brand was handling thousands of repetitive support messages daily — order status, returns, sizing questions — burning through headcount with zero leverage.",
        solution:
          "NexBot was trained on their product catalog, order data, and return policy. Embedded in their web app, it resolves common requests instantly and escalates edge cases with full context attached.",
        result:
          "80% of support queries resolved autonomously, saving 1,200+ agent-hours per month",
      },
      {
        key: "replydraft",
        category: "support" as const,
        title: "ReplyDraft — AI Support Copilot",
        stat: "22 min",
        statLabel: "avg first response",
        problem:
          "Junior support agents were slow to respond and inconsistent in tone, requiring senior review on most tickets before sending.",
        solution:
          "ReplyDraft sits inside the support inbox and generates a ready-to-send draft for every ticket — pulling from the knowledge base and past resolved cases. Agents review and send in one click.",
        result: "First-response time dropped from 6 hours to 22 minutes",
      },
    ],
  },

  process: {
    eyebrow: "How we work",
    headingLead: "From problem statement.",
    headingAccent: "To production AI.",
    sub: "Our four-step process is fast, transparent, and engineered for impact — whether you're deploying your first AI tool or scaling across an entire organization.",
    stepLabel: "Step",
    cta: "Start Building",
    steps: [
      {
        number: "01",
        title: "Discovery",
        description:
          "We map your workflow, your data sources, and where the real bottlenecks live. No fluff — just a sharp understanding of the problem we're solving and the outcome you need.",
      },
      {
        number: "02",
        title: "Build",
        description:
          "Our engineers develop the AI models, backend logic, and user-facing interfaces. We work in tight sprints with demos at every milestone so you always know exactly what you're getting.",
      },
      {
        number: "03",
        title: "Test & Tune",
        description:
          "Before anything touches production, we run the system against real data, stress-test edge cases, and fine-tune model performance. Accuracy and reliability are non-negotiable.",
      },
      {
        number: "04",
        title: "Deploy & Scale",
        description:
          "We ship to your environment — cloud, on-prem, or hybrid — and stay hands-on through launch. As usage grows, the system scales with it. Ongoing support and model retraining included.",
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    headingLead: "Let's build your",
    headingAccent: "AI advantage.",
    sub: "Have a workflow you want to automate, a product idea, or just want to explore what AI can do for your business? Reach out — we'll map out the opportunity and tell you exactly what's possible.",
    form: {
      title: "Send Us a Message",
      subtitle: "Tell us about your project and we'll get back to you within 24 hours.",
      name: "Name *",
      namePlaceholder: "Your name",
      email: "Email *",
      emailPlaceholder: "your@email.com",
      phone: "Phone",
      phonePlaceholder: "(555) 123-4567",
      details: "Project Details *",
      detailsPlaceholder: "Describe the problem you want AI to solve...",
      file: "Upload File (Optional)",
      fileCta: "Click to upload or drag and drop",
      fileHint: "PDF, PNG, JPG up to 10MB",
      success: "Message sent! We'll get back to you within 24 hours.",
      error: "Something went wrong. Please try again or email us directly.",
      submit: "Contact Us",
      submitting: "Sending…",
      submitted: "Sent!",
    },
    call: {
      title: "Schedule a Discovery Call",
      description:
        "Book a 30-minute call — we'll map your workflow and identify where AI creates the most leverage.",
      cta: "Book a Call",
    },
    other: {
      title: "Other Ways to Reach Us",
      phoneNote: "(call · iMessage)",
      whatsappNote: "(WhatsApp)",
      location: "Available Nationwide",
    },
    response: {
      title: "Fast Response Time",
      body: "We typically respond within",
      highlight: "24 hours",
    },
  },

  footer: {
    eyebrow: "Ready when you are",
    headingLead: "Let's create something",
    headingAccent: "extraordinary.",
    sub: "Let AI handle the work. You handle the growth.",
    ctaPrimary: "Get in Touch",
    ctaSecondary: "See the Work",
    products: [
      "Leads Manager & CRM",
      "Ticket Triage AI",
      "Tracking Systems",
      "Custom AI Apps",
      "AI Chatbots",
      "AI Integration",
    ],
    blurb:
      "AI-powered web apps built to automate operations, accelerate sales, and scale businesses — from leads to logistics.",
    location: "Available Nationwide",
    status: "Systems operational",
    navigate: "Navigate",
    productsTitle: "Products",
    connect: "Connect",
    backToTop: "Back to top",
    rights: (year: number) => `© ${year} ${brand.name}. All rights reserved.`,
  },

  error: {
    eyebrow: "Runtime recovered",
    title: "Something went wrong.",
    body: "Refresh the experience to load the latest version of the site.",
    retry: "Try again",
  },
});
