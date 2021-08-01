import React, { Component } from "react";
import {
  Card,
  CardGroup,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import brainster from "../images/brainster.jpg";
import konferenciskasala from "../images/konferenciskasala.jpg";
import salasobina from "../images/salasobina.jpg";
import ucilnica1 from "../images/ucilnica1.jpg";
import ucilnica2 from "../images/ucilnica2.jpg";
import ucilnica3 from "../images/ucilnica3.jpg";
import HOL from "../images/HOL.jpg";
import konferenciskiprostor from "../images/konferenciskiprostor.jpg";
import spacekitchen from "../images/spacekitchen.jpg";
import './Nscards.css';

class Nscards extends Component {
  render() {
    return (
      <div>
        <Container fluid="sm" className="nscardscontainer">
          <Row>
            <Col className="ncar" md={6} sm={12} xs={16}>
              <h2 className="nscar">Нашите <br/>простории</h2>
              <p className="nscartex">
                Комплетно адаптибилни. Една сала за 150 учесници или три помали
                сали за групи од по 50 учесника. Училници за од 25 до 40
                учесника. Избор од две локации.
                <br />
                <br />
                Пулт за прием. И најважното место за networking-Brainster
                Kitchen.
                <br />
                <br />
                Како го замислувате вашиот следен настан?
              </p>
            </Col>
            <Col className="nsccc">
              <CardGroup md={6} sm={12} xs={16}>
                <Card className="nscards">
                  <Card.Img className="nscardsimg" variant="top" src={brainster} />
                  <Card.Body>
                    <Card.Title>Brainster</Card.Title>
                  </Card.Body>
                </Card>
                <Card className="nscards">
                  <Card.Img className="nscardsimg" variant="top" src={konferenciskasala} />
                  <Card.Body>
                    <Card.Title>Конференциска сала</Card.Title>
                  </Card.Body>
                </Card>
                <Card className="nscards">
                  <Card.Img className="nscardsimg" variant="top" src={salasobina} />
                  <Card.Body>
                    <Card.Title>Сала со бина</Card.Title>
                  </Card.Body>
                </Card>
              </CardGroup>
              <CardGroup md={6} sm={12} xs={16}>
                <Card className="nscards">
                  <Card.Img className="nscardsimg" variant="top" src={ucilnica1} />
                  <Card.Body>
                    <Card.Title>Адаптилна училница</Card.Title>
                  </Card.Body>
                </Card>
                <Card className="nscards">
                  <Card.Img className="nscardsimg" variant="top" src={ucilnica2} />
                  <Card.Body>
                    <Card.Title>Училница</Card.Title>
                  </Card.Body>
                </Card>
                <Card className="nscards">
                  <Card.Img className="nscardsimg" variant="top" src={ucilnica3} />
                  <Card.Body>
                    <Card.Title>Училница</Card.Title>
                  </Card.Body>
                </Card>
              </CardGroup>
              <CardGroup>
                <Card className="nscards">
                  <Card.Img className="nscardsimg" variant="top" src={HOL} />
                  <Card.Body>
                    <Card.Title>Хол</Card.Title>
                  </Card.Body>
                </Card>
                <Card className="nscards">
                  <Card.Img className="nscardsimg" variant="top" src={konferenciskiprostor} />
                  <Card.Body>
                    <Card.Title>Канцелариски простор</Card.Title>
                  </Card.Body>
                </Card>
                <Card className="nscards">
                  <Card.Img className="nscardsimg" variant="top" src={spacekitchen} />
                  <Card.Body>
                    <Card.Title>Space Kitchen</Card.Title>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Nscards;
