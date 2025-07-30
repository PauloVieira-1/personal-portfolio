import { Container, Row, Col } from "react-bootstrap";
import Button from "../components/Button/Button";
import { customColors } from "../types";


const workExperience = [
  {
    title: "Software Developer",
    company: "Team HART",
    startDate: "Apr 2025",
    endDate: "Present",
    description: [
      "Backend development for a wearable sleeve with vibrating motors to assist visually impaired users in understanding emotional communication.",
      "Developed backend using Rust, Python, and C++.",
      "Worked on software infrastructure and CAD integration.",
    ],
  },
  {
    title: "Website Developer",
    company: "Soniccraft",
    startDate: "May 2024",
    endDate: "Present",
    description: [
      "Designed and deployed Sonicbeats’ website showcasing bespoke speakers crafted from recycled oak wood.",
      "Developed responsive UI with React, Bootstrap, and Three.js.",
      "Implemented server-side logic and database integration using Node.js and MongoDB.",
      "Optimized performance, ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Student Ambassador",
    company: "Xior Student Housing",
    startDate: "Apr 2024",
    endDate: "Present",
    description: [
      "Organized events and community activities to enhance student living experience.",
      "Acted as liaison between students and management.",
      "Provided support and guidance to residents.",
    ],
  },
  {
    title: "Student Consultant",
    company: "Solarwatt Benelux",
    startDate: "Mar 2025",
    endDate: "Jul 2025",
    description: [
      "Developed an online tool integrating with existing services to support SDG awareness.",
      "Built an interactive course platform with React, TypeScript, Bootstrap, and Node.js.",
      "Collaborated with a team to align technical solutions with sustainability goals.",
    ],
  },
  {
    title: "Deliverer",
    company: "Flink",
    startDate: "Oct 2023",
    endDate: "Oct 2024",
    description: [
      "Delivered grocery orders accurately and on time.",
      "Developed strong time management and organizational skills.",
      "Provided excellent customer service during deliveries.",
    ],
  },
];


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
      <Row className="">
        <Col className="text-white text-start bottom-fade-in-slow">
          <h2 className="fw-bold mb-4">Work Experience</h2>
        {workExperience.map((exp, index) => (
            <div className="mb-5" key={index}>
            <h4 className="fw-bold text-colorCoralLight">{exp.title}</h4>
            <h5 className="fst-italic fw-normal mb-3">{exp.company} &middot; {exp.startDate} &ndash; {exp.endDate}</h5>
            <ul className="fs-5 mt-2">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
          ))}
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
