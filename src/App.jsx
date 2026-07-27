import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import "./index.css"
import Hero from './Components/Navbar/Hero/Hero.jsx'
import About from './Components/Navbar/About me/About.jsx'
import Skills from './Components/Navbar/Skills & Technologies/Skills.jsx'
import Projects from './Components/Navbar/Projects/Projects.jsx'
function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About />
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App