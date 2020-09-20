import React from "react"

export default function Button({
    type,
    text,
    action
}){

    if(!type) type = "primary"

    const handleClick = e => {
        e.preventDefault()
        if(action) action()
    }

    return(
        <button
            className={`button button_${type}`}
            onClick={(e) => handleClick(e)}
        >
            {text}
        </button>
    )
}