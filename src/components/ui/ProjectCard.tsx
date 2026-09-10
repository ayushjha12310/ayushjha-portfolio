import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import type { Project } from "@/data/portfolioData";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/60 bg-card/60 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:bg-card hover:shadow-2xl hover:shadow-accent/5">
      {/* Background ambient lighting on hover */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Card Body */}
      <div>
        {/* Project Image / Placeholder */}
        <div className="relative aspect-video w-full overflow-hidden border-b border-border/50 bg-background/50">
          {project.imagePath ? (
            <>
              <img
                src={project.imagePath}
                alt={`${project.title} project preview`}
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-card/80 via-transparent to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-10" />
            </>
          ) : (
            <div className="relative flex h-full items-center justify-center bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-size-[16px_16px]">
              <div className="rounded-full border border-border/80 bg-card/80 px-3.5 py-1 backdrop-blur-sm shadow-xs">
                <span className="font-mono text-[11px] font-semibold tracking-wider text-muted uppercase">
                  PROJECT PREVIEW
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Main Content Area */}
        <div className="p-6 sm:p-7">
          {/* Category Badge Indicator */}
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              {project.category}
            </p>
          </div>

          {/* Title with hover text shift */}
          <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent sm:text-2xl">
            {project.title}
          </h3>

          {/* Tagline */}
          <p className="mt-1.5 text-sm font-medium text-foreground/80">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.slice(0, 5).map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Actions (Border-separated bottom container) */}
      <div className="border-t border-border/40 px-6 py-4 sm:px-7">
        <div className="flex flex-wrap gap-3">
          <Button
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live
            <ArrowUpRight size={16} className="ml-2" />
          </Button>

          <Button
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            <FaGithub size={16} className="mr-2" />
            GitHub
          </Button>
        </div>
      </div>
    </article>
  );
}