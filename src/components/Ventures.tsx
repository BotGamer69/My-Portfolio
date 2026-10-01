import SectionHeading from '@/components/SectionHeading';
import { ventures } from '@/data/ventures';

const Ventures = () => {
  const flagship = ventures.find((venture) => venture.flagship);
  const others = ventures.filter((venture) => !venture.flagship);

  return (
    <section id="ventures" className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <SectionHeading title="Ventures" />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          {flagship && (
            <div className="tech-card space-y-4 p-8">
              <h3 className="text-2xl font-semibold">{flagship.name}</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">{flagship.description}</p>
              {flagship.details && (
                <ul className="list-disc space-y-2 pl-5 text-foreground">
                  {flagship.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}
              {flagship.projectSlug && (
                <a href={`#project-${flagship.projectSlug}`} className="text-link inline-block font-medium">
                  See the reverse vending machine project
                </a>
              )}
            </div>
          )}

          <div className="flex flex-col gap-6">
            {others.map((venture) => (
              <div key={venture.name} className="tech-card space-y-2">
                <h3 className="text-lg font-semibold">{venture.name}</h3>
                <p className="leading-relaxed text-muted-foreground">{venture.description}</p>
                {venture.projectSlug && (
                  <a href={`#project-${venture.projectSlug}`} className="text-link inline-block text-sm font-medium">
                    View project
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ventures;
