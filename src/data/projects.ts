export interface ProjectImageMeta {
  /** Describes exactly what the photo or render shows. */
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  /** One line shown on cards. Hidden when empty. */
  summary: string;
  /** Fuller text shown on the projects page. */
  description?: string;
  /** Extra context such as course or team size. */
  context?: string;
  tags: string[];
  /** Hidden when empty. */
  status?: string;
  highlights?: string[];
  featured: boolean;
  /** Metadata for cover.* in src/assets/projects/<slug>/. The file itself is auto-detected. */
  image?: ProjectImageMeta;
  /** Hidden when empty. */
  demoVideoUrl?: string;
  /** Hidden when empty. */
  projectUrl?: string;
}

const COVER_WIDTH = 1600;
const COVER_HEIGHT = 1000;

export const projects: Project[] = [
  {
    slug: "embotics_rvm",
    title: "Embotics Reverse Vending Machine",
    summary: "A camera identifies bottles, servo gates sort them and a touchscreen rewards the user. Sheet metal design and firmware are my part.",
    description:
      "A smart IoT machine for plastic recycling. It identifies bottles with a camera, sorts them with servo-operated gates and a conveyor, and rewards users through a touchscreen interface. I designed the complete sheet metal manufacturing files and work on the firmware. The prototype is ready and is being refined before deployment.",
    tags: ["ESP32 S3", "PlatformIO", "SolidWorks", "DWIN HMI display", "ESP32 CAM", "Sheet metal design"],
    status: "Prototype ready",
    highlights: [
      "First place, All Pakistan Business Plan Competition 2025 (PKR 250,000 grant)",
      "PKR 150,000 grant, Iqbal Fest 2025",
      "Top 20 startups in Punjab",
    ],
    featured: true,
    // TODO: add src/assets/projects/embotics_rvm/cover.webp (photo of the machine or a SolidWorks render)
    image: {
      alt: "TODO: describe the Embotics reverse vending machine image once provided",
      width: COVER_WIDTH,
      height: COVER_HEIGHT,
    },
    // TODO: add demoVideoUrl and projectUrl when available
  },
  {
    slug: "livestock_monitoring",
    title: "Livestock Health Monitoring System",
    summary: "ESP32 neckbands send temperature, heart rate and movement over LoRa. A Raspberry Pi learns each animal's baseline and flags anomalies.",
    description:
      "Neckbands with an ESP32 measure body temperature, heart rate, and movement of farm animals (goats, sheep, buffalo, cows) and send the data over LoRa to a main hub. A Raspberry Pi running machine learning models learns each animal's normal baseline over 1 to 2 weeks and flags anomalies. Owners get an alert by GSM message, and vitals are shown on a web page and app.",
    context: "Final Year Project, team of 3",
    tags: ["ESP32", "LoRa", "Raspberry Pi", "Machine learning", "GSM"],
    status: "Hardware testing in progress",
    featured: true,
    // TODO: add src/assets/projects/livestock_monitoring/cover.webp
    image: {
      alt: "TODO: describe the livestock monitoring image once provided",
      width: COVER_WIDTH,
      height: COVER_HEIGHT,
    },
    // TODO: add demoVideoUrl and projectUrl when available
  },
  {
    slug: "ros2_navigation_robot",
    title: "ROS2 Room Mapping and Autonomous Navigation Robot",
    summary: "A robot that maps a room and navigates it on its own, rebuilt with validated hardware and results.",
    description:
      "A robot that maps a room and navigates it on its own, built for my Path Planning course. I am rebuilding it so the hardware and results are properly validated, and a research paper is in preparation.",
    tags: ["ROS2", "Python", "C++"],
    status: "Rebuild in progress",
    featured: true,
    // TODO: add src/assets/projects/ros2_navigation_robot/cover.webp
    image: {
      alt: "TODO: describe the ROS2 navigation robot image once provided",
      width: COVER_WIDTH,
      height: COVER_HEIGHT,
    },
    // TODO: add demoVideoUrl and projectUrl when available
  },
  {
    slug: "rider_sense",
    title: "Rider Sense",
    summary: "A module that attaches to any motorcycle helmet, detects a crash and sends an SOS to chosen contacts.",
    description:
      "A safety module that attaches to any motorcycle helmet. Version 1 detects a crash and automatically sends an SOS to predefined contacts. Version 2 plans a heads-up display with Google Maps navigation to keep phones out of riders' hands. It started as a semester project and a small prototype is built. It is now in the business model and market research stage, starting in Pakistan with ride-hailing and food-delivery fleets before individual riders.",
    tags: ["Embedded systems", "Crash detection", "IoT"],
    status: "Small prototype built",
    featured: true,
    // TODO: add src/assets/projects/rider_sense/cover.webp
    image: {
      alt: "TODO: describe the Rider Sense image once provided",
      width: COVER_WIDTH,
      height: COVER_HEIGHT,
    },
    // TODO: add demoVideoUrl and projectUrl when available
  },
  {
    slug: "self_balancing_robot",
    title: "Self-balancing robot",
    summary: "A self-balancing robot with hardware-in-the-loop testing, plus a digital twin of the robot.",
    tags: ["Hardware-in-the-loop", "Digital twin"],
    // TODO: add a status label once provided (hidden until then)
    featured: true,
    // TODO: add src/assets/projects/self_balancing_robot/cover.webp
    image: {
      alt: "TODO: describe the self-balancing robot image once provided",
      width: COVER_WIDTH,
      height: COVER_HEIGHT,
    },
    // TODO: add demoVideoUrl and projectUrl when available
  },
  {
    slug: "v12_engine",
    title: "V12 Engine",
    summary: "A V12 engine modeled in SolidWorks with every part mated, so it moves like a real engine when dragged. Includes a motion animation.",
    description:
      "A fully working V12 engine designed in SolidWorks, with all parts mated so it moves like a real engine when dragged, plus a motion animation. Made as a final course project.",
    tags: ["SolidWorks", "Assembly mates", "Motion animation"],
    status: "Completed",
    featured: true,
    // TODO: add src/assets/projects/v12_engine/cover.webp (src/assets/Main_assembly.png is a V12 render, but it is not 16:10)
    image: {
      alt: "TODO: describe the V12 engine image once provided",
      width: COVER_WIDTH,
      height: COVER_HEIGHT,
    },
    // TODO: add demoVideoUrl and projectUrl when available
  },

  // Everything below appears after the featured six on /projects, in this order.
  // TODO (each one below): add src/assets/projects/<slug>/cover.webp and a real alt text. Tags and status are hidden until provided.
  {
    slug: "obd_adapter",
    title: "Client OBD II to USB C breakout adapter",
    summary:
      "Custom 4-wire CAN bus and power passthrough, with connector sourcing, protection circuitry, and enclosure assembly.",
    tags: [],
    featured: false,
    image: { alt: "TODO: describe the OBD II adapter image once provided", width: COVER_WIDTH, height: COVER_HEIGHT },
  },
  {
    slug: "line_following_robot",
    title: "Line following robot",
    summary:
      "Microcontrollers and Embedded Systems course project with multiple sensors including a color sensor, dual-microcontroller architecture, SD card data logging, and object detection and avoidance.",
    tags: [],
    featured: false,
    image: { alt: "TODO: describe the line following robot image once provided", width: COVER_WIDTH, height: COVER_HEIGHT },
    // Merged with the older "Line Following Robot" entry. Its previous text was:
    // "Built an autonomous line-following robot with IR sensors and PID control for smooth navigation. Designed PCB and control algorithms."
    // Previous tags: Arduino, PID Control, PCB Design. TODO: confirm which details are correct.
  },
  {
    slug: "pallet_sorting_robot",
    title: "Indigenous pallet sorting robot",
    summary: "Course project for Mechatronics System Design.",
    tags: [],
    featured: false,
    image: { alt: "TODO: describe the pallet sorting robot image once provided", width: COVER_WIDTH, height: COVER_HEIGHT },
  },
  {
    slug: "hexapod_robot",
    title: "Hexapod robot",
    summary: "",
    tags: [],
    featured: false,
    image: { alt: "TODO: describe the hexapod robot image once provided", width: COVER_WIDTH, height: COVER_HEIGHT },
    // TODO: add a one line summary (hidden until then)
  },
  {
    slug: "sumo_robot",
    title: "Sheet metal sumo robot",
    summary: "2D flat pattern drawings, laser cut in 3 mm stainless steel.",
    tags: [],
    featured: false,
    image: { alt: "TODO: describe the sumo robot image once provided", width: COVER_WIDTH, height: COVER_HEIGHT },
  },
  {
    slug: "tracked_tank",
    title: "Tank with track system",
    summary: "Designed in SolidWorks, with a prototype manufactured by 3D printing.",
    tags: [],
    featured: false,
    image: { alt: "TODO: describe the tracked tank image once provided", width: COVER_WIDTH, height: COVER_HEIGHT },
  },
  {
    slug: "iss_assembly",
    title: "1:1 scale International Space Station assembly",
    summary: "Built in SolidWorks.",
    tags: [],
    featured: false,
    image: { alt: "TODO: describe the ISS assembly image once provided", width: COVER_WIDTH, height: COVER_HEIGHT },
  },
  // Older entries kept from the previous site, descriptions unchanged.
  {
    slug: "humanoid_robot",
    title: "3D Printed Humanoid Robot",
    summary:
      "Fully functional humanoid robot designed and fabricated using 3D printing technology, featuring advanced control systems and servo integration.",
    tags: ["3D Printing", "Arduino", "Servo Control", "CAD Design", "Programming"],
    featured: false,
    image: { alt: "TODO: describe the humanoid robot image once provided", width: COVER_WIDTH, height: COVER_HEIGHT },
  },
  {
    slug: "cnc_plotter",
    title: "CNC Plotter",
    summary:
      "Designed and developed a mini CNC plotter capable of drawing vector graphics using stepper motors and G-code.",
    tags: ["Stepper Motors", "G-code", "Arduino", "CNC Design"],
    featured: false,
    image: { alt: "TODO: describe the CNC plotter image once provided", width: COVER_WIDTH, height: COVER_HEIGHT },
  },
  {
    slug: "smart_irrigation",
    title: "Smart Irrigation System",
    summary: "Created an automated irrigation system with soil moisture sensing and IoT-based remote monitoring.",
    tags: ["IoT", "Sensors", "Microcontrollers"],
    featured: false,
    image: { alt: "TODO: describe the smart irrigation image once provided", width: COVER_WIDTH, height: COVER_HEIGHT },
  },
  {
    slug: "home_automation",
    title: "IoT-Based Home Automation",
    summary:
      "Smart home system with remote appliance control featuring custom PCB design, ESP32 microcontroller, and cloud integration for seamless automation.",
    tags: ["ESP32", "PCB Design", "IoT", "Mobile App", "Cloud Integration"],
    featured: false,
    image: { alt: "TODO: describe the home automation image once provided", width: COVER_WIDTH, height: COVER_HEIGHT },
    // The previous Projects page had a second version of this entry: "Developed a prototype home automation system
    // enabling remote control of appliances via mobile app. Integrated sensors, microcontrollers, and wireless communication."
  },
];

/** When false, non-featured projects without a real image render as text only instead of showing a placeholder. */
export const projectDisplay = {
  showPlaceholderForArchive: true,
};

export const featuredProjects = projects.filter((project) => project.featured);
