import React from "react";
import Popover from "react-bootstrap/Popover";
import Nav from "react-bootstrap/Nav";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import logo from '../../assets/logo.svg';
import './TopBar.css';

const contact = (
    <Popover id="contact">
        <Popover.Header as="h3">Manda-nos as tuas sugestões!</Popover.Header>
        <Popover.Body>
            <Button variant="outline-primary" rel="noopener noreferrer nofollow" target="_blank" href="https://instagram.com/deiscount">Instagram</Button>
            <Button variant="outline-primary" rel="noopener noreferrer nofollow" target="_blank" href="mailto:deiconfig@gmail.com">Email</Button>
        </Popover.Body>
    </Popover>
);

const legal = (
    <Popover id="legal">
        <Popover.Header as="h3">Aviso Legal</Popover.Header>
        <Popover.Body>
            Os conteúdos constantes website foram realizados
            por alunos no âmbito de uma disciplina – Processos de gestão e
            Inovação - do 3º ano da Licenciatura de Engenharia Informática
            da Faculdade de Ciências e Tecnologia da Universidade de
            Coimbra (FCTUC), pelo que a FCTUC não se responsabiliza pelo
            seu conteúdo.
        </Popover.Body>
    </Popover>
);

const TopBar = () => {
    return(
        <div className="top-bar">
            <img src={logo} class="logo" alt="logo" />
            <Nav>
                <Nav.Item>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={legal}>
                        <Nav.Link>Aviso Legal</Nav.Link>
                    </OverlayTrigger>
                </Nav.Item>
                <Nav.Item>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={contact}>
                        <Nav.Link>Contacta-nos</Nav.Link>
                    </OverlayTrigger>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default TopBar;