import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import {ReactComponent as Wave} from "../assets/img/wave.svg"
import Basket from "../assets/img/food-plate2.png"
import Salad from "../assets/img/salad-leaf.png"
import Watermelon from "../assets/img/watermelon.png"
import Recipes from "./Recipes"

export default function Content(){
    return(
        <React.Fragment>

            <div className="headline">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <p className="headline_text">Tired of listing groceries?<br/> Relax, iBasket does it for you!</p>
                        </Col>
                        <Col lg={4}>
                            <img src={Basket}/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="content">
                <img src={Salad} className="content_saladLeaf" height={300}/>
                <img src={Watermelon} className="content_watermelon" height={150}/>
                <Recipes />
            </div>
        </React.Fragment>
    )
}