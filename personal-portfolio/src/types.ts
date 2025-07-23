export const lightColors = {
  colorRoseLight: "colorRoseLight",
  colorCoralLight: "colorCoralLight",
  colorTurquoiseLight: "colorTurquoiseLight",
};

export const darkColors = {
  colorRose: "colorRose",
  colorCoral: "colorCoral",
  colorTurquoise: "colorTurquoise",
};

export const customColors = {

  colorRose: "#C72C41",
  colorRoseLight: "#D94356",
  colorTurquoise: "#0f969c",

  colorCoral: "#EE4540",
  colorCoralLight: "#F36D66",
  colorTurquoiseLight: "#6Da5C0",


} as const;

export type CircleButtonProps = {
  text: string;
  color?: string;
};
