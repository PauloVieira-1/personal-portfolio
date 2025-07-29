import Sonicbeats from "../assets/sonicbeats.png"
import Sonicbeats2 from "../assets/sonicbeats2.png"
import Sonicbeats3 from "../assets/sonicbeats3.png"
import Sonicbeats4 from "../assets/sonicbeats4.png"
import Compass from "../assets/Compass2.png"
import Compass2 from "../assets/Compass.png"
import Compass3 from "../assets/Compass3.png"
import Compass4 from "../assets/Compass4.png"
import SW from "../assets/SW.png"
import SW2 from "../assets/SW2.png"
import SW3 from "../assets/SW.3png.png"
import SW4 from "../assets/SW4.png"
import Mapper from "../assets/mapper.png"
import Mapper1 from "../assets/mapper1.png"
import Mapper2 from "../assets/mapper2.png"


export interface Project {
  title: string;
  description: string;
  type: string;
  keyFeatures: string[];
  images: string[];
  techStack: string[];    
  githubLink?: string;
  liveLink?: string;
}

const cardData: Project[] = [
  {
    title: "SonicBeats",
    type: "Portfolio Website with E-Commerce",
    description: "A modern portfolio site for SonicBeats, showcasing custom speakers, sustainability values, and a shop. Built with React, Bootstrap, and MongoDB",
    keyFeatures: [
      "Fully responsive UI with Bootstrap grid",
      "Payment handling with Stripe",
      "Client-side data management with MongoDB",
      "Optimized for fast load times through image pre-rendering"
    ],
    images: [Sonicbeats, Sonicbeats2, Sonicbeats3, Sonicbeats4],
    techStack: [
      "React",
      "Bootstrap",
      "MongoDb",
      "CSS",
      "JavaScript"
    ],
    githubLink: "https://github.com/PauloVieira-1/sonicbeats",
    liveLink: "https://sonicbeats.nl"
  },
  {
    title: "Coffee Shop",
    type: "E-Commerce Website",
    description: "An e-commerce platform for a specialty coffee brand based in Eindhoven, featuring product pages, cart functionality, and a smooth checkout flow done with Stripe. Designed for speed, mobile responsiveness and features a modern appearence.",
    keyFeatures: [
      "Product catalog with dynamic listings",
      "Shopping cart and checkout system",
      "Responsive layout",
      "Clean product imagery and UI design"
    ],
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
    techStack: [
      "React",
      "Bootstrap",
      "CSS / SCSS",
      "TypeScript",
      "Node.js",
    ],
    githubLink: "https://github.com/PauloVieira-1/coffee-shop",
  },
  {
    title: "SolarTrace",
    type: "Sustainability Dashboard / Marekting Tool",
    description: "A web application built for Solarwatt Benelux to track solar panel performance, sustainability KPIs, and visualize energy data through interactive charts and graphs. Product also contains an educational course, with a free certificate upon completion.",
    keyFeatures: [
      "Certificate course for Solarwatt Benelux Products",
      "Data visualization with charts and graphs",
      "User-friendly dashboard interface",
      "Built for demonstrating sustainability at Solarwatt Benelux"
    ],
    images: [SW, SW2, SW3, SW4],
    techStack: [
      "React",
      "Leaflet",
      "Typecript",
      "CSS / Scss",
      "Tailwind"
    ],
    githubLink: "https://github.com/PauloVieira-1/SolarTrace",
  },
  {
  title: "Project Mapper",
  type: "VS Code Extension – Mind Mapping & UML Tool",
  description: "Project Mapper is a VS Code extension that allows users to create mind maps and UML diagrams directly within the editor. It helps with project planning by offering an intuitive interface to visualize project structures, organize ideas, and map dependencies seamlessly inside VS Code.",
  keyFeatures: [
    "Mind Mapping – Create and edit dynamic mind maps to structure ideas",
    "UML Diagramming – Design and manage UML diagrams for system and project planning",
    "Task Dependencies – Define and visualize dependencies between tasks",
    "VS Code Integration – Fully integrated as a VS Code extension",
    "Data Persistence – Save and load diagrams directly from the workspace"
  ],
  images: [Mapper2, Mapper1, Mapper],
  techStack: [
    "TypeScript",
    "VSCode API",
  ],
  githubLink: "https://github.com/PauloVieira-1/project-mapper",
},
{
  title: "Class Compass",
  type: "Chrome Extension – Student Planner & Organizer",
  description: "Class Compass is a modern Chrome extension designed to help users plan, track, and manage daily activities. It integrates seamlessly with Chrome and provides task management, event scheduling, reminders, and weather/location insights for better planning.",
  keyFeatures: [
    "Task Management – Create, edit, and delete tasks and assignments",
    "Event Scheduling – Organize deadlines and events with reminders and notifications",
    "Note Taking – Quickly store important miscellaneous information",
    "Reminders – Stay on top of important dates",
    "Responsive Design – Works on multiple aspect ratios"
  ],
  images: [Compass, Compass2, Compass3, Compass4],
  techStack: [
    "React",
    "Bootstrap",
    "ContextAPI",
    "ChromeAPI",
    "Geoapify API"
  ],
  githubLink: "https://github.com/PauloVieira-1/class-compass",
}
];

export default cardData;
