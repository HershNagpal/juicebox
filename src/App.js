import React from 'react'
import './styles/style.css'
import './styles/crt.css'
import { AnimationComponents } from './components/AnimationComponents'
import juicebox from './assets/images/juicebox.png'

function App() {

  return (
    <div className="App">
        {/* <AnimationComponents/> */}
        <div id="logo">
          <img id="juicebox" src={juicebox} alt="juicebox.png"/>
          <h1 id="name">Hersh</h1>
        </div>
    </div>
  )
}

export default App