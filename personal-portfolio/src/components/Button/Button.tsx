import { useState } from "react";

function Button({ color }: { color?: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className={`button rounded-4 shadow-button ${hovered ? "text-white" : ""}`}
      style={{
        // borderColor: color,
        transition: "box-shadow 0.3s ease",
        border: "none",
        color: color,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Click me
    </button>
  );
}

export default Button;
