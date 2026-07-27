import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import "./index.css"
import Hero from './Components/Navbar/Hero/Hero.jsx'
import About from './Components/Navbar/About me/About.jsx'
function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About />
    </div>
  )
}

export default App