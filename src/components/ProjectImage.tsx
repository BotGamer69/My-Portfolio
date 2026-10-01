import type { Project } from "@/data/projects";
import { projectDisplay } from "@/data/projects";
import { getCoverUrl } from "@/lib/projectCovers";

// PLACEHOLDER: shown only when src/assets/projects/<slug>/cover.* does not exist.
// Search for "PLACEHOLDER" to find and remove every placeholder once real images are in.
const ProjectImagePlaceholder = () => (
  <div
    role="img"
    aria-label="Placeholder: project photo coming soon"
    className="flex h-full w-full items-center justify-center bg-primary/5"
  >
    <span className="text-sm text-muted-foreground">Project photo coming soon</span>
  </div>
);

interface ProjectImageProps {
  project: Project;
  /** Use eager loading for images above the fold. */
  eager?: boolean;
}

const ProjectImage = ({ project, eager = false }: ProjectImageProps) => {
  const src = getCoverUrl(project.slug);

  // Archive projects can drop the image area entirely when there is no real image.
  if (!src && !project.featured && !projectDisplay.showPlaceholderForArchive) return null;

  return (
    <div className="aspect-[16/10] w-full overflow-hidden rounded-lg border border-border bg-card">
      {src && project.image ? (
        <img
          src={src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover"
        />
      ) : (
        <ProjectImagePlaceholder />
      )}
    </div>
  );
};

export default ProjectImage;
