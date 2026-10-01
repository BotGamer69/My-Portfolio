export interface Service {
  title: string;
  description: string;
}

export const servicesIntro =
  "I take on freelance engineering work in three areas, and have delivered client projects since February 2024.";

export const services: Service[] = [
  {
    title: "CAD design",
    description:
      "Mechanical design in SolidWorks, sheet metal designs, 3D printing manufacturing designs, wearables, and prototypes.",
    // TODO: add a real client example
  },
  {
    title: "PCB design",
    description: "Custom board design for embedded and IoT products.",
    // TODO: add a real client example
  },
  {
    title: "Firmware development",
    description: "Embedded firmware for microcontroller-based products, including ESP32 with PlatformIO.",
    // TODO: add a real client example
  },
];
