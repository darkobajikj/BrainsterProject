import { React } from "react";
import { Button, Image, Container, Col, Row } from "react-bootstrap";
import prostorzanastani from "../images/prostorzanastani.jpg";
import "./Prnastani.css";
import { BsPlus } from "react-icons/bs";
import { Link } from "react-scroll";
import "./Prnastani.css";




function Prnastani() {

  return (
    <div className="pronasorse">
      <Container fluid="sm ">
        <Row>
          <Col className="pron"  md={6} sm={12} xs={16}>
            <h2 className="pronas">Простор за настани</h2>
            <p className="pronastex">
              Нашиот простор се прилагодува според потребите на вашиот настан.
              седум различни простори и Space Kitchen.
              <br/> 
              <br/>
              Наменски создадени да се
              пролагодуваат и менуваат во согласност со типот на настан кој го
              организирате.
              <br/>
              <br/>
              Организираме конференции до 150 учесници и обуки и
              предавање на групи до 20 учесници. Контактирај не за да ви
              хостираме одличен настан.
            </p>
            <Link to="proworse" smooth={true} duration={1000}>
              <Button className="prnastanibut" variant="text-warning">
              <BsPlus /> БУКИРАЈ НЕ
              </Button>
            </Link>
          </Col>
          <Col  md={6} sm={12} xs={16}>
            <Image fluid
              className="rounded float-left"
              style={{ width: 600 }}
              src={prostorzanastani}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Prnastani;
