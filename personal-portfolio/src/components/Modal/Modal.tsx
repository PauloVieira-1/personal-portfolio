import { Modal, Row, Col, Carousel } from "react-bootstrap";
import Button from "../Button/Button";
import { customColors } from "../../types";
import type { Project } from "../../pages/ProjectsContent";

type ModalType = Project & {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function CustomModal({
  title,
  description,
  images,
  keyFeatures,
  type,
  githubLink,
  liveLink,
  techStack,
  showModal,
  setShowModal,
}: ModalType) {
  const handleClose = () => setShowModal(false);

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      centered
      size="lg"
      contentClassName="bg-colorBlueLight text-light rounded-4 border-0 shadow-lg overflow-hidden p-4"
    >
      <Modal.Body className="p-0">
        <div className="p-4">
          <Modal.Title className="fw-bold display-6 mb-3">{title}</Modal.Title>
          
          {/* Image Carousel */}
          <Carousel interval={null} className="my-4 rounded-3">
            {images.map((img, index) => (
              <Carousel.Item key={index}>
                <img
                  src={img}
                  alt={`${title} screenshot ${index + 1}`}
                  className="img-fluid w-100 object-fit-cover rounded-3"
                  style={{height: "400px"}}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          <p className="text-secondary my-5">{description}</p>

          <Row>
            {/* Features Column */}
            <Col md={6}>
              <h5 className="fw-semibold mb-2">Key Features</h5>
              <ul className="small text-secondary">
                {keyFeatures.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </Col>

            {/* Tech Stack Column */}
            <Col md={6}>
              <h5 className="fw-semibold mb-2">Tech Stack</h5>
              <div className="small text-secondary">
                {type}
                {techStack && (
                  <ul>
                    {techStack.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Col>
          </Row>

          {/* Buttons */}
          <div className="mt-4 d-flex gap-3">
            {githubLink && (
              <Button
                color={customColors.colorCoral}
                text="GitHub"
                onClick={() => window.open(githubLink, "_blank")}
                bgColor={customColors.colorCoralLight}
              />
            )}
            {liveLink && (
              <Button
                color={customColors.colorTurquoise}
                text="Live Demo"
                onClick={() => window.open(liveLink, "_blank")}
                bgColor={customColors.colorTurquoiseLight}
              />
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CustomModal;

