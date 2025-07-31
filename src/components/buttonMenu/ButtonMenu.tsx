import { Container, Row, Col } from "react-bootstrap";
import "./ButtonMenu.css";

function ButtonMenu() {
  return (
    <Container className="button-menu">
      <div className="rectangle">
        <div className="inner-circle">
          <div className="inner-inner-circle d-flex justify-content-center align-items-center">
            <p className="text">Menu</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ButtonMenu;
