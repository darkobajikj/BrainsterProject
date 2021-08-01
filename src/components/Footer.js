import React from "react";
import {
  Navbar,
  Nav,
  Popover,
  OverlayTrigger,
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import brainster_space_logo from "../images/brainster_space_logo.svg";
import {
  FaRegCopyright,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import "./Footer.css";
import { useHistory, Link } from "react-router-dom";

function Footer() {
  const history = useHistory();

  return (
    <Container fluid className="footer m-0 p-0 width-110">
      <hr className="w-100 p-0 m-0" />
      <Row className="text-dark w-110 align-items-right">
        <Col className="korisnilinkovi" md={{ offset: 1 }}>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Link
              eventKey="disabled"
              disabled
              style={{ color: "black" }}
              className="text-dark"
            >
              <b>Корисни Линкови</b>
            </Link>
            <>
              {["top"].map((placement) => (
                <OverlayTrigger
                  trigger="click"
                  key={placement}
                  placement={placement}
                  overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                      <Popover.Title>Контакт</Popover.Title>
                      <Popover.Content>
                        <b>Емаил:</b>
                        <br />
                        anja@brainster.co
                        <br />
                        <b>Телефон:</b>
                        <br />
                        070 233 414
                      </Popover.Content>
                    </Popover>
                  }
                >
                  <Link className="text-dark">Контакт</Link>
                </OverlayTrigger>
              ))}
            </>
            <Link
              className="text-dark"
              href="Otvoreni Pozicii"
              to={{ pathname: "https://www.wearelaika.com" }}
              target="_blank"
            >
              Отворени Позиции
            </Link>
            <Link
              className="text-dark"
              to={{
                pathname: "https://medium.com/wearelaika/brainster-space-the-",
              }}
              target="_blank"
            >
              Галерија
            </Link>
            <Link
              className="text-dark"
              href="Kалендар"
              onClick={() => history.push("Calendar")}
            >
              Календар
            </Link>
          </Nav>
        </Col>
        <Col className="socijalnimrezi" md={{ offset: 2}}>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Link
              eventKey="disabled"
              disabled
              style={{ color: "black" }}
              className="text-dark"
            >
              <b>Социјални Мрежи</b>
            </Link>
          </Nav>
          <Link
            className="faceb"
            to={{ pathname: "https://www.facebook.com/brainster.co" }}
            target="_blank"
          >
            <FaFacebook />
          </Link>
          <Link
            className="link"
            to={{
              pathname: "https://www.linkedin.com/school/brainster-co",
            }}
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            className="instag"
            to={{ pathname: "https://www.instagram.com/brainsterco" }}
            target="_blank"
          >
            <FaInstagram />
          </Link>
        </Col>
        <Col className="brlogo" md={{ offset: 3 }}>
      <Navbar.Brand href="/">
            <Image
              fluid
              src={brainster_space_logo}
              width="100"
              height="100"
              className="d-inline-block"
              alt="logo"
            />
          </Navbar.Brand>
        </Col>
      </Row>
      <Row className="p-3 m-0 bg-secondary text-dark">
        <Col className="lastcol">
          <p className="text-center m-0">
            <b>COPYRIGHT</b>
            <FaRegCopyright />
            <b>BrainsterSpace. All Rights Reserved</b>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
