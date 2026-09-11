import Link from "next/link";
import { ArrowDown, ArrowUpRight, Terminal, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Button from "@/components/ui/Button";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Hero() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:py-24 lg:py-32">
      {/* Premium Ambient Lighting & Grid Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,197,94,0.15),transparent)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-size-[32px_32px] opacity-35 mask-[radial-gradient(ellipse_at_center,black_60%,transparent_100%)]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Main Grid Layout: Text on top/left, Photo on bottom/right */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-10">

          {/* Left Column: Personal Info & Action CTAs - First to animate */}
          <div className="lg:col-span-7 flex flex-col justify-center animate-slide-up">
            
            {/* Greeting */}
            <p className="mb-4 font-mono text-sm sm:text-base font-medium tracking-wide text-accent">
              Hello, my name is
            </p>

            {/* Name */}
            <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Ayush Jha.
            </h1>

            {/* Role */}
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-muted sm:text-4xl md:text-5xl">
              I'm a Full Stack Web Developer.
            </h2>

            {/* Subheading / Brief Description */}
            <p className="mt-6 text-base font-normal leading-relaxed text-muted/80 sm:text-lg md:text-xl max-w-2xl">
              {personal.subheading}
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/projects">
                View Projects
                <ArrowUpRight size={16} className="ml-2" />
              </Button>

              <Button
                href={personal.contacts.github}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={16} className="mr-2" />
                GitHub
              </Button>
            </div>
          </div>

          {/* Right Column: Photo Frame & Terminal Card - Animates second (200ms delay) */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6 animate-slide-up delay-200">

            {/* Profile Photo Frame */}
            <div className="relative group w-full max-w-70 sm:max-w-[320px]">
              {/* Outer soft ambient glow */}
              <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-accent/40 via-emerald-500/20 to-accent/30 opacity-60 blur-xl transition-all duration-700 group-hover:opacity-100" />

              {/* Image Container */}
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                <img
                  src="/images/ayushjha.png"
                  alt="Ayush Jha"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Floating Recruiter Badge */}
                <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-xl border border-border/70 bg-background/80 px-3 py-1.5 text-xs font-mono font-medium text-foreground backdrop-blur-md shadow-lg">
                  <Sparkles size={13} className="text-accent animate-pulse" />
                  <span>Available for Hire</span>
                </div>
              </div>
            </div>

            {/* Terminal / Code Snippet Card */}
            <div className="w-full rounded-2xl border border-border/70 bg-card/80 p-4 sm:p-5 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-accent/40 font-mono text-xs sm:text-sm">
              {/* Terminal Header Bar */}
              <div className="flex items-center justify-between border-b border-border/50 pb-3 mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-muted">
                  <Terminal size={12} className="text-accent" />
                  <span>developer.ts</span>
                </div>
              </div>

              {/* Developer Object Code */}
              <pre className="overflow-x-auto text-foreground leading-relaxed">
                <code>
                  <span className="text-accent font-semibold">const</span> <span className="text-foreground">developer</span> = &#123;<br />
                  &nbsp;&nbsp;<span className="text-muted">name:</span> <span className="text-emerald-400">"Ayush Jha"</span>,<br />
                  &nbsp;&nbsp;<span className="text-muted">role:</span> <span className="text-emerald-400">"Full Stack Engineer"</span>,<br />
                  &nbsp;&nbsp;<span className="text-muted">age:</span> <span className="text-amber-400">22</span>,<br />
                  &nbsp;&nbsp;<span className="text-muted">status:</span> <span className="text-emerald-400">"Open to HR Opportunities"</span><br />
                  &#125;;
                </code>
              </pre>
            </div>

          </div>

        </div>

        {/* Bottom Section: "I build..." Headline & Badge - Animates third (500ms delay) */}
        <div className="mt-24 flex flex-col items-center justify-center text-center animate-slide-up delay-500">
          {/* Live Status Badge */}
          <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 backdrop-blur-md shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <p className="w-fit overflow-hidden whitespace-nowrap border-r-2 border-accent pr-1 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent animate-typing">
              {personal.eyebrow}
            </p>
          </div>

          {/* Large dynamic headline ("I build...") */}
          <h3 className="mt-6 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight bg-linear-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent sm:text-4xl md:text-5xl">
            {personal.headline}
          </h3>
        </div>

      </div>
    </section>
  );
}