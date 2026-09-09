import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  className,
  target,
  rel,
  disabled = false,
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center
    rounded-xl
    px-5 py-2.5
    text-sm font-medium
    transition-all duration-200
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-accent
    focus-visible:ring-offset-2
    focus-visible:ring-offset-background
    disabled:pointer-events-none
    disabled:opacity-50
  `;

  const variants = {
    primary: `
      bg-accent
      text-white
      hover:-translate-y-0.5
      hover:brightness-110
      active:translate-y-0
      active:scale-[0.98]
    `,

    secondary: `
      border border-border
      bg-card
      text-foreground
      hover:-translate-y-0.5
      hover:border-accent
      active:translate-y-0
      active:scale-[0.98]
    `,

    ghost: `
      text-muted
      hover:bg-card
      hover:text-foreground
      active:scale-[0.98]
    `,
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    className
  );

  if (href) {
    const isExternal =
      href.startsWith("http://") ||
      href.startsWith("https://");

    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={classes}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}