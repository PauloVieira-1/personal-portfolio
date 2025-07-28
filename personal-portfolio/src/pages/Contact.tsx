import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "../components/Button/Button";
import { customColors } from "../types";

function Contact() {
  return (
    <Container className="my-0 text-light">
      <Row className="justify-content-center">
        <Col lg={8} className="bg-blue px-5 py-4 rounded-4 shadow-lg">
          {/* Heading */}
          <h2 className="fw-bold mb-3 text-center">Get In Touch</h2>
          <p className="text-secondary text-center mb-4">
            Have a question, want to work together, or just say hi?  
            Fill out the form below and I’ll get back to you as soon as I can.
          </p>

          {/* Contact Form */}
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                className="bg-dark text-light border-secondary"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="bg-dark text-light border-secondary"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Write your message..."
                className="bg-dark text-light border-secondary"
              />
            </Form.Group>

            {/* Submit Button */}
            <div className="text-center">
              <Button color={customColors.colorCoral} text="Send Message" />
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
