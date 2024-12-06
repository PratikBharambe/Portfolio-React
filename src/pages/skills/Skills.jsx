import React, { useState } from "react";
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
  const [selectedSkill, setSelectedSkill] = useState(null);

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
      name: "Framework & Libraries",
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
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col">
          {skillSet.map((item) => (
            <div
              key={item.name}
              className={`bg-neutral-700 rounded-xl m-3 p-3 flex items-center gap-3 justify-center cursor-pointer border ${
                selectedSkill === item.name ? 'border-[#30fb37]' : 'border-transparent'
              } hover:border-[#30fb37] hover:bg-black`}
              onClick={() => setSelectedSkill(item.name === selectedSkill ? null : item.name)}
            >
              <div>{item.skills[0].logo}</div>
              <div>{item.name}</div>
            </div>
          ))}
        </div>
        <div className="col-span-2 justify-center">
          {selectedSkill && (
            <div>
              {skillSet
                .find((item) => item.name === selectedSkill)
                ?.skills.map((skill) => (
                  <div key={skill.skillName} className="bg-neutral-700 m-3 p-3 flex items-center gap-3 justify-center">
                    <div>{skill.logo}</div>
                    <div>{skill.skillName}</div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Skills;
