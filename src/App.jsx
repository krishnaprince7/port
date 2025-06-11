import React from 'react'
import Navbar from './componenets/Navebar'
import Home from './componenets/Home'
import About from './componenets/About'
import Skills from './componenets/Skills'
import Project from './componenets/Project'
import Contact from './componenets/Contact'


const App = () => {
  return (
   
    <>
    <Navbar />
    <Home />
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    </>
  )
}

export default App