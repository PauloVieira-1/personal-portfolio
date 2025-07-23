import { darkColors, lightColors } from "../types";

export type HomeContentType = {
  title: string;
  subtitle: string;
  buttonText: string;
  darkColor: string;
  lightColor: string;
  link: string;
};

export const HomeContent: Record<number, HomeContentType> = {
  0: {
    title: "Personal Portfolio",
    subtitle: "Click the arrows to change colors!",
    buttonText: "Home",
    darkColor: darkColors.colorCoral,
    lightColor: lightColors.colorCoralLight,
    link: "/home",
  },
  1: {
    title: "About Me",
    subtitle: "Learn more about my background and skills.",
    buttonText: "About",
    darkColor: darkColors.colorRose,
    lightColor: lightColors.colorRoseLight,
    link: "/about",
  },
  2: {
    title: "Contact",
    subtitle: "Get in touch with me for collaborations or inquiries.",
    buttonText: "Contact",
    darkColor: darkColors.colorTurquoise,
    lightColor: lightColors.colorTurquoiseLight,
    link: "/contact",
  },
  3: {
    title: "Projects",
    subtitle: "Explore my recent projects and contributions.",
    buttonText: "Projects",
    darkColor: darkColors.colorRose,
    lightColor: lightColors.colorRoseLight,
    link: "/projects",
  },
  4: {
    title: "Skills",
    subtitle: "Discover the technologies and tools I work with.",
    buttonText: "Skills",
    darkColor: darkColors.colorCoral,
    lightColor: lightColors.colorCoralLight,
    link: "/skills",
  },
};
