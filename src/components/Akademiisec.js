import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import akad from "../images/akad.jpg";
import "./Akademiisec.css";


function Akademiisec() {
  return (
      <Container fluid="sm">
      <Row>
          <Col md={6} sm={12} xs={18} className="aksec">
            <h2 className="ak">Академии</h2>
            <p className="aktex">
              Нашите академии ќе ти помогнат да ги совладаш најбараните вештини
              на денешницата преку интерактивна настава и практична работа на
              реални проекти.
              <br />
              <br />
              Инструктори кои се докажани експерти во својата област. Преку нив
              имаш можност да ги научиш и предвидиш предизвиците на иднината на
              работење и да се поврзеш со сегашните и идните врвни професионалци
              и компании.
              <br />
              <br />
              Академиите ќе ти го отворат патот кон кариера каква што посакуваш.
            </p>
          </Col>
          <Col md={6} sm={12} xs={18}>
            <Image fluid
              className="rounded"
              style={{ width: 600 }}
              src={akad}
            />
          </Col>
        </Row>
      </Container>
  );
}

export default Akademiisec;
