// Drop cover.webp (or jpg, jpeg, png) into src/assets/projects/<slug>/ and it is picked up here with no code change.
const covers = import.meta.glob<string>("/src/assets/projects/*/cover.{webp,jpg,jpeg,png}", {
  eager: true,
  query: "?url",
  import: "default",
});

const coverBySlug = new Map<string, string>();
for (const [path, url] of Object.entries(covers)) {
  const slug = path.split("/").slice(-2, -1)[0];
  if (slug) coverBySlug.set(slug, url);
}

export const getCoverUrl = (slug: string): string | undefined => coverBySlug.get(slug);

/** Dev only: lists projects that will show a placeholder because no cover file exists. */
export const warnMissingCovers = (list: { slug: string; featured: boolean }[], includeArchive: boolean): void => {
  if (!import.meta.env.DEV) return;
  const missing = list
    .filter((project) => (project.featured || includeArchive) && !coverBySlug.has(project.slug))
    .map((project) => project.slug);
  if (missing.length > 0) {
    console.warn(
      `Projects still using a placeholder image: ${missing.join(", ")}. ` +
        "Add src/assets/projects/<slug>/cover.webp to replace each one."
    );
  }
};
