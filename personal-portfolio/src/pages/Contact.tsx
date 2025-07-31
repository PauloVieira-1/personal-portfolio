import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "../components/Button/Button";
import { customColors } from "../types";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_xedvn6r",
          "template_l2jjr0p",
          form.current,
          "lefNpA0eeHK4rVGKZ",
        )
        .then(
          (result) => {
            console.log(result.text);
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
          },
        );
    }
  };

  return (
    <Container className="my-0 text-light text-center">
      <Row className="justify-content-center">
        <Col lg={8} className="bg-blue px-5 py-4 rounded-4 shadow-lg">
          {/* Heading */}
          <h2 className="fw-bold mb-3 text-center">Get In Touch</h2>
          <p className="text-secondary text-center mb-4">
            Have a question, want to work together, or just say hi? Fill out the
            form below and I’ll get back to you as soon as I can.
          </p>

          {/* Contact Form */}
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                className="bg-dark text-light border-secondary"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                className="bg-dark text-light border-secondary"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                placeholder="Write your message..."
                className="bg-dark text-light border-secondary"
              />
            </Form.Group>

            {/* Submit Button */}
            <div className="d-flex justify-content-center mt-5 d-sm-flex d-md-none">
              <button type="submit" className="btn btn-colorCoral text-white rounded-5 mx-4"> Send  </button>
            </div>
               <div className="d-flex justify-content-center mt-5 d-none d-sm-flex">
              <Button color={customColors.colorCoral} text="Send" />
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;

