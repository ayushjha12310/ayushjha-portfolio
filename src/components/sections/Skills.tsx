import { Code2 } from "lucide-react";

import Badge from "@/components/ui/Badge";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Skills() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-accent">
            03 / SKILLS
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Technologies I work with.
          </h2>

          <p className="mt-4 text-base leading-7 text-muted">
            A practical set of technologies I use to build modern web
            applications across the frontend and backend.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category) => (
            <div
              key={category.category}
              className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background text-accent">
                  <Code2 size={18} />
                </div>

                <h3 className="text-sm font-semibold text-foreground">
                  {category.category}
                </h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill.name} variant="outline">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}