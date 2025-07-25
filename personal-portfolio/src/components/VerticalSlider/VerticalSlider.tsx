import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./slider.css";

function VerticalSlider() {
  const [value, setValue] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    const snapVal = Math.round(val / 25) * 25;
    setValue(snapVal);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLInputElement>) => {
    e.currentTarget.focus();
  };

  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col
          className="d-flex align-items-center justify-content-around float-end text-center flex-column"
          xs={8}
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
              {[100, 75, 50, 25, 0].map((pct) => (
                <span key={pct} className="text-center shadow-button">
                  {pct}%
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
              value={value}
              onChange={handleChange}
              onMouseDown={handleMouseDown}
              min="0"
              max="100"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default VerticalSlider;
