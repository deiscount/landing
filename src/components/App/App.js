import { Col, Container, Overlay, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { render } from 'react-dom';
import student from '../../assets/student2.svg';
import savings from '../../assets/savings.svg';
import interested from '../../assets/interested.svg';
import './App.css';

export default function App () {
  return (
      <Container fluid className="App">
        <Row>
          <Col className="image fill">
            <OverlayTrigger trigger="click" placement="bottom" overlay={
              <Tooltip>
                <a rel="noopener noreferrer nofollow" target="_blank" href="https://www.freepik.com/vectors/school">School vector created by pch.vector - www.freepik.com</a>
              </Tooltip>
            }>
              <img src={student} alt="student" />
            </OverlayTrigger>
          </Col>
          <Col className="text fill">
            <h1>Se és um estudante da UC...</h1>
            <h3>Temos uma proposta para ti</h3>
          </Col>
        </Row>
        <Row>
          <Col className="text fill">
            <h1>Queremos te oferecer...</h1>
            <h3>
              Uma app que te permite encontrar
              os melhores descontos para poupar dinheiro
              na restauração, cultura, fitness e muito mais.
            </h3>
          </Col>
          <Col className="image fill">
            <OverlayTrigger
            trigger="click" placement="bottom"
            overlay={
              <Tooltip>
                <a rel="noopener noreferrer nofollow" target="_blank" href="https://www.freepik.com/vectors/people">People vector created by pch.vector - www.freepik.com</a>
              </Tooltip>
            }>
              <img src={savings} alt="savings" />
            </OverlayTrigger>
          </Col>
        </Row>
        <Row>
          <Col className='image fill'>
            <OverlayTrigger trigger="click" placement="bottom"
            overlay={
              <Tooltip>
                <a rel="noopener noreferrer nofollow" target="_blank" href='https://www.freepik.com/vectors/flower'>Flower vector created by pch.vector - www.freepik.com</a>
              </Tooltip>
            }>
              <img src={interested} alt="savings" />
            </OverlayTrigger>
          </Col>
          <Col className="text fill">
            <h1>Interessado?</h1>
            <h3>Fica atento ao nosso{' '}
              <a href="https://instagram.com/deiscount" rel="noopener noreferrer nofollow" target="_blank">Instagram</a>
              !
            </h3>
          </Col>
        </Row>
      </Container>
  );
};
