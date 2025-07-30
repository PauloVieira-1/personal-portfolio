import { Container, Row, Col } from "react-bootstrap";
import Button from "../components/Button/Button";
import { customColors } from "../types";

function Resume() {
  return (
    <Container>
      <Row className="mb-5">
        <Col className="text-white text-start">
          <h1 className="display-3 fw-bold mb-2 bottom-fade-in-fast">Resume</h1>
          <h2 className="fs-3 text-danger mb-4 bottom-fade-in-fast">My Projects & Experience</h2>
        </Col>
      </Row>

      {/* Work Experience */}
      <Row>
        <Col className="text-white text-start">
          <h2 className="fw-bold mb-4">Work Experience</h2>

          {/* Job 1 */}
          <div className="mb-5">
            <h4 className="fw-bold">Software Engineering Intern</h4>
            <h5 className="">ABC Tech Solutions · Jun 2024 – Aug 2024</h5>
            <ul className="fs-5  mt-2">
              <li>Built reusable React components for an internal dashboard using Bootstrap.</li>
              <li>Improved page load time by 30% by optimizing API calls and rendering logic.</li>
              <li>Collaborated in an Agile team with daily standups and weekly demos.</li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="mb-5">
            <h4 className="fw-bold">Freelance Web Developer</h4>
            <h5 className="">Self-employed · Jan 2023 – Present</h5>
            <ul className="fs-5  mt-2">
              <li>Developed custom websites and e-commerce solutions using React and TypeScript.</li>
              <li>Delivered responsive, mobile-friendly UIs using Bootstrap and SCSS.</li>
              <li>Integrated payment gateways, CMS platforms, and REST APIs.</li>
            </ul>
          </div>

          {/* Job 3 */}
          <div className="mb-5">
            <h4 className="fw-bold">Teaching Assistant (CS Fundamentals)</h4>
            <h5 className="">University of XYZ · Sep 2022 – May 2023</h5>
            <ul className="fs-5  mt-2">
              <li>Helped students grasp core CS concepts like data structures and algorithms.</li>
              <li>Led weekly lab sessions and assisted in grading assignments.</li>
              <li>Mentored project groups during the final term web development assignment.</li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-white text-center mt-2">
        <Button color={customColors.colorCoral} text="Download Resume" bgColor={customColors.colorCoral} />
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
