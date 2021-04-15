
import React from 'react';
import './Navbar.css';
import { Container, Row, Col, Navbar, Nav, Image, Button, Popover, OverlayTrigger } from 'react-bootstrap';
import logo from './logo.svg';

import * as Icon from 'react-bootstrap-icons';

function Barra() {


    return (


        <Container fluid>

            <Row className="top1">

                <Col sm className="">
                    <Row>
                        <Col >
                            <stong>Tether</stong>

                        </Col>
                        <Col sm>3 of 3</Col>
                    </Row>
                </Col>|

                 <Col sm>
                    <Row>
                        <Col sm> <p>BitCoin</p></Col>
                        <Col sm>3 of 3</Col>
                    </Row>
                </Col> |

                 <Col sm className="col-margin">
                    <Row>
                    <Col sm className="text-center">3 of 3</Col>
                        <Col sm className="text-center">3 of 3</Col>
                    </Row>
                </Col> |


            </Row>

            <hr />

            <Row className="top">
                <Col> <Navbar collapseOnSelect expand="lg" >
                    <hr />
                    <Navbar.Brand > <Image className="imagen" src={logo} width="200" height="43" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="mr-auto">
                            <OverlayTrigger
                                trigger="click"
                                placement="bottom"
                                overlay={
                                    <Popover id="popover-positioned-bottom">
                                        <Popover.Content>
                                                <a class="dropdown-item" href="#"><Icon.Download size={20}/>Comprar</a>
                                               
                                                <a class="dropdown-item margi" href="#"><Icon.Upload size={20}/>Vender</a>

                                        </Popover.Content>
                                    </Popover>
                                }>

                                <Nav.Link className="exchange"> Excahage </Nav.Link>
                            </OverlayTrigger>




                            <Nav.Link className="link" href="#features">Puntos Fisicos</Nav.Link>
                            <Nav.Link className="link" href="#features"> <Icon.ArrowRepeat size={22}/>  BitCredit</Nav.Link>
                            <Nav.Link className="link" href="#pricing"> <Icon.Bookmark size={22}/> BitFacts</Nav.Link>
                            <Nav.Link className="link" href="#pricing"><Icon.Megaphone size={22}/> BitNews</Nav.Link>
                            <Nav.Link className="link" href="#pricing"> <Icon.Cart2 size={22}/> BitShop</Nav.Link>


                        </Nav>
                        <Nav>

                            <Nav.Link><Button className="line" >Iniciar sesion</Button></Nav.Link>
                            <Nav.Link > <Button variant="warning" className="margen">Registrarse</Button>{' '}</Nav.Link>


                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
                </Col>

            </Row>

        </Container>



    );
}

const popover = (
    <Popover id="popover-basic">
        <Popover.Title as="h3">Popover right</Popover.Title>
        <Popover.Content>
            And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
    </Popover>
);


export default Barra;