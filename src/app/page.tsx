import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/ui/ProjectCard";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  const projects = PORTFOLIO_DATA. featuredProjects.filter(
    (project) => project.featured
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar/>
      <div className="mx-auto max-w-6xl px-6 py-16">

        <div className="mb-10 flex justify-end">
          <ThemeToggle />
        </div>

        <div className="mb-10">
          <p className="font-mono text-sm text-accent">
            // PROJECT SYSTEM TEST
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Featured Projects
          </h1>

          <p className="mt-3 max-w-2xl text-muted">
            Testing the reusable project card architecture with portfolio data.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </main>
  );
}