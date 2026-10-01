import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import { sectionIntros } from '@/data/profile';
import { featuredProjects } from '@/data/projects';
import { warnMissingCovers } from '@/lib/projectCovers';

const Portfolio = () => {
  useEffect(() => {
    warnMissingCovers(featuredProjects, false);
  }, []);

  return (
    <section id="work" className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <SectionHeading title="Featured projects" intro={sectionIntros.projects} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-10">
          <Link to="/projects" className="tech-button-secondary">
            More projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
