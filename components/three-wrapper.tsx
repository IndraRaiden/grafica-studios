"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./project-card";

interface Project {
  client: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  result: string;
}

interface ThreeWrapperProps {
  projects: Project[];
}

export default function ThreeWrapper({ projects }: ThreeWrapperProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(projects.length - 1) * 100}vw`]);

  return (
    <>
      
      <section className="bg-zinc-50 md:hidden">
        <div className="mx-auto max-w-3xl space-y-6 px-6 py-8">
          {projects.map((project, index) => (
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
      </section>

      
      <section ref={targetRef} className="relative hidden bg-zinc-50 md:block" style={{ height: `${projects.length * 100}vh` }}>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-zinc-50">
          <motion.div style={{ x }} className="flex gap-8 px-[5vw]">
            {projects.map((project, index) => (
              <div key={index} className="min-w-[90vw] max-w-5xl flex-shrink-0">
                <ProjectCard
                  title={project.title}
                  category={project.category}
                  problem={project.problem}
                  solution={project.solution}
                  result={project.result}
                  index={index}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

