import { Component } from "react";
import About from "./About";
import Projects from "./Projects";
import HomeText from "./HomeText";

interface Page {
  title: string;
  component: Component;
}

export const ContentPages = {
  1: {
    title: "Home",
    component: <HomeText />,
  },
  2: {
    title: "About",
    component: <About />,
  },
  3: {
    title: "Projects",
    component: <Projects />,
  },
};
