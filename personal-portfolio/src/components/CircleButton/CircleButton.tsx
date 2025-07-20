
function CircleButton({ text, color }: { text: string, color?: string }) {
  return (
    <button className={`circle-button shadow ${color ? `bg-${color}` : 'bg-primary'}`}>
      <h2 className="circle-button__icon">{text}</h2>
    </button>
  );
}

export default CircleButton;
