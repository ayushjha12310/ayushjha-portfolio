import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Badge from "@/components/ui/Badge";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import Button from "../ui/Button";

export default function Repositories() {
  const { repositories } = PORTFOLIO_DATA;

  return (
    <section id="repositories" className="relative overflow-hidden border-t border-border/40 py-24 md:py-32">
      {/* Background ambient lighting and dot pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-50" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-size-[24px_24px] opacity-30 mask-[radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Header Area */}
        <div className="max-w-2xl">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent/5 px-3.5 py-1.5 text-xs font-mono font-medium text-accent backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span>05 / REPOSITORIES</span>
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            More things I've <span className="bg-linear-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent">built.</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            A few additional projects and experiments exploring different
            technologies and development concepts.
          </p>
        </div>

        {/* Repositories Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {repositories.map((repository) => (
            <article
              key={repository.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:bg-card hover:shadow-xl hover:shadow-accent/5"
            >
              {/* Subtle top hover accent glow */}
              <div className="pointer-events-none absolute -top-12 -right-12 h-24 w-24 rounded-full bg-accent/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div>
                {/* Card Top Row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-background/80 text-foreground transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent shadow-2xs">
                    <FaGithub size={20} />
                  </div>

                  <div className="rounded-full border border-border/50 bg-background/40 p-2 text-muted backdrop-blur-xs transition-all duration-300 group-hover:border-accent/30 group-hover:text-accent">
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>

                {/* Repository Title */}
                <h3 className="mt-6 text-xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent">
                  {repository.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {repository.description}
                </p>
              </div>

              {/* Card Footer Area */}
              <div className="mt-8 pt-4 border-t border-border/40">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {repository.techStack.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Link */}
                <Button
                  href={repository.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-mono font-medium tracking-wide text-foreground transition-colors"
                >
                  <span>VIEW REPOSITORY</span>
                  <ArrowUpRight size={14} />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}