import CircleButton from "../components/CircleButton/CircleButton";
import { useState } from "react";
import { darkColors, lightColors, customColors} from "../types";
import { Container } from "react-bootstrap";

function Home() {

  const [currentColor, setCurrentColor] = useState(darkColors.colorNavy);
  const [secondaryColor, setSecondaryColor] = useState(lightColors.colorNavyLight);

  const handNextClick = () => {
    setSecondaryColor(getNextColor("light"));
    setCurrentColor(getNextColor("dark"));
  };

  const handPrevClick = () => {
    setSecondaryColor(getPrevColor("light"));
    setCurrentColor(getPrevColor("dark"));
  };

  const getNextColor = (colorType: "light" | "dark") => {
    if (colorType === "light") {
      const colors = Object.values(lightColors);
      const currentIndex = colors.indexOf(secondaryColor as string);
      console.log(currentIndex, colors[(currentIndex + 1) % colors.length]);
      return colors[(currentIndex + 1) % colors.length];
    } 
    if (colorType === "dark") {
      const colors = Object.values(darkColors);
      const currentIndex = colors.indexOf(currentColor as string);
      console.log(currentIndex, colors[(currentIndex + 1) % colors.length]);
      return colors[(currentIndex + 1) % colors.length];
    }
    return currentColor; // Fallback to current color if no match
  };

  const getPrevColor = (colorType: "light" | "dark") => {
    if (colorType === "light") {
      const colors = Object.values(lightColors);
      const currentIndex = colors.indexOf(secondaryColor as string);
      return colors[(currentIndex - 1 + colors.length) % colors.length];
    }
    if (colorType === "dark") {
      const colors = Object.values(darkColors);
      const currentIndex = colors.indexOf(currentColor as string);
      return colors[(currentIndex - 1 + colors.length) % colors.length];
    }
    return currentColor; 
  };

  return (
    <Container fluid className={`p-0 m-0 bg-${currentColor} transition`} style={{ height: "100vh" }}>
    <div className="d-flex justify-content-center align-items-center vh-100 text-black" style={{ backgroundColor: currentColor }}>
      <div className="d-flex align-items-center gap-4">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill={customColors[secondaryColor as keyof typeof customColors] || "currentColor"}
          className="bi bi-arrow-left-circle text-primary enlarge"
          viewBox="0 0 16 16"
          role="button"
          onClick={handPrevClick}
        >
    
          <path
            fillRule="evenodd"
            d="M8.354 11.354a.5.5 0 0 1-.708 0L4.5 8.207l3.146-3.147a.5.5 0 0 1 .708.708L5.707 8l2.647 2.646a.5.5 0 0 1 0 .708z"
          />
        </svg>

        <div
          className={`rounded-circle d-flex justify-content-center align-items-center bg-${secondaryColor}`}
          style={{ width: "350px", height: "350px" }}
        >
          <div
            className="rounded-circle bg-white d-flex justify-content-center align-items-center"
            style={{ width: "300px", height: "300px" }}
            id="circle"
          >
            <CircleButton text="Home" color={currentColor} />
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill={customColors[secondaryColor as keyof typeof customColors] || "currentColor"}
          className="bi bi-arrow-right-circle text-primary enlarge"
          viewBox="0 0 16 16"
          role="button"
          onClick={handNextClick}
        >
          <path
            fillRule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0L11.5 8l-3.146 3.146a.5.5 0 0 1-.708-.708L10.293 8 7.646 5.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
    </div>
    </Container>
  );
}

export default Home;
