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
  images,
  type,
  techStack,
  githubLink,
  liveLink,
}: Project) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Container
        className="my-5 enlarge-small bottom-fade-in-slow"
        style={{ cursor: "pointer" }}
        onClick={() => setShowModal(true)}
      >
        <Row className="g-0 bg-colorBlue rounded-4 shadow-lg card-content p-4 align-items-center">
          {/* Image column */}
          <Col
            xs={12}
            md={5}
            className="order-1 h-100 d-flex justify-content-center align-items-center p-3" 
          >
            <img
              src={images ? images[0] : ""}
              alt={`${title} Screenshot`}
              className="img-fluid rounded-3"
              style={{ objectFit: "cover", width: "100%", minHeight: "300px" }}
            />
          </Col>

          {/* Content column */}
          <Col
            xs={12}
            md={7}
            className="d-flex flex-column justify-content-center ps-0 ps-md-5 py-4 text-light order-2"
          >
            <h3 className="fw-bold mb-2">{title}</h3>
            <h6 className="fw-lighter mb-4">{type}</h6>
            <p className="text-secondary mb-4 text-wrap">{description}</p>

            <div className="d-flex justify-content-end gap-1 mt-auto">
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-2"
                >
                  <Button color={customColors.colorTurquoise} text="Live" />
                </a>
              )}
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Button color={customColors.colorCoral} text="GitHub" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <CustomModal
        showModal={showModal}
        setShowModal={setShowModal}
        images={images}
        keyFeatures={keyFeatures}
        title={title}
        description={description}
        githubLink={githubLink}
        liveLink={liveLink}
        type={type}
        techStack={techStack}
      />
    </>
  );
}

export default ProjectCard;
