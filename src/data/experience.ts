export interface ExperienceEntry {
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface EducationEntry {
  degree: string;
  /** School name and city. */
  institution: string;
  period?: string;
  note?: string;
}

// Newest first.
export const experience: ExperienceEntry[] = [
  {
    title: "Co-founder",
    organization: "Rider Sense",
    period: "October 2025 to present",
    description:
      "Helmet-mounted safety module with crash detection and automatic SOS alerts. Small prototype built, now in business model and market research stage.",
  },
  {
    title: "Co-founder",
    organization: "Print Theory",
    period: "July 2025 to present",
    description:
      "Manufacturing business offering 3D printing, laser cutting and engraving, and engineering services. I oversee the hardware side, including CAD modeling and nesting layouts.",
  },
  {
    // TODO: confirm title. The previous site said "Cofounder & Director Hardware".
    title: "Co-founder",
    organization: "Embotics",
    period: "April 2025 to present",
    description:
      "IoT reverse vending machine for plastic recycling, plus engineering services. I designed the sheet metal manufacturing files and work on the firmware.",
  },
  {
    title: "Freelance Mechanical Design Engineer",
    organization: "Independent",
    period: "February 2024 to present",
    description:
      "Client work on engineering products and prototypes, wearables, sheet metal designs, and 3D printing manufacturing designs, with about 2 years of delivered projects.",
  },
];

// Newest first.
export const education: EducationEntry[] = [
  {
    degree: "BE Mechatronics Engineering",
    institution: "Air University, Main Campus, Islamabad",
    period: "2023 to present",
    note: "Final year",
    // TODO: add graduation date
  },
  {
    degree: "FSc Pre-Engineering",
    institution: "FG Sir Syed College, Rawalpindi",
    period: "2021 to 2023",
  },
  {
    degree: "Matriculation, Science (Biology)",
    institution: "APS SCO, Rawalpindi",
    period: "2019 to 2021",
  },
];
