interface SectionHeadingProps {
  title: string;
  intro?: string;
}

const SectionHeading = ({ title, intro }: SectionHeadingProps) => (
  <div className="mb-10 max-w-2xl space-y-3">
    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
    {intro && <p className="text-lg leading-relaxed text-muted-foreground">{intro}</p>}
  </div>
);

export default SectionHeading;
