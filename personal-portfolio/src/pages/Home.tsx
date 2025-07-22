import CircleButton from "../components/CircleButton/CircleButton";
import { useState, useEffect } from "react";
import { darkColors, lightColors, customColors } from "../types";
import { Container } from "react-bootstrap";
import { HomeContent } from "./HomeContent";

function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentColor, setCurrentColor] = useState(darkColors.colorWhite);
  const [secondaryColor, setSecondaryColor] = useState(lightColors.colorBlack);
  const [stateChange, setStateChange] = useState(true);

  useEffect(() => {
    const initialColor = HomeContent[currentPage].darkColor;
    const initialSecondaryColor = HomeContent[currentPage].lightColor;
    setCurrentColor(initialColor);
    setSecondaryColor(initialSecondaryColor);
    setStateChange(true);
  }, [currentPage]);

  const handleStateChange = () => {
    setStateChange(!stateChange);
  };

  const handNextClick = () => {
    setCurrentPage((prev) => (prev + 1) % Object.keys(HomeContent).length);
    const nextColor = getNextColor("dark");
    const nextSecondaryColor = getNextColor("light");
    setCurrentColor(nextColor);
    setSecondaryColor(nextSecondaryColor);
    handleStateChange();
  };

  const handPrevClick = () => {
    setCurrentPage((prev) => (prev - 1 + Object.keys(HomeContent).length) % Object.keys(HomeContent).length);
    const prevColor = getPrevColor("dark");
    const prevSecondaryColor = getPrevColor("light");
    setCurrentColor(prevColor);
    setSecondaryColor(prevSecondaryColor);
    handleStateChange();
  };

  const getNextColor = (colorType: "light" | "dark") => {
    if (colorType === "light") {
      const colors = Object.values(lightColors);
      const currentIndex = colors.indexOf(secondaryColor as string);
      return colors[(currentIndex + 1) % colors.length];
    }
    if (colorType === "dark") {
      const colors = Object.values(darkColors);
      const currentIndex = colors.indexOf(currentColor as string);
      return colors[(currentIndex + 1) % colors.length];
    }
    return currentColor;
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
    <Container
      fluid
      className={`p-0 m-0 transition`}
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        zIndex: 1000,
        backgroundImage: `linear-gradient(to bottom, ${customColors[currentColor as keyof typeof customColors]} 20%, ${customColors[secondaryColor as keyof typeof customColors]})`,
      }}
    >
      <div
        className={`p-5 m-3 text-${currentColor === darkColors.colorWhite ? "black" : "white"}`}
        style={{ flexShrink: 0, zIndex: 100, position: "absolute" }}
      >
        <h1 className={stateChange ? "left-to-right-fast" : ""}>
          {HomeContent[currentPage].title}
        </h1>
        <p className={stateChange ? "left-to-right" : ""}>
          {HomeContent[currentPage].subtitle}
        </p>
      </div>

      <div
        style={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="d-flex align-items-center gap-4">
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
            {/* Orbiting circle */}
            <div className="orbit-wrapper">
              <div className="orbiting-circle" />
            </div>

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
                className="d-flex justify-content-center align-items-center bg-lightGrey1"
                style={{
                  width: "320px",
                  height: "320px",
                  borderRadius: "50%",
                  clipPath: "circle(50% at 50% 50%)",

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
      </div>
    </Container>
  );
}

export default Home;
