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

function VerticalSlider({
  changePage,
  color,
}: {
  changePage: (page: number) => void;
  color: string;
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setCurrentPage(value);
    changePage(value);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLInputElement>) => {
    event.currentTarget.focus();
  };

  return (
    <Container fluid className="h-100 mt-5">
      <Row className="h-100">
        <Col
          xs={5}
          className="d-flex align-items-center justify-content-around float-end text-center flex-column"
        ></Col>
        <Col
          xs={4}
          className="d-flex align-items-center justify-content-center"
        >
          <div className="d-flex align-items-center justify-content-center h-100 mb-3">
            <div
              className="d-flex flex-column justify-content-between text-center"
              style={{
                height: "400px",
                marginRight: "10px",
              }}
            >
              {Object.entries(sliderText).map(([page, text]) => (
                <span
                  key={page}
                  className={`page text-center shadow-button ${currentPage === parseInt(page) ? `active bg-${color}` : ""}`}
                  onClick={() => handleChange({ target: { value: page } })}
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
                color: color,
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
