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
      border border-border
      bg-card
      text-muted
    `,

    accent: `
      border border-accent/20
      bg-accent/10
      text-accent
    `,

    outline: `
      border border-border
      bg-transparent
      text-foreground
    `,
  };

  return (
    <span
      className={cn(
        `
          inline-flex items-center
          rounded-full
          px-3 py-1
          font-mono
          text-xs
          font-medium
          whitespace-nowrap
        `,
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}