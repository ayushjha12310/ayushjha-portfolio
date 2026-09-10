import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function About() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="relative overflow-hidden border-t border-border/40 py-24 md:py-32">
      {/* Background ambient lighting and architectural grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))]from-accent/5 via-transparent to-transparent opacity-60" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-size-[24px_24px] opacity-30 mask-[radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[180px_1fr] md:gap-16 items-start">
          {/* Left Column: Eyebrow Status Badge */}
          <div className="md:sticky md:top-28">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent/5 px-3.5 py-1.5 text-xs font-mono font-medium text-accent backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span>01 / ABOUT</span>
            </div>
          </div>

          {/* Right Column: High-Impact Heading & Glass Bio Cards */}
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-[1.18]">
              A developer who enjoys turning{" "}
              <span className="bg-linear-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent">
                ideas into real applications.
              </span>
            </h2>

            <div className="mt-10 space-y-6">
              {/* Bio Card 1 */}
              <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 sm:p-8 backdrop-blur-md shadow-2xs transition-all duration-300 hover:border-accent/40 hover:bg-card">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="text-base sm:text-lg leading-relaxed text-foreground/90 font-normal">
                  {personal.aboutBio}
                </p>
              </div>

              {/* Bio Card 2 */}
              <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 sm:p-8 backdrop-blur-md shadow-2xs transition-all duration-300 hover:border-accent/40 hover:bg-card">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="text-base sm:text-lg leading-relaxed text-muted group-hover:text-foreground/90 transition-colors duration-300">
                  {personal.mindsetBio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}