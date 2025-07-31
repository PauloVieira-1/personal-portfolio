import { Row } from "react-bootstrap";

function HomeText() {
  return (
    <>
      {/* Large screens */}
      <Row
        className="mt-5 d-flex flex-column justify-content-end align-items-end text-end d-none d-lg-flex"
        style={{ height: "85%" }}
      >
        <h1
          className="text-colorBlueLighter fw-bold display-1 left-to-right-fast"
          style={{
            fontSize: "7rem",
            lineHeight: 1,
          }}
        >
          Web <br />
        </h1>
        <p
          className="text-colorBlueLight display-1 fw-bold m-0 left-to-right mb-2"
          style={{ lineHeight: 1 }}
        >
          Developer{" "}
        </p>

        <p
          className="text-colorBlueLighter fw-semibold m-0 mb-1 fade-in left-to-right mt-5 "
          style={{
            fontSize: "1.5rem",
            opacity: 0.85,
          }}
        >
          Hi, I’m Paulo and I like to build <br></br>things for the web
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
          Hi, I’m Paulo and I’m a{" "}
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

