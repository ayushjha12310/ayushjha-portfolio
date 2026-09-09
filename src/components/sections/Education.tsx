import { GraduationCap } from "lucide-react";

import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Education() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[180px_1fr] md:gap-16">
          <div>
            <p className="font-mono text-sm text-accent">
              04 / EDUCATION
            </p>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Academic background.
            </h2>

            <div className="mt-10 space-y-8">
              {education.map((item, index) => (
                <article
                  key={`${item.degree}-${item.period}`}
                  className="relative border-l border-border pl-6"
                >
                  <div className="absolute -left-1.25 top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />

                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div>
                      <div className="flex items-center gap-2">
                        <GraduationCap
                          size={17}
                          className="shrink-0 text-accent"
                        />

                        <h3 className="font-semibold text-foreground">
                          {item.degree}
                        </h3>
                      </div>

                      <p className="mt-2 text-sm text-muted">
                        {item.institution}
                      </p>
                    </div>

                    <span className="shrink-0 font-mono text-xs text-muted">
                      {item.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-muted">
                    {item.description}
                  </p>

                  {index < education.length - 1 && (
                    <div className="mt-8" />
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}