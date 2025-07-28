import Sonicbeats from "../assets/sonicbeats.png"

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
    type: "Portfolio Website",
    description: "A modern portfolio site for SonicBeats, showcasing custom speakers, sustainability values, and interactive 3D product views. Built with React, Bootstrap, and Three.js for immersive design.",
    keyFeatures: [
      "Fully responsive UI with Bootstrap grid",
      "Interactive 3D speaker preview with Three.js",
      "Dark mode and modern glassmorphism styling",
      "Optimized for fast load times"
    ],
    images: [Sonicbeats,"https://picsum.photos/200/300"],
    techStack: [
      "React",
      "Bootstrap",
      "Three.js",
      "CSS Glassmorphism",
      "JavaScript"
    ],
    githubLink: "https://github.com/PauloVieira-1/sonicbeats",
    liveLink: "https://paulovieira-1.github.io/sonicbeats/"
  },
  {
    title: "Coffee Shop",
    type: "E-Commerce Website",
    description: "An e-commerce platform for a specialty coffee brand, featuring product pages, cart functionality, and a smooth checkout flow. Designed for speed and mobile responsiveness.",
    keyFeatures: [
      "Product catalog with dynamic listings",
      "Shopping cart and checkout system",
      "Responsive mobile-first layout",
      "Clean product imagery and UI design"
    ],
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
    techStack: [
      "React",
      "Context API / Redux",
      "CSS Modules / SCSS",
      "JavaScript",
      "REST API integration"
    ],
    githubLink: "https://github.com/PauloVieira-1/coffee-shop",
    liveLink: "https://paulovieira-1.github.io/coffee-shop/"
  },
  {
    title: "SolarTrace",
    type: "Sustainability Dashboard",
    description: "A web application built for Solarwatt Benelux to track solar panel performance, sustainability KPIs, and visualize energy data through interactive charts and graphs.",
    keyFeatures: [
      "Real-time solar energy tracking",
      "Data visualization with charts and graphs",
      "User-friendly dashboard interface",
      "Built with sustainability-focused design"
    ],
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
    techStack: [
      "React",
      "Chart.js / D3.js",
      "Node.js (Backend)",
      "Express",
      "MongoDB",
      "REST API"
    ],
    githubLink: "https://github.com/PauloVieira-1/SolarTrace",
    liveLink: "https://paulovieira-1.github.io/SolarTrace/"
  },
  {
    title: "Project Mapper",
    type: "Geospatial Mapping Tool",
    description: "An interactive map application that visualizes geospatial data with location markers, filters, and API integration. Ideal for location analysis and real-time mapping.",
    keyFeatures: [
      "Interactive map with dynamic markers",
      "Location search and filtering",
      "API integration for geospatial data",
      "Responsive layout for mobile and desktop"
    ],
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
    techStack: [
      "React",
      "Leaflet / Mapbox GL JS",
      "TypeScript",
      "REST API",
      "CSS"
    ],
    githubLink: "https://github.com/PauloVieira-1/project-mapper",
    liveLink: "https://paulovieira-1.github.io/project-mapper/"
  },
  {
    title: "Class Compass",
    type: "Student Planner Application",
    description: "A scheduling and task management tool for students, helping organize classes, assignments, and deadlines with a clean and intuitive interface.",
    keyFeatures: [
      "Class scheduling and timetable view",
      "Assignment and deadline tracking",
      "Integrated API for academic data",
      "Modern responsive dashboard design"
    ],
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API"
    ],
    githubLink: "https://github.com/PauloVieira-1/class-compass",
    liveLink: "https://paulovieira-1.github.io/class-compass/"
  }
];

export default cardData;
