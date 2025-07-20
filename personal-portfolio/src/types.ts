export const lightColors = {
    colorBlack: "colorBlack",
  colorNavyLight: "colorNavyLight",
  colorPurpleLight: "colorPurpleLight",
  colorRoseLight: "colorRoseLight",
  colorCoralLight: "colorCoralLight",
};

export const darkColors = {
    colorWhite: "colorWhite",
  colorNavy: "colorNavy",
  colorPurple: "colorPurple",
  colorRose: "colorRose",
  colorCoral: "colorCoral",
};



export const customColors = {
  colorWhite: "#ffffff",
  colorBlack: "#000000",

  colorNavy: "#2d4d72",
  colorNavyLight: "#c6d1dd",

  colorPurple: "#695279",
  colorPurpleLight: "#d4c8dc",

  colorRose: "#bf657c",
  colorRoseLight: "#ebc5cf",

  colorCoral: "#f96e73",
  colorCoralLight: "#fbcfd0",


} as const;



export type CircleButtonProps = {
  text: string;
  color?: string;
};

