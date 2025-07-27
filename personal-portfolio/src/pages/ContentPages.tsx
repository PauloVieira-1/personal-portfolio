import { Component } from "react";
import About from "./About"
import Projects from "./Projects"

interface Page {
    title: string
    component: Component
}

export const ContentPages = {
    1: {
        title: "About",
        component: <About />
    },
    2: {
        title: "Projects",
        component: <Projects />
    }
}