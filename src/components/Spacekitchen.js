import React, { Component } from "react";
import { Image, Container, Col, Row } from "react-bootstrap";
import gotvaci from "../images/gotvaci.jpg";
import gosti from "../images/gosti.jpg";
import baklava from "../images/baklava.jpg";
import kolaci from "../images/kolaci.jpg";
import "./Spacekitchen.css";

class Spacekitchen extends Component {
  render() {
    return (
      <Container fluid className="mt-20px" >
            <Row>
              <Col className="spaceco" xs={6} md={4} lg={4} md={{ span: 1, offset: 1 }}>
              <Image
              className="card2 rounded float-left"
              style={{ width: 380, height: 200 }}
              src={gosti}
            />
            <Image
              className="card3 rounded float-left "
              style={{width: 190, height: 200 }}
              src={kolaci}
            />
            <Image
              className="card4 rounded float-left "
              style={{ width: 190, height: 200 }}
              src={baklava}
            />
            <Row>
            <Col md={{ span: 2, offset: 2 }} md={4} xs={6}>
            <Image
              className="rounded"
              style={{ width: 380, height:400 }}
              src={gotvaci}
            />
            </Col>
            </Row>
            </Col>
      <Col className="spacecol float-right" md={4} md={{ span: 3, offset: 3 }}>
                <br />
                <br />
                <h2 className="spaceh">Space Kitchen</h2>
                <p className="spacetex">
                  Место каде сите настани започнуваат и завршуваат.
                  <br /> Место каде нашиот тим готви и експериментира.
                  <br /> Нашата кујна има само едно правило.
                  <br />
                  <br />
                  Храната мора да биде вегетаријанска. Пијалок, кафе
                  <br /> или мезе. Вие одберете вид на кетеринг и ние ќе го
                  <br /> обезбедиме.
                </p>
                </Col>
                </Row>
            </Container>
    );
  }
}

export default Spacekitchen;
