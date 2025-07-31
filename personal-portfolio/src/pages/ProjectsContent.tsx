import Sonicbeats from "../assets/sonicbeats.png";
import Sonicbeats2 from "../assets/sonicbeats2.png";
import Sonicbeats3 from "../assets/sonicbeats3.png";
import Sonicbeats4 from "../assets/sonicbeats4.png";
import Compass from "../assets/Compass2.png";
import Compass2 from "../assets/Compass.png";
import Compass3 from "../assets/Compass3.png";
import Compass4 from "../assets/Compass4.png";
import SW from "../assets/SW.png";
import SW2 from "../assets/SW2.png";
import SW3 from "../assets/SW.3png.png";
import SW4 from "../assets/SW4.png";
import Mapper from "../assets/mapper.png";
import Mapper1 from "../assets/mapper1.png";
import Mapper2 from "../assets/mapper2.png";

export interface Project {
  title: string;
  description: string;
  type?: string;
  keyFeatures?: string[];
  images?: string[];
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
}

const cardData: Project[] = [
  {
    title: "SonicBeats",
    type: "Portfolio Website with E-Commerce",
    description:
      "A modern portfolio site for SonicBeats, showcasing custom speakers, sustainability values, and a shop. Built with React, Bootstrap, and MongoDB",
    keyFeatures: [
      "Fully responsive UI with Bootstrap grid",
      "Payment handling with Stripe",
      "Client-side data management with MongoDB",
      "Optimized for fast load times through image pre-rendering",
    ],
    images: [Sonicbeats, Sonicbeats2, Sonicbeats3, Sonicbeats4],
    techStack: ["React", "Bootstrap", "MongoDb", "CSS", "JavaScript"],
    githubLink: "https://github.com/PauloVieira-1/sonicbeats",
    liveLink: "https://sonicbeats.nl",
  },
  {
    title: "Coffee Shop",
    type: "E-Commerce Website",
    description:
      "An e-commerce platform for a specialty coffee brand based in Eindhoven, featuring product pages, cart functionality, and a smooth checkout flow done with Stripe. Designed for speed, mobile responsiveness and features a modern appearence.",
    keyFeatures: [
      "Product catalog with dynamic listings",
      "Shopping cart and checkout system",
      "Responsive layout",
      "Clean product imagery and UI design",
    ],
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
    techStack: ["React", "Bootstrap", "CSS / SCSS", "TypeScript", "Node.js"],
    githubLink: "https://github.com/PauloVieira-1/coffee-shop",
  },
  {
    title: "SolarTrace",
    type: "Sustainability Dashboard / Marekting Tool",
    description:
      "A web application built for Solarwatt Benelux to track solar panel performance, sustainability KPIs, and visualize energy data through interactive charts and graphs. Product also contains an educational course, with a free certificate upon completion.",
    keyFeatures: [
      "Certificate course for Solarwatt Benelux Products",
      "Data visualization with charts and graphs",
      "User-friendly dashboard interface",
      "Built for demonstrating sustainability at Solarwatt Benelux",
    ],
    images: [SW, SW2, SW3, SW4],
    techStack: ["React", "Leaflet", "Typecript", "CSS / Scss", "Tailwind"],
    githubLink: "https://github.com/PauloVieira-1/SolarTrace",
  },
  {
    title: "Project Mapper",
    type: "VS Code Extension – Mind Mapping & UML Tool",
    description:
      "Project Mapper is a VS Code extension that allows users to create mind maps and UML diagrams directly within the editor. It helps with project planning by offering an intuitive interface to visualize project structures, organize ideas, and map dependencies seamlessly inside VS Code.",
    keyFeatures: [
      "Mind Mapping – Create and edit dynamic mind maps to structure ideas",
      "UML Diagramming – Design and manage UML diagrams for system and project planning",
      "Task Dependencies – Define and visualize dependencies between tasks",
      "VS Code Integration – Fully integrated as a VS Code extension",
      "Data Persistence – Save and load diagrams directly from the workspace",
    ],
    images: [Mapper2, Mapper1, Mapper],
    techStack: ["TypeScript", "VSCode API"],
    githubLink: "https://github.com/PauloVieira-1/project-mapper",
  },
  {
    title: "Class Compass",
    type: "Chrome Extension – Student Planner & Organizer",
    description:
      "Class Compass is a modern Chrome extension designed to help users plan, track, and manage daily activities. It integrates seamlessly with Chrome and provides task management, event scheduling, reminders, and weather/location insights for better planning.",
    keyFeatures: [
      "Task Management – Create, edit, and delete tasks and assignments",
      "Event Scheduling – Organize deadlines and events with reminders and notifications",
      "Note Taking – Quickly store important miscellaneous information",
      "Reminders – Stay on top of important dates",
      "Responsive Design – Works on multiple aspect ratios",
    ],
    images: [Compass, Compass2, Compass3, Compass4],
    techStack: [
      "React",
      "Bootstrap",
      "ContextAPI",
      "ChromeAPI",
      "GeoapifyAPI",
    ],
    githubLink: "https://github.com/PauloVieira-1/class-compass",
  },
];

const assignments = [
  {
    title: "Queue Simulation",
    description:
      "This project implements a discrete-event simulation model to analyze student-instructor interactions during practical sessions. It compares two strategies: one with randomized student arrival and instructor breaks, and another with fixed intervals. The simulation aims to evaluate the efficiency of each setup by analyzing metrics like student abandonment rates, waiting times, and instructor break utilization. The insights gained help optimize scheduling systems in educational environments.",
    type: "Discrete-Event Simulation",
    techStack: ["Python", "SimPy", "Statistics"],
    githubLink: "https://github.com/PauloVieira-1/queue-simulation",
  },
  {
    title: "Lox Interpreter",
    description:
      "This assignment is a full implementation of the Lox programming language interpreter in JavaScript, based on the 'Crafting Interpreters' book. The interpreter includes lexical analysis, parsing via recursive descent, abstract syntax tree (AST) construction, and a tree-walk evaluator. It supports features like variables, conditionals, loops, functions, and object-oriented programming with classes and inheritance. The project highlights a deep understanding of interpreter design and language processing.",
    type: "Programming Language Interpreter",
    techStack: ["JavaScript", "AST", "Parser", "Interpreter"],
    githubLink: "https://github.com/PauloVieira-1/Lox-Interpreter",
  },
  {
    title: "CS50 2024",
    description:
      "A comprehensive repository of assignments and projects completed as part of Harvard's CS50x 2024 course. It includes problem sets in C (memory, data structures, algorithms), Python (file I/O, APIs), SQL, JavaScript, and full-stack web development using Flask. Each assignment reflects a progressive mastery of computer science fundamentals, culminating in a final project that showcases practical application of all learned skills.",
    type: "Full-Stack & Algorithms Course",
    techStack: ["C", "Python", "SQL", "Flask", "JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/PauloVieira-1/CS50-2024",
  },
  {
    title: "Warehouse Automation",
    description:
      "This simulation models a fully automated warehouse and manufacturing system using SimPy in Python. It incorporates key components such as a Manufacturing Preparation Center, an AGV (Automated Guided Vehicle) system with dynamic task allocation and battery management, and robotic work centers. Several scenarios are simulated, including baseline operations, AGV fleet optimization, operator break handling, and system throughput analysis. The results help evaluate and optimize industrial process efficiency.",
    type: "Industrial Simulation / Operations Research",
    techStack: ["Python", "SimPy", "Jupyter"],
    githubLink: "https://github.com/PauloVieira-1/Warehouse-Automation",
  },
];

export { cardData, assignments };
