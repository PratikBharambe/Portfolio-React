import React from 'react';
import SectionTitle from '../../components/SectionTitle';

import { RiAuctionLine } from "react-icons/ri";
import { TbBrandNetflix } from "react-icons/tb";
import { TbBrandDisney } from "react-icons/tb";
import { MdOutlinePersonalInjury } from "react-icons/md";

function Projects() {

    const projects = [
        {
            title: "CV-Auction",
            logo : <RiAuctionLine />,
            githubLink: "https://github.com/PratikBharambe/CV-Auction",
            desc: [
                {dt : "Frontend : ReactJS"},
                {dt : "Frontend FrameWork : Bootstrap 5.0"},
                {dt : "Backend : Ms Dot Net"},
            ]
        },
        {
            title: "Portfolio-React",
            logo : <MdOutlinePersonalInjury />,
            githubLink: "https://github.com/PratikBharambe/Portfolio-React",
            desc: [
                {dt : "Frontend : ReactJS"},
                {dt : "Frontend FrameWork : TailwindCss"},
            ]
        },
        {
            title: "Netflix-Clone (FrontEnd)",
            logo : <TbBrandNetflix />,
            githubLink: "https://github.com/PratikBharambe/Netflix-clone",
            desc: [
                {dt : "Frontend : ReactJS"},
                {dt : "Frontend FrameWork : TailwindCss"},
            ]
        },
        {
            title: "Disney-Clone (FrontEnd)",
            logo : <TbBrandDisney />,
            githubLink: "https://github.com/PratikBharambe/disney-clone",
            desc: [
                {dt : "Frontend : ReactJS"},
                {dt : "Frontend FrameWork : TailwindCss"},
            ]
        },
    ]

  return (
    <>
        <SectionTitle title="Projects" desc="Implementation of Skills in projects"/>
        <div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 mx-10 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <div key={index} className="p-4 bg-black bg-opacity-35 border shadow-md rounded-md transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-opacity-60">
                        <div className="flex justify-between items-center">
                            <div className="text-7xl mb-4 text-[#30fb37] border border-dashed rounded-full p-5">{project.logo}</div>
                            <a href={project.githubLink} target="_blank" rel="noreferrer" 
                            className="text-[#30fb37] hover:text-white border border-[#30fb37] hover:bg-green-800 hover:bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-[#30fb37] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[#30fb37] dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                                Github Link
                            </a>
                        </div>
                        <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
                        <ul className="mt-2">
                            {project.desc.map((dt, index) => (
                                <li key={index} className="text-white">{dt.dt}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Projects