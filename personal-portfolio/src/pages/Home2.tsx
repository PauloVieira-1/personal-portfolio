import { Col, Row, Container } from "react-bootstrap";
import CircleButton from "../components/CircleButton/CircleButton";
import { useState, useEffect } from "react";
import { darkColors, lightColors, customColors } from "../types";
import { HomeContent } from "./HomeContent";
import Button from "../components/Button/Button";
import Socials from "../components/Socials/Socials";

function Home2() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentColor, setCurrentColor] = useState(darkColors.colorCoral);
  const [secondaryColor, setSecondaryColor] = useState(
    lightColors.colorCoralLight,
  );
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
    setCurrentPage(
      (prev) =>
        (prev - 1 + Object.keys(HomeContent).length) %
        Object.keys(HomeContent).length,
    );
    const prevColor = getPrevColor("dark");
    const prevSecondaryColor = getPrevColor("light");
    setCurrentColor(prevColor);
    setSecondaryColor(prevSecondaryColor);
    handleStateChange();
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

  return (
    <Container fluid className="h-100" style={{ height: "100vh" }}>
      <Row className="h-100">
        <Col
          className={`p-5 text-center`}
          xs={7}
          style={{
            background:
              "linear-gradient(to bottom right, #9c4f4fff -230%, #20232a 40%)",
          }}
        >
      <div className="d-flex justify-content-center align-items-center flex-row gap-3">
  <Button
    text="Home"
    color={customColors[secondaryColor as keyof typeof customColors]}
  />
  <Button
    text="About"
    color={customColors[secondaryColor as keyof typeof customColors]}
  />
  <Button
    text="Contact"
    color={customColors[secondaryColor as keyof typeof customColors]}
  />
</div>
<Row className="mt-5 d-flex flex-column justify-content-center align-items-center float-start">
  <Socials color={customColors[secondaryColor as keyof typeof customColors]}/>
</Row>
<Row
  className="mt-5 d-flex flex-column justify-content-end align-items-start text-end"
  style={{ height: "85%" }}
>
  <h1
    className="text-colorBlueLighter fw-bold display-1"
    style={{ fontSize: "7rem", lineHeight: 1, right: "-2rem", position: "relative" }}
  >
    Web <br />
  </h1>
  <p
 className="text-colorBlueLight display-1 fw-bold m-0"
                  style={{ lineHeight: 1, right: "-2rem", position: "relative"}}  >
Developer  </p>
</Row>

        </Col>
        <Col
          className="bg-colorBlueLight d-flex align-items-center justify-content-center"
          xs={5}
        >
          <div className="d-flex flex-column  w-100 h-100">
            <Row className="w-100">
              <div className="mb-4 ps-0 position-relative mb-5">
                <h2
                  className="text-colorBlue fw-bold display-1 m-0"
                  style={{
                    fontSize: "9rem",
                    lineHeight: 1,
                    position: "relative",
                    left: "-1rem",
                  }}
                >
                  Paulo
                </h2>
                <p
                  className="text-colorBlueLighter display-1 fw-bold m-0"
                  style={{ lineHeight: 1 }}
                >
                  Vieira
                </p>
              </div>
            </Row>
            <Row className="w-100 d-flex align-items-center ms-3 mt-5">
              <div className="d-flex align-items-center gap-4 mt-5">
                {/* Left arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  fill={
                    customColors[secondaryColor as keyof typeof customColors] ||
                    "currentColor"
                  }
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
                      backgroundColor:
                        customColors[
                          secondaryColor as keyof typeof customColors
                        ],
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
                        borderColor:
                          customColors[
                            currentColor as keyof typeof customColors
                          ],
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
                  fill={
                    customColors[secondaryColor as keyof typeof customColors] ||
                    "currentColor"
                  }
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
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home2;

