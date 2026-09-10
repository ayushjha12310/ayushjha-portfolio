import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "accent" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    default: `
      border border-border/70
      bg-card/50
      text-foreground/80
      backdrop-blur-md
      hover:border-border hover:bg-card hover:text-foreground
    `,

    accent: `
      border border-accent/30
      bg-accent/10
      text-accent
      backdrop-blur-md
      hover:bg-accent/15 hover:border-accent/50
    `,

    outline: `
      border border-border/80
      bg-transparent
      text-muted
      hover:border-accent/40 hover:text-accent
    `,
  };

  return (
    <span
      className={cn(
        `
          inline-flex items-center gap-1.5
          rounded-full
          px-2.5 py-1
          font-mono
          text-[11px]
          font-medium
          tracking-wider
          whitespace-nowrap
          transition-all duration-300
          shadow-2xs
        `,
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}