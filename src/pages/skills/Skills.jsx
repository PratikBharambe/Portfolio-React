import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiHibernate } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiDotnet } from "react-icons/si";

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
        { logo: "C#", skillName: "C Sharp" },
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
        { logo: <SiDotnet />, skillName: "MS DOT NET" },
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
    <div className="py-10 px-5">
      <SectionTitle title="Skills" desc="My technology skill set" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="flex flex-col space-y-4">
          {skillSet.map((item) => (
            <div
              key={item.name}
              className={`bg-[#141414] bg-opacity-50 border border-white rounded-xl p-5 flex items-center gap-4 justify-between cursor-pointer ${
                selectedSkill === item.name
                  ? "border-[#30fb37]"
                  : "border-transparent"
              } hover:border-[#30fb37] hover:bg-black`}
              onClick={() =>
                setSelectedSkill(item.name === selectedSkill ? null : item.name)
              }
            >
              <div className="flex items-center gap-3">
                <div className="text-6xl text-[#30fb37] border border-dashed border-white p-4 rounded-full sm:text-3xl">{item.skills[0].logo}</div>
                <div className="font-semibold ml-2 text-lg sm:text-xl">{item.name}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-2 justify-center">
          {selectedSkill && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillSet
                .find((item) => item.name === selectedSkill)
                ?.skills.map((skill) => (
                  <div
                    key={skill.skillName}
                    className="bg-[#141414] bg-opacity-50 border border-white  rounded-xl p-5 flex items-center gap-4 justify-center hover:border-[#30fb37]"
                  >
                    <div className="text-2xl text-[#30fb37] border border-dashed border-white p-4 rounded-full sm:text-3xl">{skill.logo}</div>
                    <div className="font-semibold text-lg sm:text-xl">
                      {skill.skillName}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Skills;
