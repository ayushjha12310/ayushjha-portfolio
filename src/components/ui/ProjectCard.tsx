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
    <article className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
      {/* Project Image / Placeholder */}
      <div className="relative aspect-video overflow-hidden border-b border-border bg-background">
        {project.imagePath ? (
          <img
            src={project.imagePath}
            alt={`${project.title} project preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="font-mono text-xs text-muted">
              PROJECT PREVIEW
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <p className="font-mono text-xs uppercase tracking-wider text-accent">
          {project.category}
        </p>

        {/* Title */}
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="mt-2 text-sm font-medium text-muted">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-muted">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.slice(0, 5).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap gap-3">
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