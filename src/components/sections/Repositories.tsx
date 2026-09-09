import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Badge from "@/components/ui/Badge";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Repositories() {
  const { repositories } = PORTFOLIO_DATA;

  return (
    <section id="repositories" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-accent">
            05 / REPOSITORIES
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            More things I've built.
          </h2>

          <p className="mt-4 text-base leading-7 text-muted">
            A few additional projects and experiments exploring different
            technologies and development concepts.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {repositories.map((repository) => (
            <article
              key={repository.id}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-accent">
                  <FaGithub size={19} />
                </div>

                <ArrowUpRight
                  size={17}
                  className="text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </div>

              <h3 className="mt-6 text-lg font-semibold tracking-tight text-foreground">
                {repository.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                {repository.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {repository.techStack.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>

              <a
                href={repository.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                View repository
                <ArrowUpRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}