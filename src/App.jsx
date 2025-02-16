import './App.css'

import bg from "./assets/bg.jpg"

import Home from './pages/home/Home'
import AboutMe from './pages/aboutMe/AboutMe'
import Skills from './pages/skills/Skills'
import Resume from './pages/resume/Resume'
import Certifications from './pages/certifications/Certifications'
import Contact from './pages/contactPage/Contact'
import FooterPage from './pages/footerPage/FooterPage'
import Projects from './pages/projects/Projects'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MouseFollower from './components/MouseFollower'

function App() {
  return (
    <>
      <MouseFollower />
      <div id='home'><Home /></div>
      <div className="bg-fixed" style={{ backgroundImage: `url(${bg})` }}>
        <div id='aboutme' className="p-4"><AboutMe /></div>
        <div id='skills' className="p-4"><Skills /></div>
        <div id='resume' className="p-4"><Resume /></div>
        <div id='projects' className="p-4"><Projects /></div>
        <div id='certifications' className="p-4"><Certifications /></div>
        <div id='contactme' className="p-4"><Contact /></div>
        <div id='footer'><FooterPage /></div>
      </div>
    </>
  )
}

export default App
