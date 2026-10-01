import { siteStatus } from '@/data/siteStatus';

const SiteStatusBanner = () => {
  if (!siteStatus.showBanner) return null;

  return (
    <section aria-label="Site status" className="w-full border-b border-border bg-primary/5">
      <p className="mx-auto flex min-h-9 max-w-full items-center justify-center px-4 py-2 text-center text-[13px] leading-snug text-foreground md:min-h-10 md:text-sm">
        <span className="break-words">
          <span className="font-semibold text-primary">{siteStatus.label}</span> {siteStatus.message}
        </span>
      </p>
    </section>
  );
};

export default SiteStatusBanner;
