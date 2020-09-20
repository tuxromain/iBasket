import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Logo from "../assets/img/groceries.svg"
import Button from "./Button"

export default function Header(){
    return(
        <div className="header_wrapper">
            <Container>
                <Row className="header">
                    <Col md={4}>
                        <h1>iBasket</h1>
                    </Col>
                    <Col md={8} className="header_menu">
                        <a href="#">Recipes</a>
                        <a href="#">About</a>
                        <Button text="My basket"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}