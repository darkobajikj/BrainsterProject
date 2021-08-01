import React, { useState } from "react";
import {
  Card,
  CardDeck,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import edukacija from "../images/edukacija.jpg";
import edukacija1 from "../images/edukacija1.jpg";
import edukacija2 from "../images/edukacija2.jpg";
import nastani from "../images/nastani.jpg";
import prostorzanastani from "../images/prostorzanastani.jpg";
import coworking from "../images/coworking.jpg";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import "./Cards.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Cards() {
  const history = useHistory();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [lgShow, setLgShow] = useState(false);

  return (
    <div>
      <h2 className="text-center display-4 m-0">
        <b>За Нас</b>
      </h2>
      <CardDeck className="pt-3 pl-4 pr-4">
        {/* Edukacija */}

        <Card className="shadow">
          <div className="cardinner">
            <Card.Img variant="top" src={edukacija} />
          </div>
          <Card.Body>
            <Card.Title>
              <b>Едукација</b>
            </Card.Title>
            <Card.Text>
              Научи практични вештини за трансформација во кариерата. Нашата
              специјалност е да ти помогнеме да го најдеш правилниот skill set
              кој ќе одговори на реалните потреби на пазарот на труд.
              организираме курсеви, академии и персонализирани обуки кои
              одговараат на реалните потреби на денешницата.
            </Card.Text>
          </Card.Body>
          <div className="arr d-flex justify-content-end">
            <Link
              to={{ pathname: "https://brainster.co" }}
              target="_blank"
              className="text-body"
            >
              <IoArrowForwardCircleOutline />
            </Link>
          </div>
        </Card>

        {/* Nastani */}

        <Card className="shadow">
          <div className="cardinner">
            <Card.Img variant="top" src={nastani} />
          </div>
          <Card.Body>
            <Card.Title>
              <b>Настани</b>
            </Card.Title>
            <Card.Text>
              Специјално курирани и организирани настани кои ги поврзуваат
              правите таленти со иновативните компании. идеката е да нашата tech
              заедница расте, се инспирира и креира преку овие настани.
            </Card.Text>
          </Card.Body>
          <div className="arr d-flex justify-content-end">
            <Link
              className="text-body"
              onClick={() => history.push("Eventspace")}
            >
              <IoArrowForwardCircleOutline />
            </Link>
          </div>
        </Card>

        {/* Coworking */}

        <Card className="shadow">
          <div className="cardinner">
            <Card.Img variant="top" src={coworking} />
          </div>
          <Card.Body>
            <Card.Title>
              <b>Coworking</b>
            </Card.Title>
            <Card.Text>
              Биди дел од tech заедницата на иноватори, кретивци и претприемачи.
              Резервирај стол во нашата shared office. Пичирај го твојот бизнис
              и нашиот тим заедно ќе одлучи секој месец со кого да ги дели
              своите канцеларии.
            </Card.Text>
          </Card.Body>
          <div className="arr d-flex justify-content-end">
            <Link className="text-body" href="/coworkingsec">
              <IoArrowForwardCircleOutline />
            </Link>
          </div>
        </Card>
      </CardDeck>
      <CardDeck className="pt-3 pl-4 pr-4 pb-5">
        {/* Prostorzanastani */}

        <Card className="shadow">
          <div className="cardinner">
            <Card.Img variant="top" src={prostorzanastani} />
          </div>
          <Card.Body>
            <Card.Title>
              <b>Простор за настани</b>
            </Card.Title>
            <Card.Text>
              Имаш идеја за обука или настан од tech областа? Ние имаме простор
              за реализација. Нашиот тим внимателно ги одбира и курира сите
              настани.
            </Card.Text>
          </Card.Body>
          <div className="arr d-flex justify-content-end">
            <Link
              className="text-body"
              onClick={() => history.push("Eventspace")}
            >
              <IoArrowForwardCircleOutline />
            </Link>
          </div>
        </Card>

        {/* Partnerstva so tech kompanii */}

        <Card className="shadow">
          <div className="cardinner">
            <Card.Img variant="top" src={edukacija1} />
          </div>
          <Card.Body>
            <Card.Title>
              <b>Партнерства со Tech компании</b>
            </Card.Title>
            <Card.Text>
              Целта и идејата е креирање на tech заедница која ќе се негува,
              расте и креира подобро утро за сите нас. Преку директно и
              индирекнто поврзување на tech талентите со компаниите.
            </Card.Text>
          </Card.Body>
          <div className="arr d-flex justify-content-end">
            <Link onClick={handleShow} className="text-body">
              <IoArrowForwardCircleOutline />
            </Link>
            <Modal show={show} onHide={handleClose} size="lg">
              <Modal.Header closeButton>
                <Modal.Title>
                  <b>Приклучи се</b>
                </Modal.Title>
              </Modal.Header>
              <Form>
                <Form.Group controlId="formGroupE" className="ml-2 mr-2">
                  <Form.Label>
                    <b>Име и Презиме (задолжително)</b>
                  </Form.Label>
                  <Form.Control
                    type="име и презиме"
                    placeholder="Име и Презиме"
                    size="sm"
                  />
                </Form.Group>
                <Form.Group controlId="formGroup" className="ml-2 mr-2">
                  <Form.Label>
                    <b>Име на Компанија (незадолжително)</b>
                  </Form.Label>
                  <Form.Control
                    type="име на компанија"
                    placeholder="Име на Компанијата"
                    size="sm"
                  />
                </Form.Group>
                <Form.Group controlId="formGro" className="ml-2 mr-2">
                  <Form.Label>
                    <b>Телефонски Број (задолжително)</b>
                  </Form.Label>
                  <Form.Control
                    type="телефонски број"
                    placeholder="Телефонски Број"
                    size="sm"
                  />
                </Form.Group>
                <Form.Group
                  className="ml-2 mr-2"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>
                    <b>Предлог за Соработка (незадолжително)</b>
                  </Form.Label>
                  <Form.Control as="textarea" rows={4} />
                </Form.Group>
              </Form>
              <Modal.Footer>
                <Button
                  className="zak"
                  variant="bg-warning"
                  onClick={handleClose}
                >
                  Исклучи
                </Button>
                <Button
                  className="but"
                  variant="dark text-warning"
                  onClick={handleClose}
                >
                  <FaArrowRight /> Испрати Форма
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </Card>

        {/* Inovacii za kompanii */}

        <Card className="shadow">
          <div className="cardinner">
            <Card.Img className="cardsimg" variant="top" src={edukacija2} />
          </div>
          <Card.Body>
            <Card.Title>
              <b>Иновации за компании</b>
            </Card.Title>
            <Card.Text>
              Нов концепт кој ќе им помогне на компаниите да преминат од стариот
              во новиот начин на работење. Подгответе ја вашата компанија за
              дигитална трансформација.
            </Card.Text>
          </Card.Body>
          <div className="arr d-flex justify-content-end">
            <Link onClick={setLgShow} className="text-body">
              <IoArrowForwardCircleOutline />
            </Link>
            <Modal
              size="lg"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  <b>Иновации за Компании</b>
                </Modal.Title>
              </Modal.Header>
              <Form>
                <Form.Group controlId="formGroupEmail" className="ml-2 mr-2">
                  <Form.Label>
                    <b>Име и Презиме</b>
                  </Form.Label>
                  <Form.Control
                    type="First name"
                    placeholder="Име и Презиме"
                    size="sm"
                  />
                </Form.Group>
                <Form.Group controlId="formGroupPassword" className="ml-2 mr-2">
                  <Form.Label>
                    <b>Име на Компанија</b>
                  </Form.Label>
                  <Form.Control
                    type="Last name"
                    placeholder="Име на Компанија"
                    size="sm"
                  />
                </Form.Group>
                <Form.Group
                  className="ml-2 mr-2"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>
                    <b>Потреби на Компанијата</b>
                  </Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Form.Group controlId="formGroupPassword" className="ml-2 mr-2">
                  <Form.Label>
                    <b>Емаил и Телефонски Број</b>
                  </Form.Label>
                  <Form.Control
                    type="Email address"
                    placeholder="Емаил и Телефонски Број"
                    size="sm"
                  />
                </Form.Group>
              </Form>
              <Modal.Footer>
                <Button
                  className="zak"
                  variant="bg-warning"
                  onClick={handleClose}
                >
                  Исклучи
                </Button>
                <Button
                  className="but"
                  variant="dark text-warning"
                  onClick={setLgShow}
                >
                  <FaArrowRight /> Испрати Форма
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </Card>
      </CardDeck>
    </div>
  );
}

export default Cards;
