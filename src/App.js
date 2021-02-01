import React from 'react'
import './styles/style.css'
import './styles/crt.css'
import { AnimationComponents } from './components/AnimationComponents'
import { Juicebox } from './components/Juicebox'
import { Menu } from './components/Menu'

function App() {

  const [menuState, toggleMenu] = React.useState(true)

  return (
    <div className="App">
        {/* <AnimationComponents/> */}
        <Menu state={menuState}/>
        <Juicebox toggleMenu={toggleMenu} menuState={menuState}/>
    </div>
  )
}

export default App