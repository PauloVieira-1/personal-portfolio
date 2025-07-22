import { useState } from "react";

interface ButtonProps {
  color?: string;
  text: string;
}

function Button({ color, text }: ButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className={`button rounded-5 shadow-button mx-4 px-5 fw-lighter ${hovered ? "text-white" : ""}`}
      style={{
        // borderColor: color,
        transition: "box-shadow 0.3s ease",
        border: "none",
        color: color,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
    </button>
  );
}

export default Button;
