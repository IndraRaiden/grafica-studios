"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "./project-card";

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
    <section className="relative bg-gradient-to-b from-black via-zinc-900 to-black py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.1),transparent_50%)]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-purple-400" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-purple-400">Client Showcase</h2>
          </div>
          <p className="font-display mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Leading Brands
            </span>
            .<br />
            Proven Results Across the Country.
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            We've worked with national franchises and emerging startups to deliver impactful retail designs. Our clients rely on us for quality, speed, and creative excellence.
          </p>
        </motion.div>

        {/* Client selector buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-16 max-w-6xl"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setSelectedClient(null)}
              className={`rounded-2xl border px-6 py-4 text-base font-semibold transition-all ${
                selectedClient === null
                  ? "border-blue-500/50 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white shadow-lg shadow-blue-500/20"
                  : "border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-900/50 hover:text-white"
              }`}
            >
              All Projects
            </button>
            {clients.map((client, index) => (
              <motion.button
                key={client}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                onClick={() => setSelectedClient(client)}
                className={`rounded-2xl border px-6 py-4 text-base font-semibold transition-all ${
                  selectedClient === client
                    ? "border-blue-500/50 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white shadow-lg shadow-blue-500/20"
                    : "border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-900/50 hover:text-white"
                }`}
              >
                {client}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.3 + clients.length * 0.05 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/30 px-6 py-4 text-base font-semibold text-zinc-500"
            >
              + Many More
            </motion.button>
          </div>
        </motion.div>

        {/* Projects Section */}
        <div className="mx-auto mt-20 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">
              {selectedClient ? `${selectedClient} Projects` : "Featured Projects"}
            </h3>
            <p className="mt-3 text-zinc-400">
              {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"} found
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                category={project.category}
                problem={project.problem}
                solution={project.solution}
                result={project.result}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-purple-500/50 transition-all hover:scale-105 hover:shadow-purple-500/70">
            <span className="relative z-10">View Full Portfolio</span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
