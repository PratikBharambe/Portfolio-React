import React from 'react'
import SectionTitle from '../../components/SectionTitle'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiHibernate } from "react-icons/si";

import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";

import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

function Skills() {

    const programmingLanguage = [
        { logo : <FaHtml5 />, skillName : "HTML" },
        { logo : <FaCss3Alt />, skillName : "CSS" },
        { logo : <TbBrandCpp />, skillName : "C/C++" },
        { logo : <DiJavascript />, skillName : "Javascript" },
        { logo : <FaJava />, skillName : "J2SE & J2EE" },
        { logo : <FaDatabase />, skillName : "PlSql"}
    ]

    const frameworkAndLibraries = [
        { logo : <FaReact />, skillName : "React" },
        { logo : <SiSpring />, skillName : "Spring & Spring MVC" },
        { logo : <SiSpringboot />, skillName : "Spring Boot" },
        { logo : <SiHibernate />, skillName : "Hibernate" }
    ]

    const technologiesAndTools = [
        { logo : <FaGitAlt />, skillName : "Git" },
        { logo : <FaGithub />, skillName : "Github" },
        { logo : <RiTailwindCssFill />, skillName : "Tailwind CSS" },
        { logo : <SiVite />, skillName : "Vite" }
    ]

    const database = [
        { logo : <SiMysql />, skillName : "MySql" },
        { logo : <SiMongodb />, skillName : "MongoDB" }
    ]

  return (
    <>
        <div>
            <SectionTitle title="Skills" desc="My technology skill set"/>
        </div>
        <div>
            <div>
                <div className='text-4xl m-3 p-2'>Programming Languages</div>
                <div className='flex m-4'>
                    {programmingLanguage.map((item) => (
                        <div className='flex items-center justify-center w-auto bg-[#343434] rounded-md m-3 p-3'>
                        <div className='text-6xl mr-1 pr-2'>{item.logo}</div>
                        <div className='text-2xl mr-1 pr-2'>{item.skillName}</div>
                    </div>                    
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Skills