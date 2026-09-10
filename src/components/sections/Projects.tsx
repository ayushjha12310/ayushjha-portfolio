import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import ProjectCard from "@/components/ui/ProjectCard";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Projects() {
  const featuredProjects = PORTFOLIO_DATA.featuredProjects.filter(
    (project) => project.featured
  );

  return (
    <section id="projects" className="relative border-t border-border/40 overflow-hidden">
      {/* Background glow effect for a premium feel */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-125 w-200 -translate-x-1/2 -translate-y-1/2 opacity-[0.12] [background:radial-gradient(circle,var(--accent)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-3xl">
            {/* Styled label with a decorative line */}
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-accent/50" />
              <p className="font-mono text-xs font-semibold tracking-widest text-accent uppercase">
                02 / Selected Work
              </p>
            </div>

           <h2 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Projects I've <span className="bg-linear-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent">built.</span>
            </h2>

            <p className="mt-6 text-lg font-light leading-relaxed text-muted md:text-xl max-w-2xl">
              A selection of projects where I turned ideas into practical,
              full-stack web applications.
            </p>
          </div>

         
        </div>

        {/* Increased gaps for better visual hierarchy */}
        <div className="mt-16 grid gap-8 sm:gap-12 md:mt-24 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}