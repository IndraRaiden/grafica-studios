"use client";

import { motion } from "framer-motion";

export default function Three() {
  const clients = [
    "Häagen-Dazs",
    "Wetzel's Pretzels",
    "Gong Cha",
    "Jamba Juice",
    "Ándale Tacos",
    "ChocoBerry",
    "Cilantro Taco Grill"
  ];

  const featuredProjects = [
    {
      title: "Häagen-Dazs Flagship Store",
      category: "Premium Ice Cream Retail",
      problem: "Needed a modern, inviting space that reflected the premium brand while maximizing customer flow in a compact mall location.",
      solution: "Created an open-concept design with elegant display cases, strategic lighting, and a color palette that emphasized the brand's luxury positioning.",
      result: "30% increase in foot traffic within the first quarter"
    },
    {
      title: "Gong Cha Expansion",
      category: "Beverage Kiosk",
      problem: "Rapid expansion required consistent branding across multiple mall locations with varying space constraints.",
      solution: "Developed a modular design system that maintained brand identity while adapting to different footprints and mall requirements.",
      result: "Successfully launched 5 locations in 6 months"
    },
    {
      title: "Cilantro Taco Grill Rebrand",
      category: "Restaurant Refurbishment",
      problem: "Existing location felt dated and didn't reflect the fresh, modern direction of the brand.",
      solution: "Complete interior refresh with new signage, updated materials, vibrant graphics, and improved customer flow without closing for business.",
      result: "Completed in 3 weeks with zero downtime"
    }
  ];

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
          <h2 className="text-base font-semibold leading-7 text-purple-400">Client Showcase</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Trusted by Leading Brands. Proven Results Across the Country.
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            We've worked with national franchises and emerging startups to deliver impactful retail designs. Our clients rely on us for quality, speed, and creative excellence.
          </p>
        </motion.div>

        {/* Client logos/names */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/30 px-6 py-8 backdrop-blur-sm transition-all hover:border-zinc-700 hover:bg-zinc-900/50"
              >
                <span className="text-center text-lg font-semibold text-white">
                  {client}
                </span>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: clients.length * 0.05 }}
              className="flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/30 px-6 py-8 backdrop-blur-sm"
            >
              <span className="text-center text-lg font-semibold text-zinc-500">
                + Many More
              </span>
            </motion.div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mx-auto mt-20 max-w-6xl">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center text-2xl font-bold text-white sm:text-3xl"
          >
            Featured Projects
          </motion.h3>
          
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:border-purple-500/50"
              >
                {/* Project header */}
                <div className="border-b border-zinc-800 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-6">
                  <div className="text-sm font-medium text-purple-400">
                    {project.category}
                  </div>
                  <h4 className="mt-2 text-xl font-bold text-white">
                    {project.title}
                  </h4>
                </div>

                {/* Project details */}
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <div className="text-sm font-semibold text-zinc-300">Challenge</div>
                    <p className="mt-1 text-sm text-zinc-400">{project.problem}</p>
                  </div>
                  
                  <div>
                    <div className="text-sm font-semibold text-zinc-300">Solution</div>
                    <p className="mt-1 text-sm text-zinc-400">{project.solution}</p>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-3 ring-1 ring-inset ring-white/10">
                      <div className="text-xs font-semibold text-purple-300">Result</div>
                      <p className="mt-1 text-sm font-medium text-white">{project.result}</p>
                    </div>
                  </div>
                </div>

                {/* Hover gradient */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/0 to-blue-500/0 opacity-0 transition-opacity group-hover:opacity-5" />
              </motion.div>
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
          <button className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
            View Full Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
}
