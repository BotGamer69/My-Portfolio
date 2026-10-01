import SectionHeading from '@/components/SectionHeading';
import { skillGroups } from '@/data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <SectionHeading title="Skills" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="tech-card">
              <h3 className="mb-4 text-lg font-semibold">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="tech-chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
