import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function Projects() {

    const projects = [
        {
            title: "CV-Auction",
            githubLink: "https://github.com/PratikBharambe/CV-Auction",
            desc: [
                {dt : "Frontend : ReactJS"},
            ]
        },
        {
            title: "Portfolio-React",
            githubLink: "https://github.com/PratikBharambe/Portfolio-React",
        },
        {
            title: "Neflix-Clone (FrontEnd)",
            githubLink: "https://github.com/PratikBharambe/Netflix-clone",
        },
        {
            title: "Disney-Clone (FrontEnd)",
            githubLink: "https://github.com/PratikBharambe/disney-clone",
        },
    ]

  return (
    <>
        <SectionTitle title="Projects" desc="Implementation of Skills in projects"/>
    </>
  )
}

export default Projects