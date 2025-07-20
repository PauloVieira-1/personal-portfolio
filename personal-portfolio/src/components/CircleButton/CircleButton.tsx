
interface CircleButtonProps {
  text: string;
  color?: string;        
  stateChange?: boolean;  
}

function CircleButton({ text, color, stateChange }: CircleButtonProps) {
  const bgClass = color ? `bg-${color}` : 'bg-primary';
  const animationClass = stateChange ? 'spin-out' : 'spin-in';

  return (
    <button className={`circle-button shadow orbiter ${bgClass} ${animationClass}`}>
      <h2 className="circle-button__icon">{text}</h2>
    </button>
  );
}

export default CircleButton;
