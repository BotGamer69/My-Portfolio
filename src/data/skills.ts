export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Mechanical and CAD",
    skills: [
      "SolidWorks",
      "Sheet metal design",
      "Assemblies and motion animation",
      "2D drawings and flat patterns",
      "3D printing design",
      "Laser cutting layouts and nesting",
      "Design for manufacturing",
      "Prototyping",
    ],
  },
  {
    title: "Electronics and embedded",
    skills: [
      "PCB design",
      "EasyEDA",
      "Proteus",
      "Embedded systems",
      "Firmware development",
      "ESP32",
      "STM32",
      "Arduino",
      "PlatformIO",
      "Sensor integration",
      "CAN bus",
      "LoRa and GSM communication",
      "Raspberry Pi",
      "Motor and servo control",
    ],
  },
  {
    title: "Software",
    skills: [
      "Python",
      "C++",
      "ROS2",
      "MATLAB",
      "Machine learning (learning)",
      "React and TypeScript",
      "Basic web development",
      "VS Code",
    ],
  },
  {
    title: "Leadership",
    skills: [
      "Team leadership",
      "Teamwork",
      "Event planning and management",
      "Community and volunteer drives",
      "Resource mobilization",
      "Grant proposal writing",
      "Outreach and representation",
      "Project management",
    ],
  },
  {
    title: "Design",
    skills: ["Graphic design", "Brand identity design"],
  },
];
