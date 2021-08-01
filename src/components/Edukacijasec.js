import {React, Component} from "react";
import { Button, Image, Container, Col, Row   } from "react-bootstrap";
import edukacija2 from "../images/edukacija1.jpg";
import edukacija1 from "../images/edukacija2.jpg";
import './Edukacijasec.css';





export default class Edukacijasec extends Component {
    constructor(props) {
      super(props);
      
      
      const eukationtext = <p>Дали си подготвен да одговориш на потребите на иднината.
      Вистинските курсеви, академии и семинари кои ќе ти овозможат
      кариерна трансформација во областа на дигитален маркетинг, дизајн,
      програмирање и Data Science.</p>;

      const mykomptext = <p>Нов концепт кој ќе им помогне на компаниите да преминат од стариот во новиот начин на работење. Подгответе ја вашата компанија за дигитална трансформација.</p>
      
      
      
      this.state = {
        title: ["Едукација", "За Компании"],
        text:[eukationtext, mykomptext],
        images: [edukacija1,
          edukacija2],
          idx: 0
      };
    }

  

    handleNext = () => {
      this.setState({
        idx: 1
      });
    };

    render(){
    return (
      <Container fluid="sm" className="educont">
        <Row>
          <Col className="edsec" md={6} sm={12} xs={16}>
            <div className="text-slide">
            <h2 className="ed">{this.state.title[this.state.idx]}</h2>
            <p className="edtex">{this.state.text[this.state.idx]}</p>
            </div>
            
            <Button className="aka" variant="text-warning"  onClick={() => {
              this.setState({
                idx: 0
              });
            }}>АКАДЕМИИ</Button>
            <Button className="zak" variant="bg-warning" onClick={this.handleNext}>ЗА КОМПАНИИ</Button>
          
          </Col>
          <Col className="eduimg" md={6} sm={12} xs={16}>
            <Image fluid className="eduimg"  src={this.state.images[this.state.idx]} />
          </Col>
        </Row>
        </Container>
      
    )
    }
  }
