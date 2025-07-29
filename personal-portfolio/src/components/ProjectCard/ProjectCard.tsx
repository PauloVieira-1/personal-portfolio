import { Container, Row, Col } from "react-bootstrap";
import Button from "../Button/Button";
import { customColors } from "../../types";
import CustomModal from "../Modal/Modal";
import { useState } from "react";
import type {Project} from "../../pages/ProjectsContent";

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
    <Container className="my-5 enlarge-small bottom-fade-in-slow " style={{ cursor: "pointer" }} onClick={() => setShowModal(true)}>

      <Row className="g-0 bg-colorBlue rounded-4 overflow-hidden shadow-lg card-content">
      <div className="p-3 d-flex ">
        {/* Image */}
        <Col md={5}>
          <img
            src={images[0]}
            alt={`${title} Screenshot`}
            className="img-fluid h-100 w-100 object-fit-cover rounded-start-3"
            style={{ objectFit: "cover", minHeight: "100%" }}
            />
        </Col>

        {/* Content */}
        <Col 
  md={7} 
  className="d-flex flex-column justify-content-center ps-5 py-4 text-light"
>
  <h3 className="fw-bold mb-2">{title}</h3>
  <h6 className="fw-lighter mb-4">{type}</h6>
  <p className="text-secondary mb-4">{description}</p>

  <div className="d-flex justify-content-end gap-1 mt-auto">
    {liveLink && (
      <a href={liveLink} target="_blank" rel="noopener noreferrer" className="ms-2">
        <Button color={customColors.colorTurquoise} text="Live" />
      </a>
    )}
    <a href={githubLink} target="_blank" rel="noopener noreferrer">
      <Button color={customColors.colorCoral} text="GitHub" />
    </a>
  </div>
</Col>
            </div>
      </Row>
    </Container>
    <CustomModal showModal={showModal} setShowModal={setShowModal} images={images} keyFeatures={keyFeatures} title={title} description={description} githubLink={githubLink} liveLink={liveLink} type={type} techStack={techStack}/>
    </>
  );
}

export default ProjectCard;
