export const lightColors = {
  colorPurpleLight: "colorPurpleLight",
  colorRoseLight: "colorRoseLight",
  colorCoralLight: "colorCoralLight",
};

export const darkColors = {
  colorPurple: "colorPurple",
  colorRose: "colorRose",
  colorCoral: "colorCoral",
};

export const customColors = {
  colorPurple: "#B01336",
  colorPurpleLight: "#510A32",

  colorRose: "#C72C41",
  colorRoseLight: "#D94356",

  colorCoral: "#EE4540",
  colorCoralLight: "#F36D66",
} as const;

export type CircleButtonProps = {
  text: string;
  color?: string;
};
