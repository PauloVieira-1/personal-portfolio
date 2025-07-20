import { darkColors, lightColors } from "../types";

export type HomeContentType = {
  title: string;
  subtitle: string;
  buttonText: string;
  darkColor: string;
  lightColor: string;
};

export const HomeContent: Record<number, HomeContentType> = {
  0: {
    title: "Personal Portfolio",
    subtitle: "Click the arrows to change colors!",
    buttonText: "Home",
    darkColor: darkColors.colorWhite,
    lightColor: lightColors.colorBlack,
  },
  1: {
    title: "About Me",
    subtitle: "Learn more about my background and skills.",
    buttonText: "About",
    darkColor: darkColors.colorNavy,
    lightColor: lightColors.colorNavyLight,
  },
  2: {
    title: "Contact",
    subtitle: "Get in touch with me for collaborations or inquiries.",
    buttonText: "Contact",
    darkColor: darkColors.colorPurple,
    lightColor: lightColors.colorPurpleLight,
  },
  3: {
    title: "Projects",
    subtitle: "Explore my recent projects and contributions.",
    buttonText: "Projects",
    darkColor: darkColors.colorRose,
    lightColor: lightColors.colorRoseLight,
  },
};

