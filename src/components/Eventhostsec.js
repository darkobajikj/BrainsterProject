import {React} from "react";
import { Image, Container, Col, Row } from "react-bootstrap";
import './Eventhostsec.css';
import dsds from "../images/dsds.jpg"

function Eventhostsec() {
  

  return (
      <Container fluid="sm">
        <Row>
          <Col className="eventhosec" md={6} sm={12} xs={16}>
            <h2 className="eventho">Event Host</h2>
            <p className="eventhotex">
              Ања Макеска
              <br/>
              <br/>
              anja@brainster.co
              <br/>
              <br/>
              +389 (0)70 233 414
            </p>
          </Col>
          <Col md={6} sm={12} xs={16}>
            <Image fluid
              className="rounded float-left"
              style={{ width: 595 }}
              src={dsds}
            />
          </Col>
        </Row>
      </Container>
  );
}

export default Eventhostsec;
