export interface LeadershipRole {
  title: string;
  organization: string;
  period?: string;
  note?: string;
  /** Shown by default. Other roles sit behind "Show all". */
  primary: boolean;
}

export const leadership: LeadershipRole[] = [
  {
    title: "General Secretary",
    organization: "Wall of Hope, Air University chapter",
    period: "2026 to 2027",
    note: "Cleaning and food drives",
    primary: true,
  },
  {
    title: "President",
    organization: "Air Astronomical Society",
    period: "2025 to 2026",
    primary: true,
  },
  {
    title: "Deputy Head of Hardware",
    organization: "Robotics and Automation Society",
    period: "2024 to 2025",
    primary: true,
  },
  {
    title: "Student Ambassador",
    organization: "ICASE 2026, 4th International Conference on Advanced STEAM Education",
    note: "Representing Air University",
    primary: true,
  },
  {
    title: "Deputy Head of Graphics",
    organization: "Air Astronomical Society",
    period: "2024 to 2025",
    primary: false,
  },
  {
    title: "Deputy Head of Resource Mobilization",
    organization: "Youth Empowerment Club",
    period: "2024 to 2025",
    primary: false,
  },
  {
    title: "Deputy Head",
    organization: "Sumo Wars, Air Tech 2024",
    primary: false,
  },
  {
    title: "Management Team Member",
    organization: "Air MUN",
    primary: false,
  },
  {
    title: "Member",
    organization: "Robotics and Automation Society",
    period: "2023 to 2024",
    primary: false,
  },
  {
    title: "Volunteer",
    organization: "Women's Welfare Association",
    note: "Website and grant proposals",
    primary: false,
  },
];
