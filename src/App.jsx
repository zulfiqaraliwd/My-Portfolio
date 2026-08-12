import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import "./index.css"
import Hero from './Components/Hero/Hero.jsx'
import About from './Components/About me/About.jsx'
import Skills from './Components/Skills & Technologies/Skills.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Form from './Components/GetInTouch/Form.jsx'
import Footer from './Components/Footer/Footer.jsx'
function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />
      <Hero/>


      <section id="about">
  <About />
</section>

   <section id="skills">
      <Skills/>
      </section>

       <section id="projects"> 
        <Projects/>
       </section>
     


    <section id="contact">
  <Form />
</section>

      <Footer/>
    </div>
  )
}

export default App