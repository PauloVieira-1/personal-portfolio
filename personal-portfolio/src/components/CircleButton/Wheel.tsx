import { useState } from "react";
import CircleButton  from "./CircleButton";
import { HomeContent } from "../../pages/HomeContent";
import { customColors, darkColors, lightColors } from "../../types";
import { Row } from "react-bootstrap";

type WheelProps = {
  stateChange: () => void;
};

export const Wheel = ({ stateChange }: WheelProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentColor, setCurrentColor] = useState(darkColors.colorCoral);
  const [secondaryColor, setSecondaryColor] = useState(lightColors.colorCoralLight);
const [revealed, setRevealed] = useState(false);


const handleStateChange = () => {
    setStateChange(!stateChange);
  };


  const handNextClick = () => {
    setCurrentPage((prev) => (prev + 1) % Object.keys(HomeContent).length);
    const nextColor = getNextColor("dark");
    const nextSecondaryColor = getNextColor("light");
    setCurrentColor(nextColor);
    setSecondaryColor(nextSecondaryColor);
    stateChange();
  };

  const handPrevClick = () => {
    setCurrentPage(
      (prev) =>
        (prev - 1 + Object.keys(HomeContent).length) %
        Object.keys(HomeContent).length,
    );
    const prevColor = getPrevColor("dark");
    const prevSecondaryColor = getPrevColor("light");
    setCurrentColor(prevColor);
    setSecondaryColor(prevSecondaryColor);
    stateChange();
  };

  const getPrevColor = (colorType: "light" | "dark") => {
    if (colorType === "light") {
      const colors = Object.values(lightColors);
      const currentIndex = colors.indexOf(secondaryColor as string);
      return colors[
        (currentIndex - 1 + colors.length) % colors.length
      ] as string;
    }
    if (colorType === "dark") {
      const colors = Object.values(darkColors);
      const currentIndex = colors.indexOf(currentColor as string);
      return colors[
        (currentIndex - 1 + colors.length) % colors.length
      ] as string;
    }
    return currentColor;
  };

  const getNextColor = (colorType: "light" | "dark") => {
    if (colorType === "light") {
      const colors = Object.values(lightColors);
      const currentIndex = colors.indexOf(secondaryColor as string);
      return colors[(currentIndex + 1) % colors.length] as string;
    }
    if (colorType === "dark") {
      const colors = Object.values(darkColors);
      const currentIndex = colors.indexOf(currentColor as string);
      return colors[(currentIndex + 1) % colors.length] as string;
    }
    return currentColor;
  };

  return (
    <Row className="w-100 d-flex align-items-center ms-3 mt-5">
      <div className="d-flex align-items-center gap-4 mt-5">
        {/* Left arrow */}
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

        {/* Orbiting system */}
        <div
          className="position-relative"
          style={{
            width: "350px",
            height: "350px",
          }}
        >
          {/* <div className="orbit-wrapper">
          <div className="orbiting-circle" />
        </div> */}

          {/* Main circular button area */}
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              width: "350px",
              height: "350px",
              overflow: "hidden",
              clipPath: "circle(50% at 50% 50%)",
              backgroundColor: customColors[secondaryColor as keyof typeof customColors],
              position: "relative",
              zIndex: 1,
            }}
          >
            <div
              className="d-flex justify-content-center align-items-center bg-colorBlueLight"
              style={{
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                clipPath: "circle(50% at 50% 50%)",
                borderStyle: "dashed",
                borderWidth: "3px",
                borderColor: customColors[currentColor as keyof typeof customColors],
              }}
            >
              <CircleButton
                stateChange={stateChange}
                text={HomeContent[currentPage].buttonText}
                color={currentColor}
                link={HomeContent[currentPage].link}
              />
            </div>
          </div>
        </div>

        {/* Right arrow */}
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
    </Row>
    );
}
