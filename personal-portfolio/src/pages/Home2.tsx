import { Col, Row, Container, Offcanvas, Button as BsButton } from "react-bootstrap";
import { useState, useEffect } from "react";
import { lightColors, customColors } from "../types";
import { ContentPages } from "./ContentPages";
import Button from "../components/Button/Button";
import Socials from "../components/Socials/Socials";
import VerticalSlider from "../components/VerticalSlider/VerticalSlider";

function Home2() {
  const [currentPage, setCurrentPage] = useState(1);
  const [secondaryColor, setSecondaryColor] = useState(
    lightColors.colorCoralLight,
  );

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const initialSecondaryColor = ContentPages[currentPage].lightColor;
    setSecondaryColor(initialSecondaryColor);
  }, [currentPage]);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <Container fluid style={{ height: "100vh" }}>
        <Row className="h-100">
          {/* Main Content */}
          <Col
            className="p-5 text-center"
            xs={12} lg={8}
            style={{
              background:
                "linear-gradient(to bottom right, #9c4f4fff -230%, #20232a 40%)",
            }}
          >
            {/* Mobile Menu Toggle (Small devices only) */}
            <div className="d-lg-none mb-3 text-start rounded-5">
              <BsButton
                variant="outline-light"
                onClick={toggleMenu}
                style={{
                  borderColor: customColors[secondaryColor as keyof typeof customColors],
                  color: customColors[secondaryColor as keyof typeof customColors]
                }}
                className="rounded-5 px-4"
              >
                ☰ Menu
              </BsButton>
            </div>

            {/* Offcanvas Menu for Small Devices */}
            <Offcanvas show={showMenu} onHide={toggleMenu} placement="start" className="bg-colorBlueLight">
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body className="text-center d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex flex-column gap-5">
                  <div onClick={() => setCurrentPage(1)}>
                    <Button text="Home" color={customColors[secondaryColor as keyof typeof customColors]}/>
                  </div>
                  <div onClick={() => setCurrentPage(2)}>
                    <Button text="About" color={customColors[secondaryColor as keyof typeof customColors]}/>
                  </div>
                  <div onClick={() => setCurrentPage(3)}>
                    <Button text="Contact" color={customColors[secondaryColor as keyof typeof customColors]}/>
                  </div>
                  <div onClick={() => setCurrentPage(4)}>
                    <Button text="Projects" color={customColors[secondaryColor as keyof typeof customColors]}/>
                  </div>
                  <div onClick={() => setCurrentPage(5)}>
                    <Button text="Resume" color={customColors[secondaryColor as keyof typeof customColors]}/>
                  </div>
                </div>
              </Offcanvas.Body>
            </Offcanvas>

            <Row className="mt-5 d-flex flex-column justify-content-center align-items-center float-start">
              <Socials color={customColors[secondaryColor as keyof typeof customColors]} />
            </Row>

            <Row className="ms-5 mt-5" style={{ height: "85%" }}>
              <Container
                className="ps-5 mt-5"
                style={{ overflow: "scroll", height: "70vh" }}
              >
                {ContentPages[currentPage]?.component}
              </Container>
            </Row>
          </Col>

          {/* Sidebar only on large+ */}
          <Col
            className="bg-colorBlueLight d-none d-lg-flex align-items-center justify-content-center"
            lg={4}
          >
            <div className="d-flex flex-column w-100 h-100">
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
                  <VerticalSlider changePage={setCurrentPage} color={secondaryColor} />
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
