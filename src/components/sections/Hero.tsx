import Link from "next/link";
import { ArrowDown, ArrowUpRight, Terminal, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Button from "@/components/ui/Button";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Hero() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="relative overflow-hidden pt-6 pb-12 md:py-20 lg:py-28">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,197,94,0.15),rgba(255,255,255,0))]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-size-[28px_28px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Mobile-first stack layout -> Desktop 2-column grid */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Personal info & Action buttons */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Live status badge */}
            <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 backdrop-blur-md shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <p className="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
                {personal.eyebrow}
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-6xl">
              {personal.headline}
            </h1>

            {/* Subheading */}
            <p className="mt-5 text-base font-normal leading-relaxed text-muted sm:text-lg md:text-xl">
              {personal.subheading}
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
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

          {/* Right Column: Photo frame & Code Object Card */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6">
            
            {/* Profile Photo Frame */}
            <div className="relative group w-full max-w-70 sm:max-w-[320px]">
              {/* Outer soft glow effect */}
              <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-accent/40 to-emerald-500/20 opacity-50 blur-xl transition-all duration-500 group-hover:opacity-80" />
              
              {/* Image Container */}
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xl">
                {/* Place your photo inside public/hero-photo.jpg */}
                <img
                  src="/images/ayushjha.png" 
                  alt="Ayush Jha"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Floating recruiter badge */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg border border-border/60 bg-background/80 px-2.5 py-1 text-[11px] font-mono font-medium text-foreground backdrop-blur-md">
                  <Sparkles size={12} className="text-accent" />
                  <span>Available for Hire</span>
                </div>
              </div>
            </div>

            {/* Terminal / Code Snippet Card */}
            <div className="w-full rounded-2xl border border-border/80 bg-card/90 p-4 shadow-xl backdrop-blur-md sm:p-5 font-mono text-xs sm:text-sm">
              {/* Terminal header bar */}
              <div className="flex items-center justify-between border-b border-border/50 pb-2.5 mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-muted">
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

        {/* Scroll indicator */}
        

      </div>
    </section>
  );
}