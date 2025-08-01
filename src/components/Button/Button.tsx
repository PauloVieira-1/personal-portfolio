import { useState } from "react";

interface ButtonProps {
  color?: string;
  text: string;
  changePage?: () => void;
  bgColor?: string;
}

function Button({ color, text, bgColor, changePage }: ButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className={`button rounded-5 shadow-button mx-4 px-5 fw-lighter ${hovered ? "text-white" : ""}`}
      style={{
        borderColor: color,
        transition: "box-shadow 0.3s ease",
        border: "none",
        color: bgColor ? "white" : color,
        backgroundColor: bgColor || "transparent",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={changePage}  
    >
      {text}
    </button>
  );
}

export default Button;
