import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import { leadership } from '@/data/leadership';

const Leadership = () => {
  const [showAll, setShowAll] = useState(false);
  const roles = showAll ? leadership : leadership.filter((role) => role.primary);
  const hiddenCount = leadership.length - leadership.filter((role) => role.primary).length;

  return (
    <section id="leadership" className="border-y border-border bg-card py-16 md:py-20">
      <div className="container mx-auto px-6">
        <SectionHeading title="Leadership" />

        <ul id="leadership-list" className="grid gap-x-10 gap-y-6 md:grid-cols-2">
          {roles.map((role) => (
            <li key={`${role.title}-${role.organization}`} className="space-y-1">
              <p className="font-semibold">{role.title}</p>
              <p className="text-muted-foreground">{role.organization}</p>
              {(role.period || role.note) && (
                <p className="text-sm text-muted-foreground">
                  {[role.period, role.note].filter(Boolean).join(', ')}
                </p>
              )}
            </li>
          ))}
        </ul>

        {hiddenCount > 0 && (
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
            aria-controls="leadership-list"
            className="tech-button-secondary mt-8"
          >
            {showAll ? 'Show fewer' : `Show all (${hiddenCount} more)`}
          </button>
        )}
      </div>
    </section>
  );
};

export default Leadership;
