import { Col, Row, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { darkColors, lightColors, customColors } from "../types";
import { HomeContent } from "./HomeContent";
import Button from "../components/Button/Button";
import Socials from "../components/Socials/Socials";
import VerticalSlider from "../components/VerticalSlider/VerticalSlider";

function Home2() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentColor, setCurrentColor] = useState(darkColors.colorCoral);
  const [secondaryColor, setSecondaryColor] = useState(
    lightColors.colorCoralLight,
  );

  useEffect(() => {
    const initialColor = HomeContent[currentPage].darkColor;
    const initialSecondaryColor = HomeContent[currentPage].lightColor;
    setCurrentColor(initialColor);
    setSecondaryColor(initialSecondaryColor);
  }, [currentPage]);


  return (
    <>
    <Container fluid className="h-100" style={{ height: "100vh" }}>
      <Row className="h-100">
        <Col
          className={`p-5 text-center`}
          xs={8}
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
    className="text-colorBlueLighter fw-bold display-1 left-to-right-fast"
    style={{ fontSize: "7rem", lineHeight: 1, right: "-2rem", position: "relative" }}
    >
    Web <br />
  </h1>
  <p
 className="text-colorBlueLight display-1 fw-bold m-0 left-to-right"
 style={{ lineHeight: 1, right: "-2rem", position: "relative"}}  >
Developer  </p>
</Row>

        </Col>
        <Col
          className="bg-colorBlueLight d-flex align-items-center justify-content-center"
          xs={4}
          >
          <div className="d-flex flex-column  w-100 h-100">
            <Row className="w-100">
              <div className="mb-4 ps-0 position-relative mb-5">
                <h2
                  className="text-colorBlue fw-bold display-1 m-0 right-to-left"
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
                  className="text-colorBlueLighter display-1 fw-bold m-0 right-to-left-fast"
                  style={{ lineHeight: 1 }}
                  >
                  Vieira
                </p>
              </div>
            </Row>
            <Row className="w-100">
              <div className="d-flex justify-content-center align-items-center">
                <VerticalSlider
                  min={0}
                  max={100}
                  value={50}
                  onChange={(value) => setValue(value)}
                />
              </div>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
</>
  );
}

export default Home2;

