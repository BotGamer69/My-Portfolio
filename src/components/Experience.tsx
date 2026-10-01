import SectionHeading from '@/components/SectionHeading';
import { sectionIntros } from '@/data/profile';
import { education, experience } from '@/data/experience';

const Experience = () => {
  return (
    <section id="experience" className="border-y border-border bg-card py-16 md:py-20">
      <div className="container mx-auto px-6">
        <SectionHeading title="Experience" intro={sectionIntros.experience} />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <ol className="space-y-8">
            {experience.map((entry) => (
              <li key={`${entry.title}-${entry.organization}`} className="space-y-1">
                <h3 className="text-lg font-semibold">
                  {entry.title}, {entry.organization}
                </h3>
                {entry.period && <p className="text-sm text-muted-foreground">{entry.period}</p>}
                {entry.description && <p className="leading-relaxed text-muted-foreground">{entry.description}</p>}
              </li>
            ))}
          </ol>

          <div>
            <h3 className="mb-6 text-lg font-semibold">Education</h3>
            <ul className="space-y-6">
              {education.map((entry) => (
                <li key={entry.degree} className="space-y-1">
                  <p className="font-medium">{entry.degree}</p>
                  <p className="text-muted-foreground">{entry.institution}</p>
                  {(entry.period || entry.note) && (
                    <p className="text-sm text-muted-foreground">
                      {[entry.period, entry.note].filter(Boolean).join(', ')}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
