import React from "react"
import { Col } from "react-bootstrap"
import { BASE_API } from "../conf"
import User from "../assets/img/user.svg"
import Timer from "../assets/img/timer.svg"

export default function RecipeBox({
    object
}) {
    console.log(object)
    const imageUrl = require('../assets/img' + object.imgUrl)

    return(
        <Col md={4}>
            <div className="recipeBox">
                <div className="recipeBox_img" style={{backgroundImage: `url(${imageUrl})`}}></div>
                <div className="recipeBox_content">
                    <p className="recipeBox_title">{object.title}</p>
                    <p className="recipeBox_description">{object.description}</p>
                    <div className="recipeBox_footer">
                        <img src={Timer} height={14}/>
                        <p className="recipeBox_time">&nbsp;{object.time} min</p>
                        <img src={User} height={14}/>
                        <p className="recipeBox_time">&nbsp;{object.persons}</p>
                    </div>
                </div>
            </div>
        </Col>
    )
}