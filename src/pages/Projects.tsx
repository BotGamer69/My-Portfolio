import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { projectDisplay, projects } from "@/data/projects";
import { warnMissingCovers } from "@/lib/projectCovers";

const Projects = () => {
  useEffect(() => {
    warnMissingCovers(projects, projectDisplay.showPlaceholderForArchive);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>
          <span className="text-lg font-bold">M. Faizan Tahir</span>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 md:py-16">
        <div className="mb-10 max-w-2xl space-y-3">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">All projects</h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Featured work first, followed by the rest of my builds.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
