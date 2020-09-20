import React from "react"
import  recipes from "../recipes"
import { Container, Row, Col } from "react-bootstrap"
import RecipeBox from "./RecipeBox"

export default function Recipes(){
    return(
        <div className="recipes">
            <Container>
                <Row>
                    <Col md={{span:4, offset: 4}} className="recipes_title">
                        <h3>Recipes</h3>
                    </Col>
                </Row>
                <Row>
                    {recipes.map((el, idx) => 
                        <RecipeBox object={el} key={idx} />
                    )}
                </Row>
            </Container>
        </div>
    )
}