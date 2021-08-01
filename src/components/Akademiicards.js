import React, { Component } from "react";
import {
  Card,
  CardDeck
} from "react-bootstrap";
import edukacija from "../images/edukacija.jpg";
import edukacija1 from "../images/edukacija1.jpg";
import edukacija2 from "../images/edukacija2.jpg";
import nastani from "../images/nastani.jpg";
import prostorzanastani from "../images/prostorzanastani.jpg";
import coworking from "../images/coworking.jpg";
import { Link } from "react-router-dom";
import { BsPeople, BsClock } from "react-icons/bs";
import { FaHandshake, FaRegCalendarAlt } from "react-icons/fa";
import "./Akademiicards.css";

class Cards extends Component {
  render() {
    return (
      <div className="carde">
        <CardDeck md={6} sm={12} xs={16} className="pt-3 pl-4 pr-4 mt-0">
          <Card className="accard bg-primary text-white shadow">
          <Link to={{ pathname: "https://design.brainster.co" }} target="_blank" className="text-white">
            <Card.Img className="colorcards" src={edukacija} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Академија за графички дизајн</Card.Title>
              <Card.Text>
              <br />
                <br />
                <br />
              </Card.Text>
              <Card.Text>
                <BsPeople /> Слободни места: 4
                <br />
                <FaRegCalendarAlt /> Уписи до: 26.08.2020
                <br />
                <BsClock /> Стани дизајнер за 7 месеци
                <br />
                <FaHandshake /> Партнери за вработување: 5
              </Card.Text>
            </Card.ImgOverlay>
            </Link>
          </Card>
          <Card className="accard bg-danger text-white shadow">
          <Link to={{ pathname: "https://marketpreneurs.brainster.co" }} target="_blank" className="text-white">
            <Card.Img className="colorcards" src={edukacija1} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Академија за дигитален маркетинг</Card.Title>
              <Card.Text>
                <br />
                <br />
                <br />
              </Card.Text>
              <Card.Text>
                <BsPeople /> Слободни места: 4
                <br />
                <FaRegCalendarAlt /> Уписи до: 26.08.2020
                <br />
                <BsClock /> Стани дизајнер за 7 месеци
                <br />
                <FaHandshake /> Партнери за вработување: 5
              </Card.Text>
            </Card.ImgOverlay>
            </Link>
          </Card>
          <Card className="accard bg-success text-white shadow">
          <Link to={{ pathname: "https://codepreneurs.brainster.co" }} target="_blank" className="text-white">
            <Card.Img className="colorcards" src={edukacija2} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Академија за front-end програмирање</Card.Title>
              <Card.Text>
              <br />
                <br />
                <br />
              </Card.Text>
              <Card.Text>
                <BsPeople /> Слободни места: 4
                <br />
                <FaRegCalendarAlt /> Уписи до: 26.08.2020
                <br />
                <BsClock /> Стани дизајнер за 7 месеци
                <br />
                <FaHandshake /> Партнери за вработување: 5
              </Card.Text>
            </Card.ImgOverlay>
            </Link>
          </Card>
        </CardDeck>
        <CardDeck md={6} sm={12} xs={16} className="pt-3 pl-4 pr-4 mt-0">
          <Card className="accard bg-info shadow">
          <Link to={{ pathname: "https://codepreneurs.brainster.co" }} target="_blank" className="text-white">
            <Card.Img className="colorcards" src={nastani} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Академија за Full-stack програмирање</Card.Title>
              <Card.Text>
              <br />
                <br />
                <br />
              </Card.Text>
              <Card.Text>
                <BsPeople /> Слободни места: 4
                <br />
                <FaRegCalendarAlt /> Уписи до: 26.08.2020
                <br />
                <BsClock /> Стани дизајнер за 7 месеци
                <br />
                <FaHandshake /> Партнери за вработување: 5
              </Card.Text>
            </Card.ImgOverlay>
            </Link>
          </Card>
           <Card className="accard bg-warning text-white shadow">
          <Link to={{ pathname: "https://datascience.brainster.co" }} target="_blank" className="text-white">
            <Card.Img className="colorcards" src={prostorzanastani} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Академија за Data science</Card.Title>
              <Card.Text>
              <br />
                <br />
                <br />
              </Card.Text>
              <Card.Text>
                <BsPeople /> Слободни места: 4
                <br />
                <FaRegCalendarAlt /> Уписи до: 26.08.2020
                <br />
                <BsClock /> Стани дизајнер за 7 месеци
                <br />
                <FaHandshake /> Партнери за вработување: 5
              </Card.Text>
            </Card.ImgOverlay>
            </Link>
          </Card>
          <Card className="accard bg-secondary text-white shadow">
          <Link to={{ pathname: "https://qa.brainster.co" }} target="_blank" className="text-white">
            <Card.Img className="colorcards" src={coworking} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Академија за Software testing</Card.Title>
              <Card.Text>
              <br />
                <br />
                <br />
              </Card.Text>
              <Card.Text>
                <BsPeople /> Слободни места: 4
                <br />
                <FaRegCalendarAlt /> Уписи до: 26.08.2020
                <br />
                <BsClock /> Стани дизајнер за 7 месеци
                <br />
                <FaHandshake /> Партнери за вработување: 5
              </Card.Text>
            </Card.ImgOverlay>
            </Link>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default Cards;
