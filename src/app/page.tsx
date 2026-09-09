import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-6 px-6">
        
        <ThemeToggle />

        <div className="w-full rounded-2xl border border-border bg-card p-8">
          <p className="font-mono text-sm text-accent">
            // DESIGN SYSTEM TEST
          </p>

          <h1 className="mt-3 text-4xl font-semibold text-foreground">
            Portfolio Design System
          </h1>

          <p className="mt-3 text-muted">
            Testing semantic theme tokens for dark and light mode.
          </p>
        </div>

      </div>
    </main>
  );
}