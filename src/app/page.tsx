import ThemeToggle from "@/components/ui/ThemeToggle";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-8 px-6">

        <ThemeToggle />

        <div className="w-full rounded-2xl border border-border bg-card p-8">
          <p className="font-mono text-sm text-accent">
            // BUTTON SYSTEM TEST
          </p>

          <h1 className="mt-3 text-3xl font-semibold">
            Reusable Button System
          </h1>

          <p className="mt-3 text-muted">
            Testing primary, secondary and ghost button variants.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button>
              Primary Button
            </Button>

            <Button variant="secondary">
              Secondary Button
            </Button>

            <Button variant="ghost">
              Ghost Button
            </Button>

            <Button href="/projects">
              Projects
            </Button>
          </div>

        </div>
      </div>
    </main>
  );
}