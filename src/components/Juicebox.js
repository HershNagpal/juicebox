import React from 'react'
import "../styles/juicebox.css"
import juicebox from '../assets/images/juicebox.png'

export const Juicebox = ({toggleMenu, menuState}) => {
    const [right, toggleRight] = React.useState(false)
    
    const toggle = () => {
        toggleMenu(!menuState)
        toggleRight(!right)
        console.log("yee")
    }

    return (
        <div id="logo" onClick={toggle} 
            className={right ? "right":""}
        >
            <img id="juicebox" src={juicebox} alt="juicebox.png"/>
            <h1 id="name">Hersh</h1>
        </div>
    )
}
