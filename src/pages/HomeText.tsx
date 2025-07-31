import { Row } from "react-bootstrap";

function HomeText() {
  return (
    <>
      {/* Large screens */}
      <Row
        className="mt-5 d-flex flex-column justify-content-end align-items-start text-end d-none d-lg-flex"
        style={{ height: "85%" }}
      >
        <h1
          className="text-colorBlueLighter fw-bold display-1 left-to-right-fast"
          style={{
            fontSize: "7rem",
            lineHeight: 1,
            right: "0rem",
            position: "relative",
          }}
        >
          Web <br />
        </h1>
        <p
          className="text-colorBlueLight display-1 fw-bold m-0 left-to-right"
          style={{ lineHeight: 1, right: "0rem", position: "relative" }}
        >
          Developer{" "}
        </p>
      </Row>

      {/* Small screens - fixed bottom right */}
      <Row
        className="d-sm-flex d-lg-none position-absolute mb-4 me-2"
        style={{
          bottom: "1rem",
          right: "1rem",
          textAlign: "right",
        }}
      >
        {/* Small intro text */}
        <p
          className="text-colorBlueLight fw-semibold m-0 mb-1 fade-in"
          style={{
            fontSize: "1.2rem",
            opacity: 0.85,
          }}
        >
          Hi, I’m Paulo
        </p>

        <h1
          className="text-colorBlueLighter fw-bold left-to-right-fast"
          style={{
            fontSize: "7rem",
            lineHeight: 1,
            margin: 0,
          }}
        >
          Web <br />
        </h1>
        <p
          className="text-colorBlueLight fw-bold m-0 left-to-right"
          style={{
            lineHeight: 1,
            margin: 0,
            fontSize: "3.5rem",
          }}
        >
          Developer{" "}
        </p>
      </Row>
    </>
  );
}

export default HomeText;
