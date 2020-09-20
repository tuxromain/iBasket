import React from "react"
import Header from "./Header"
import Content from "./Content"

export default function Layout(){
    return(
        <React.Fragment>
            <Header />
            <Content />
        </React.Fragment>
    )
}