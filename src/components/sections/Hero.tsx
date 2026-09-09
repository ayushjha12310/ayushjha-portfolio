import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Button from "@/components/ui/Button";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Hero() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center px-6 py-20 md:py-24">
        <div className="max-w-4xl">
          <p className="font-mono text-sm font-medium tracking-wide text-accent">
            {personal.eyebrow}
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {personal.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            {personal.subheading}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
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

          <Link
            href="#about"
            className="mt-12 inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-foreground"
          >
            <span>Scroll to explore</span>
            <ArrowDown size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}