import type { ReactElement } from "react";
import About from "./About";
import Projects from "./Projects";
import HomeText from "./HomeText";
import Contact from "./Contact";
import { darkColors, lightColors } from "../types";
import Resume from "./Resume";

interface Page {
  title: string;
  component: ReactElement;
  darkColor: string;
  lightColor: string;
  link: string;
}

export const ContentPages: Record<number, Page> = {
  1: {
    title: "Home",
    component: <HomeText />,
    darkColor: darkColors.colorCoral,
    lightColor: lightColors.colorCoralLight,
    link: "/home",
  },
  2: {
    title: "About",
    component: <About />,
    darkColor: darkColors.colorRose,
    lightColor: lightColors.colorRoseLight,
    link: "/about",
  },
  3: {
    title: "Projects",
    component: <Projects />,
    darkColor: darkColors.colorCoral,
    lightColor: lightColors.colorCoralLight,
    link: "/projects",
  },
  4: {
    title: "Contact",
    component: <Contact />,
    darkColor: darkColors.colorCoral,
    lightColor: lightColors.colorCoralLight,
    link: "/contact",
  },
  5: {
    title: "Resume",
    component: <Resume />,
    darkColor: darkColors.colorRose,
    lightColor: lightColors.colorRoseLight,
    link: "/resume",
  },
};
