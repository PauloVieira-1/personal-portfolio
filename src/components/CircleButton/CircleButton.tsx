import { Link } from "react-router-dom";

interface CircleButtonProps {
  text: string;
  color?: string;
  stateChange?: boolean;
  link?: string;
}

function CircleButton({ text, color, stateChange, link }: CircleButtonProps) {
  const bgClass = color ? `bg-colorBlue` : "bg-primary";
  const animationClass = stateChange ? "spin-out" : "spin-in";

  return (
    <Link to={link || "#"} className="text-decoration-none orbiter">
      <button className={`circle-button shadow  ${bgClass} ${animationClass}`}>
        <h2 className="fw-bold text-colorBlueLighter">{text}</h2>
      </button>
    </Link>
  );
}

export default CircleButton;
