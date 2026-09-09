import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function About() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[180px_1fr] md:gap-16">
          <div>
            <p className="font-mono text-sm text-accent">
              01 / ABOUT
            </p>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              A developer who enjoys turning ideas into real applications.
            </h2>

            <div className="mt-8 space-y-5 text-base leading-7 text-muted">
              <p>{personal.aboutBio}</p>

              <p>{personal.mindsetBio}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}