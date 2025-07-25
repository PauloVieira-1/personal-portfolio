import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./slider.css";

const sliderText = {
  1: "Home",
  2: "About",
  3: "Projects",
  4: "Contact",
  5: "Resume",
};

function VerticalSlider() {
  const [currentPage, setCurrentPage] = useState(1);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    setCurrentPage(val);
    console.log(val);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLInputElement>) => {
    e.currentTarget.focus();
  };

  return (
    <Container fluid className="h-100 mt-5">
      <Row className="h-100">
        <Col
          className="d-flex align-items-center justify-content-around float-end text-center flex-column"
          xs={5}
        ></Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          xs={4}
        >
          <div className="d-flex align-items-center justify-content-center h-100 mb-3">
            <div
              className="d-flex flex-column justify-content-between"
              style={{ height: "400px", marginRight: "10px" }}
            >
              {Object.entries(sliderText).map(([page, text]) => (
                <span
                  key={page}
                  className={`page text-center   ${currentPage === parseInt(page) ? "active" : ""}`}
                  onClick={() => setCurrentPage(parseInt(page))}
                  style={{ cursor: "pointer" }}
                >
                  {text}
                </span>
              ))}
            </div>

            <input
              type="range"
              className="form-range custom-vertical-slider"
              style={{
                writingMode: "vertical-rl",
                height: "400px",
                width: "50px",
                borderRadius: "50px",
                outline: "none",
              }}
              step="1"
              value={currentPage}
              onChange={handleChange}
              onMouseDown={handleMouseDown}
              min="1"
              max="5"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default VerticalSlider;
