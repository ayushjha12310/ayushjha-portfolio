import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-8 px-6">

        <ThemeToggle />

        <div className="w-full rounded-2xl border border-border bg-card p-8">

          <p className="font-mono text-sm text-accent">
            // DESIGN SYSTEM TEST
          </p>

          <h1 className="mt-3 text-3xl font-semibold">
            Badge System
          </h1>

          <p className="mt-3 text-muted">
            Testing reusable badges and technical metadata.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            <Badge>Next.js</Badge>

            <Badge>TypeScript</Badge>

            <Badge variant="accent">
              Featured
            </Badge>

            <Badge variant="outline">
              Full-Stack
            </Badge>

            <Badge>MongoDB</Badge>

            <Badge>Node.js</Badge>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button>
              Primary
            </Button>

            <Button variant="secondary">
              Secondary
            </Button>
          </div>

        </div>
      </div>
    </main>
  );
}