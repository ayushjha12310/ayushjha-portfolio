import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/"
              className="font-mono text-sm font-semibold text-foreground transition-colors hover:text-accent"
            >
              {personal.wordmark}
            </Link>

            <p className="mt-2 text-xs text-muted">
              © {new Date().getFullYear()} {personal.displayName}. All rights
              reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personal.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-accent"
            >
              <FaGithub size={18} />
            </a>

            <a
              href={personal.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-accent"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="#"
              aria-label="Back to top"
              className="ml-2 border-l border-border pl-4 text-muted transition-colors hover:text-accent"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}