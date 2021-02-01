import React from 'react'
import "../styles/menu.css"

export const Menu = ({state}) => {

    return (
        <div className={state ? "menu closed" : "menu"}>
            <h2>About</h2>
            <h2>Projects</h2>
            <h2>Resume</h2>
            <h2>Contact</h2>
        </div>
    )
}
