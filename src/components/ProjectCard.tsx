import type { Project } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import ProjectImage from "@/components/ProjectImage";

interface ProjectCardProps {
  project: Project;
  /** Show the full description, tags and highlights instead of the card summary. */
  detailed?: boolean;
}

const ProjectCard = ({ project, detailed = false }: ProjectCardProps) => {
  const tags = detailed ? project.tags : project.tags.slice(0, 3);

  return (
    <article id={`project-${project.slug}`} className="tech-card flex h-full flex-col gap-4">
      <ProjectImage project={project} />

      <div className="flex flex-1 flex-col gap-3">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold leading-snug">{project.title}</h3>
          {project.context && <p className="text-sm text-muted-foreground">{project.context}</p>}
        </div>

        {(detailed && project.description ? project.description : project.summary) && (
          <p className="text-muted-foreground leading-relaxed">
            {detailed && project.description ? project.description : project.summary}
          </p>
        )}

        {detailed && project.highlights && project.highlights.length > 0 && (
          <ul className="list-disc space-y-1 pl-5 text-sm text-foreground">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-col gap-3 pt-2">
          {tags.length > 0 && (
            <ul className="flex flex-wrap gap-2" aria-label="Technologies">
              {tags.map((tag) => (
                <li key={tag} className="tech-chip">
                  {tag}
                </li>
              ))}
            </ul>
          )}

          {(project.status || project.demoVideoUrl || project.projectUrl) && (
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-3 text-sm">
              {project.status && <span className="font-medium text-foreground">{project.status}</span>}
              <div className="flex gap-4">
                {project.demoVideoUrl && (
                  <a href={project.demoVideoUrl} target="_blank" rel="noopener noreferrer" className="text-link inline-flex items-center gap-1">
                    Demo video <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
                {project.projectUrl && (
                  <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-link inline-flex items-center gap-1">
                    View project <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
