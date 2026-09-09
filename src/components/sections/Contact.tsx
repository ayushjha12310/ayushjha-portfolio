import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Button from "@/components/ui/Button";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Contact() {
  const { contacts } = PORTFOLIO_DATA.personal;

  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 md:p-14">
          <div className="max-w-3xl">
            <p className="font-mono text-sm text-accent">
              06 / CONTACT
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Have a project or opportunity in mind?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              I'm always open to interesting projects, collaborations, and
              opportunities to build useful software.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={`mailto:${contacts.email}`}
              >
                <Mail size={16} className="mr-2" />
                Get in touch
              </Button>

              <Button
                href={contacts.linkedin}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={16} className="mr-2" />
                LinkedIn
              </Button>

              <Button
                href={contacts.github}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={16} className="mr-2" />
                GitHub
              </Button>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-2 border-t border-border pt-6 text-sm text-muted">
            <span>Prefer email?</span>

            <a
              href={`mailto:${contacts.email}`}
              className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-accent"
            >
              {contacts.email}
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}