export interface Venture {
  name: string;
  description: string;
  details?: string[];
  /** Link to a featured project instead of repeating its details. */
  projectSlug?: string;
  flagship?: boolean;
}

export const ventures: Venture[] = [
  {
    name: "Embotics",
    flagship: true,
    description:
      "An IoT reverse vending machine for plastic recycling, plus engineering services: PCB design, CAD design, web development, and prototyping.",
    details: [
      "Co-founded with two partners, a CEO and a CTO.",
      "First place, All Pakistan Business Plan Competition 2025, and one of the Top 20 startups in Punjab.",
      "Incubated under the Government of Punjab's innovation hub.",
      "Runs a paid internship program across teams such as AI and Embedded Engineering.",
      "Also building a client-specified machine with a crusher-less design and 3 compartments, in collaboration with Aabroo Welfare Foundation.",
    ],
    projectSlug: "embotics_rvm",
  },
  {
    // TODO: confirm spelling "Honhar Hub" (no earlier spelling exists on the site)
    name: "Honhar Hub",
    description: "A child venture of Embotics. STEM education for grades 1 to 12 through workshops and STEM kits.",
  },
  {
    name: "Print Theory",
    description:
      "A manufacturing business offering 3D printing, laser cutting and engraving, and engineering services from design to prototyping, plus workshops in CAD, PCB design, 3D printing, and laser cutting. I oversee the hardware side, including CAD modeling and nesting layouts. Co-founded with my class fellows.",
  },
  {
    name: "Rider Sense",
    description: "A helmet safety module. Details are in the featured projects.",
    projectSlug: "rider_sense",
  },
];
