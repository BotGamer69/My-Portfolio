import SectionHeading from '@/components/SectionHeading';
import { services, servicesIntro } from '@/data/services';

const Services = () => {
  return (
    <section id="services" className="border-y border-border bg-card py-16 md:py-20">
      <div className="container mx-auto px-6">
        <SectionHeading title="Freelance services" intro={servicesIntro} />

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-xl border border-border bg-background p-6">
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a href="#contact" className="tech-button">
            Discuss your project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
