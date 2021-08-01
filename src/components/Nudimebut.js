import React from "react";
import { Button, Container, Col, Row} from "react-bootstrap";
import './Nudimebut.css';
import { IoMdPlanet, IoMdMicrophone } from "react-icons/io";
import { GiSpeaker } from "react-icons/gi";
import { FaRegLightbulb, FaPhotoVideo, FaFacebook, FaGlobe, FaMortarPestle } from "react-icons/fa";
import { VscOrganization } from "react-icons/vsc";

function Nudimebut() {
  return (
    <div>
      <Container fluid="sm" className="cnb">
        <Row>
          <Col className="col-md-6 col-lg-12">
            <h2>
              <b>НУДИМЕ</b>
            </h2>
            <Button className="but1 h-40 d-inline-block align-middle " variant="dark text-white" >
            <IoMdPlanet className="iconsb" Icon size={18}/>  Простор
        </Button>
        <Button className="but1 h-40 d-inline-block align-middle " variant="dark text-white" >
        <FaMortarPestle className="iconsb" Icon size={18}/>  Space Kitchen
        </Button>
        <Button className="but1 h-40 d-inline-block align-middle " variant="dark text-white" >
        <FaGlobe className="iconsb" Icon size={18}/>  Логистика
        </Button>
        <Button className="but1 h-40 d-inline-block align-middle " variant="dark text-white" >
        <IoMdMicrophone className="iconsb" Icon size={18}/>  Техничка Поддршка
        </Button>
        </Col>
        </Row>
        <Row>
        <Col className="col-md-6 col-lg-11">
        <Button className="but1 h-40 d-inline-block align-middle " variant="dark text-white" >
        <GiSpeaker className="iconsb" Icon size={18}/>  Звук
        </Button>
        <Button className="but1 h-40 d-inline-block align-middle " variant="dark text-white" >
        <FaRegLightbulb className="iconsb" Icon size={18}/>  Светло
        </Button>
        <Button className="but1 h-40 d-inline-block align-middle " variant="dark text-white" >
        <VscOrganization className="iconsb" Icon size={18}/>  Помош при Организација
        </Button>
        <Button className="but1 h-40 d-inline-block align-middle " variant="dark text-white" >
        <FaPhotoVideo className="iconsb" Icon size={18}/>  Видео и Фотографија
        </Button>
        <br/><Button className="but1 h-40 d-inline-block align-middle " variant="dark text-white" >
        <FaFacebook className="iconsb" Icon size={18}/>  Промоција на Социјални Мрежи
        </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Nudimebut;
