import './App.css'

import bg from "./assets/bg.jpg"

import Home from './pages/home/Home'
import AboutMe from './pages/aboutMe/AboutMe'
import Skills from './pages/skills/Skills'
import Resume from './pages/resume/Resume'

function App() {
  return (
    <>
      <div id='home'><Home /></div>

      <div className="bg-fixed" style={{ backgroundImage: `url(${bg})` }}>
        <div id='aboutme' className="p-4"><AboutMe /></div>
        <div id='skills' className="p-4"><Skills /></div>
        <div id='resume' className="p-4"><Resume /></div>
      </div>
    </>
  )
}

export default App
