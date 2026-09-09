import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import ProjectCard from "@/components/ui/ProjectCard";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Projects() {
  const featuredProjects = PORTFOLIO_DATA.featuredProjects.filter(
    (project) => project.featured
  );

  return (
    <section id="projects" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-sm text-accent">
              02 / SELECTED WORK
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Projects I've built.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
              A selection of projects where I turned ideas into practical,
              full-stack web applications.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            View all projects
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}