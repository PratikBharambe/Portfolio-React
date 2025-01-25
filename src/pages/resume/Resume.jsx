import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Title from "./components/Title";
import resume from "./assets/pratik_bharambe_resume.pdf";

function Resume() {
  const educationDetails = [
    {
      name: "PG Diploma In Advanced Computing (PG-DAC)",
      year: "08-2024 - 02-2025",
      institute: "IET C-DAC ACTS ATC, Pune",
      details: [
        {
          item: "PG-DAC by CDAC is designed for engineering graduates and MCA/MSc professionals focusing on advanced computing.",
        },
        {
          item: "Prepares students to adapt to evolving technology and meet IT industry demands.",
        },
        {
          item: "Over 30 years, PG-DAC has produced industry-ready professionals, leveraging CDAC’s R&D expertise.",
        },
      ],
    },
    {
      name: "Electronics & Telecommunication Engineering",
      year: "01-2021 - 04-2024",
      institute:
        "Rasiklal M Dhariwal Sinhgad Technical Institiute Campus, Warje, Pune",
      details: [
        {
          item: "Electronics and Telecommunication Engineering focuses on electronic systems and communication technologies.",
        },
        {
          item: "Prepares students for challenges in signal processing, networks, and embedded systems.",
        },
        {
          item: "Equips graduates with the skills to meet industry demands in electronics and telecom.",
        },
      ],
    },
    {
      name: "HSC",
      year: "04-2018 - 04-2020",
      institute: "Sahakar Vidya Mandir, Buldhana",
      details: [
        {
          item: "HSC in Computer Science covers fundamental concepts in computing, programming, and software development.",
        },
        {
          item: "Prepares students for challenges in coding, algorithms, and system design.",
        },
      ],
    },
  ];

  const experienceDetails = [
    {
      position: "President Roboclub Committee",
      duration: "03/2022 - 01/2024",
      location: "RMDSSOE - Warje, Pune",
      tasks: [
        { task: "Leadership, Team Management." },
        {
          task: "Lead for NAAC committee visit projects developed for department representation.",
        },
        {
          task: "Conducting sessions for students about Arduino, raspberry pi and hands on projects.",
        },
      ],
    },
  ];

  return (
    <>
      <SectionTitle title="Resume" desc="Academic & Professional Details" />
      <div className="flex justify-center">
        <div>
          <div className="p-6">
            <div className="font-bold text-4xl m-2 tracking-wide pb-8">
              Summary
            </div>
            <div className="ml-4">
              <div>
                <Title value="Pratik Bharambe" />
              </div>

              <p className="mb-4 text-lg">
                Driven and self-motivated, and therefore effective at completing
                tasks with minimal supervision. Confident leader and
                enthusiastic communicator.
              </p>

              <ol className="list-inside space-y-2">
                <li className="flex items-center">
                  <span className="text-[#30fb37] mr-2">📍</span> Pune, India
                </li>
                <li className="flex items-center">
                  <span className="text-[#30fb37] mr-2">📞</span>
                  <a href="tel:+918767121795" className="hover:text-[#2a8f26]">
                    8767121795
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="text-[#30fb37] mr-2">✉️</span>
                  <a
                    href="mailto:pratikbharambe.kp@gmail.com"
                    className="hover:text-[#2a8f26]"
                  >
                    pratikbharambe.kp@gmail.com
                  </a>
                </li>
              </ol>
            </div>
          </div>

          <div className="p-8">
            <div className="font-bold text-4xl m-2 tracking-wide pb-8">
              Experience
            </div>
            <div>
              {experienceDetails.map((item, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <Title value={item.position} />
                    </div>
                    <div className="text-sm text-center bg-[#1d1d1d] rounded-lg p-3 w-[180px] m-3">
                      {item.duration}
                    </div>
                  </div>
                  <div className="text-lg ml-8">{item.location}</div>
                  <ul className="list-disc ml-8 text-lg pl-6 space-y-2 mt-4">
                    {item.tasks.map((task, taskIndex) => (
                      <li key={taskIndex}>{task.task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8">
            <div className="font-bold text-4xl m-2 tracking-wide pb-8">
              Languages
            </div>
            <div className="text-lg ml-4">
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <span className="font-semibold">English</span> - Professional
                  Working Proficiency
                </li>
                <li>
                  <span className="font-semibold">Marathi</span> - Native or
                  Bilingual Proficiency
                </li>
                <li>
                  <span className="font-semibold">Hindi</span> - Native or
                  Bilingual Proficiency
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div>
          <div className="p-6">
            <div className="font-bold text-4xl m-2 tracking-wide">
              Education
            </div>
            {educationDetails.map((item, index) => (
              <div
                key={index}
                className="text-lg mt-6 space-y-6 p-6 rounded-lg shadow-lg"
              >
                <div>
                  <Title value={item.name} />
                </div>
                <div className="text-sm text-center bg-[#1d1d1d] rounded-lg p-3 w-[180px]">
                  {item.year}
                </div>
                <div className="">{item.institute}</div>

                <ol className="list-disc pl-6 space-y-3">
                  {item.details.map((li, liIndex) => (
                    <li key={liIndex}>{li.item}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center text-4xl font-charm">
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="border p-4 m-2 px-12 rounded-2xl hover:scale-125 border-[#30fb37] transform transition-all duration-300"
        >
          My Resume
        </a>
      </div>
    </>
  );
}

export default Resume;
