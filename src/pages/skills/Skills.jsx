import React from "react";
import SectionTitle from "../../components/SectionTitle";

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
  const skillSet = [
    {
      name: "Programming Languages",
      skills: [
        { logo: <FaHtml5 />, skillName: "HTML" },
        { logo: <FaCss3Alt />, skillName: "CSS" },
        { logo: <DiJavascript />, skillName: "Javascript" },
        { logo: <TbBrandCpp />, skillName: "C/C++" },
        { logo: <FaJava />, skillName: "J2SE & J2EE" },
        { logo: <FaDatabase />, skillName: "PlSql" },
      ],
    },
    {
      name: "Framwwork & Libraries",
      skills: [
        { logo: <FaReact />, skillName: "React" },
        { logo: <SiSpring />, skillName: "Spring" },
        { logo: <SiSpring />, skillName: "Spring MVC" },
        { logo: <SiSpringboot />, skillName: "Spring Boot" },
        { logo: <SiHibernate />, skillName: "Hibernate" },
      ],
    },
    {
      name: "Technology & Tools",
      skills: [
        { logo: <FaGitAlt />, skillName: "Git" },
        { logo: <FaGithub />, skillName: "Github" },
        { logo: <RiTailwindCssFill />, skillName: "Tailwind CSS" },
        { logo: <SiVite />, skillName: "Vite" },
      ],
    },
    {
      name: "Database Technologies",
      skills: [
        { logo: <SiMysql />, skillName: "MySql" },
        { logo: <SiMongodb />, skillName: "MongoDB" },
      ],
    },
  ];

  return (
    <>
      <div>
        <SectionTitle title="Skills" desc="My technology skill set" />
      </div>
      <div>
        <div className="flex">
          {skillSet.map((data) => (
            <div>
              <div className="text-4xl m-3 p-2">{data.name}</div>
              <div className="w-auto inline-block m-4">
                {data.skills.map((item) => (
                  <div className="flex items-center justify-center w-auto bg-[#343434] rounded-md m-3 p-3 hover:bg-[#1d1d1d] hover:border-double hover:border-2 hover:border-[#28be2d]">
                    <div className="text-6xl mr-2 pr-2 text-[#28be2d]">
                      {item.logo}
                    </div>
                    <div className="text-2xl mr-1 pr-2">{item.skillName}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
