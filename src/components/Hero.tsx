import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImage from '@/assets/Faizan.png';
import { profile } from '@/data/profile';

const Hero = () => {
  return (
    <section id="home" className="py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] md:gap-12">
          {/* Photo first on mobile, right on desktop */}
          <div className="mx-auto w-full max-w-xs md:order-2 md:max-w-sm md:justify-self-end">
            <img
              src={profileImage}
              alt={profile.heroImageAlt}
              width={profile.heroImageWidth}
              height={profile.heroImageHeight}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/5] w-full rounded-2xl border border-border object-cover object-top"
            />
          </div>

          <div className="animate-fade-in md:order-1">
            <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <h2 className="mt-5 text-balance text-2xl font-medium leading-snug text-foreground md:text-3xl">
              {profile.headline.before}
              <span className="text-primary">{profile.headline.accent}</span>
              {profile.headline.after}
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">{profile.subline}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/projects" className="tech-button group">
                View projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <a href={profile.cvHref} target="_blank" rel="noopener noreferrer" className="tech-button-secondary">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
