import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <footer className="relative overflow-hidden border-t border-border/40 bg-background/50 backdrop-blur-md">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-50" />

      <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          
          {/* Brand Wordmark & Copyright */}
          <div>
            <Link
              href="/"
              className="group inline-flex items-center gap-1 font-mono text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
            >
              <span className="text-accent transition-transform duration-300 group-hover:-translate-x-0.5">&lt;</span>
              <span>{personal.wordmark}</span>
              <span className="text-accent transition-transform duration-300 group-hover:translate-x-0.5">/&gt;</span>
            </Link>

            <p className="mt-2 font-mono text-xs text-muted">
              © {new Date().getFullYear()} {personal.displayName}. All rights reserved.
            </p>
          </div>

          {/* Social Links & Back-to-Top CTA */}
          <div className="flex items-center gap-3">
            <a
              href={personal.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-card/50 text-muted backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-card hover:text-accent hover:-translate-y-0.5 shadow-2xs"
            >
              <FaGithub size={17} />
            </a>

            <a
              href={personal.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-card/50 text-muted backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-card hover:text-accent hover:-translate-y-0.5 shadow-2xs"
            >
              <FaLinkedin size={17} />
            </a>

            <div className="ml-1 h-5 w-px bg-border/60" />

            <a
              href="#"
              aria-label="Back to top"
              className="group flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-card/50 text-muted backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-card hover:text-accent hover:-translate-y-0.5 shadow-2xs"
            >
              <ArrowUp size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}