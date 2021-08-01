import React from "react";
import {
  Card,
  CardDeck,
  Button,
} from "react-bootstrap";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import HristijanNosecka from "../images/HristijanNosecka.jpg";
import instruktori from "../images/instruktori.jpg";
import { FaCalendarAlt } from "react-icons/fa";
import "./Nastanisec.css";
import { useHistory } from "react-router-dom";

function Nastanisec() {

  const history = useHistory();

  return (
    <div>
      <h2 className="text-center display-4 m-0 pt-5">
        <b>Настани</b>
      </h2>
      <CardDeck className="pt-3 pl-4 pr-4 pb-5">
        <Card className="shadow">
          <Card.Img variant="top" src={instruktori} />
          <Card.Body>
            <Card.Title>
              <b>Codeworks</b>
            </Card.Title>
            <Card.Text>
              Вистинскиот настан за сите tech таленти кои сакаат да кодираат и
              да научат што е ново во tech заедницата. Настан кој ги поврзува
              mid programerite со IT компаниите. Deep Dive Intensive Seminar
              Ексклузивни семинари кои комбинираат три различни техники на
              учење.
            </Card.Text>
          </Card.Body>
          <div className="arr d-flex justify-content-end">
            <Link className="text-body" to={{ pathname: "https://codepreneurs.brainster.co" }} target="_blank">
              <IoArrowForwardCircleOutline />
            </Link>
          </div>
        </Card>
        <Card className="shadow">
          <Card.Img variant="top" src={HristijanNosecka} />
          <Card.Body>
            <Card.Title>
              <b>Deep Dive into Marketing</b>
            </Card.Title>
            <Card.Text>
              Deep Dive into Marketing се серија од интензивни семинари кои се
              наменски подготвени да ти помогнат да ги совладаш и предвидиш
              современите промени, предизвици и идните трендови во областа во
              маркетингот.
            </Card.Text>
          </Card.Body>
          <div className="arr d-flex justify-content-end">
            <Link className="text-body" to={{ pathname: "https://marketpreneurs.brainster.co" }} target="_blank">
              <IoArrowForwardCircleOutline />
            </Link>
          </div>
        </Card>
        <Card className="shadow">
          <Card.Img variant="top" src={instruktori} />
          <Card.Body>
            <Card.Title>
              <b>Deep Dive into Data Science</b>
            </Card.Title>
            <Card.Text>
              Deep Dive into Data Science се серија од интензивни семинари кои
              се наменски подготвени да ти помогнат да ги совладаш и предвидиш
              современите промени, предизвици и идните трендови во областа во
              Data Science.
            </Card.Text>
          </Card.Body>
          <div className="arr d-flex justify-content-end">
            <Link className="text-body" to={{ pathname: "https://datascience.brainster.co" }} target="_blank">
              <IoArrowForwardCircleOutline />
            </Link>
          </div>
        </Card>
      </CardDeck>
      <div className="d-flex justify-content-end pb-5 pl-10">
        <Link>
       <Button className="but123 h-40 d-inline-block" variant="dark text-warning" onClick={()=> history.push("Calendar")}>
            <FaCalendarAlt Icon size={18}/>  КАЛЕНДАР НА НАСТАНИ
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default Nastanisec;
