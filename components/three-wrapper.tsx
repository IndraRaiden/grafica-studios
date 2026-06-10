"use client";

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
  return (
    <section className="bg-zinc-50">
      <div className="no-scrollbar flex gap-6 overflow-x-auto px-6 py-8 sm:px-8 lg:px-12">
        {projects.map((project, index) => (
          <div key={index} className="w-[90vw] max-w-2xl flex-shrink-0 md:w-[60vw] lg:w-[45vw]">
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
      </div>
    </section>
  );
}
