import { Row } from "react-bootstrap";
function HomeText() {
  return (
    <Row
      className="mt-5 d-flex flex-column justify-content-end align-items-start text-end"
      style={{ height: "85%" }}
    >
      <h1
        className="text-colorBlueLighter fw-bold display-1 left-to-right-fast"
        style={{
          fontSize: "7rem",
          lineHeight: 1,
          right: "0rem", //should be -2
          position: "relative",
        }}
      >
        Web <br />
      </h1>
      <p
        className="text-colorBlueLight display-1 fw-bold m-0 left-to-right"
        style={{ lineHeight: 1, right: "0rem", position: "relative" }} //should be -2
      >
        Developer{" "}
      </p>
    </Row>
  );
}

export default HomeText;
