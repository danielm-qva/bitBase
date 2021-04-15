import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import Calculator from "./Calculator";

export default function Test() {
    return (
        <Container fluid>
            <Row>
                <Col xs={4}>
                    <Calculator/>
                </Col>
            </Row>
        </Container>
    )
}