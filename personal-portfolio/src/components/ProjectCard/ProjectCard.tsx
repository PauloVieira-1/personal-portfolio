import { Container, Row, Col } from "react-bootstrap";
import Button from "../Button/Button";
import { customColors } from "../../types";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink: string;
}

function ProjectCard({
  title,
  description,
  image,
  githubLink,
  liveLink,
}: ProjectCardProps) {
  return (
    <Container className="my-5 enlarge-small bottom-fade-in-slow " style={{ cursor: "pointer" }}>
      <Row className="g-0 bg-colorBlue rounded-4 overflow-hidden shadow-lg">
        {/* Image */}
        <Col md={5}>
          <img
            src={image}
            alt={`${title} Screenshot`}
            className="img-fluid h-100 w-100 object-fit-cover"
            style={{ objectFit: "cover", minHeight: "100%" }}
          />
        </Col>

        {/* Content */}
        <Col md={7} className="d-flex flex-column justify-content-center p-4 text-light">
          <h3 className="fw-bold mb-2">{title}</h3>
          <p className="text-secondary mb-4">{description}</p>

          {/* Buttons side-by-side */}
          <div className="d-flex gap-3 mt-2">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Button color={customColors.colorCoral} text="GitHub" />
            </a>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <Button color={customColors.colorTurquoise} text="Live" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectCard;
