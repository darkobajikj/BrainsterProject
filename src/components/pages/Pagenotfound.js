import React, { Component } from "react";
import {Container, Row, Col} from "react-bootstrap";


class Pagenotfound extends Component {
  render() {
    return (
      <Container fluid="sm" style={{height: 324}}>
        <Row>
          <Col>
            <div className="error text-center">
              <h1>Ops!</h1>
              <h2>Error 404 Page Not Found!</h2>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Pagenotfound;

