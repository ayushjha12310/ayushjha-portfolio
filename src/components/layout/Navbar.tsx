"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Repositories",
    href: "/repositories",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-3 z-50 mx-auto max-w-6xl px-4 sm:px-6">
      {/* Floating Glassmorphic Pill Container */}
      <div className="relative rounded-3xl border border-border/60 bg-background/70 p-3 px-5 backdrop-blur-xl shadow-lg shadow-black/5 transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Logo / Wordmark */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="group inline-flex items-center gap-1 font-mono text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
          >
            <span className="text-accent transition-transform duration-300 group-hover:-translate-x-0.5">&lt;</span>
            <span>ayushjha.dev</span>
            <span className="text-accent transition-transform duration-300 group-hover:translate-x-0.5">/&gt;</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3.5 py-1.5 text-sm font-medium text-muted transition-all duration-200 hover:bg-card/80 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}

            <div className="ml-2 flex items-center gap-3 border-l border-border/60 pl-4">
              <ThemeToggle />

              <Button href="/contact" variant="secondary">
                Contact
              </Button>
            </div>
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-card/80 text-foreground transition-all duration-300 hover:border-accent/40 hover:bg-card active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-2xs"
            >
              {isOpen ? <X size={18} className="text-accent" /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Floating Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-[calc(100%+0.75rem)] left-0 right-0 overflow-hidden rounded-2xl border border-border/80 bg-background/95 p-4 backdrop-blur-2xl shadow-2xl md:hidden animate-in fade-in-0 slide-in-from-top-3 duration-200 ease-out">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-muted transition-all hover:bg-card hover:text-accent hover:translate-x-1"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-2 border-t border-border/50 pt-3">
                <Button
                  href="/contact"
                  variant="secondary"
                  className="w-full justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}