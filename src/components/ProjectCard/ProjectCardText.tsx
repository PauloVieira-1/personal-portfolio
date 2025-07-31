import { Container, Row, Col } from "react-bootstrap";
import Button from "../Button/Button";
import { customColors } from "../../types";
import CustomModal from "../Modal/Modal";
import { useState } from "react";
import type { Project } from "../../pages/ProjectsContent";

function ProjectCard({
  title,
  description,
  keyFeatures,
  type,
  techStack,
  githubLink,
}: Project) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Container
        className="my-5 enlarge-small bottom-fade-in-slow"
        style={{ cursor: "pointer" }}
        onClick={() => setShowModal(true)}
      >
        <Row className="bg-colorBlue rounded-4 overflow-hidden shadow-lg card-content w-100">
          <div className="p-3 d-flex " style={{ width: "100%" }}>
            {/* Content */}
            <Col className="d-flex flex-column justify-content-center px-3 pt-4 text-light">
              <h3 className="fw-bold mb-2">{title}</h3>
              <h6 className="fw-lighter mb-4">{type}</h6>
              <p className="text-secondary mb-4">{description}</p>
            </Col>
          </div>
          <Row>
            <Col className="d-flex flex-wrap justify-content-center align-items-center p-3">
              {techStack.map((tech, i) => (
                <span
                  key={i}
                  className=" bg-colorBlueLight rounded-pill p-1 text-light fw-light mb-4 mx-2"
                >
                  {tech}
                </span>
              ))}
            </Col>
          </Row>
          <div className="d-flex justify-content-center align-items-center gap-1 mt-auto my-5 pt-3">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Button color={customColors.colorCoral} text="GitHub" />
            </a>
          </div>
        </Row>
      </Container>
      {/* <CustomModal
        showModal={showModal}
        setShowModal={setShowModal}
        keyFeatures={keyFeatures}
        title={title}
        description={description}
        githubLink={githubLink}
        type={type}
        techStack={techStack}
      /> */}
    </>
  );
}

export default ProjectCard;
