import React from "react";

import SectionTitle from "../../components/SectionTitle";
import me from "./assets/images/me.jpg"
 
function AboutMe() {

  const left = [
    { property : "Name : ", value : "Pratik Bharambe" },
    { property : "Phone : ", value : <a href="tel:+918767121795" className="hover:text-[#2a8f26]">8767121795</a> },
    { property : "City : ", value : "Pune, India" }
  ]

  const right = [
    { property : "Age : ", value : "22" },
    { property : "Degree : ", value : "PG-DAC (Pursing)" },
    { property : "Email : ", value : <a href="mailto:pratikbharambe.kp@gmail.com" className="hover:text-[#2a8f26]">pratikbharambe.kp@gmail.com</a> }
  ]

  return (
    <>
      <div>
        <SectionTitle title="About Me" desc="Basic information about myself" />
      </div>
      <div className="flex justify-between m-7 p-3">
        <div className="w-[900px] mr-5"><img className="w-[450px] h-[600px] rounded-2xl" src={me} alt="me.jpg"/></div>
        <div>
          <div className="flex justify-between text-[1.15rem]">
            <div>
              <ul className="list-disc m-3 p-4">
                {left.map((item) => (
                  <li className="m-3 p-2"><b>{item.property}&nbsp;</b>{item.value}</li>
                ))}
              </ul>
            </div>
            <div>
             <ul className="list-disc m-3 p-4">
                {right.map((item) => (
                  <li className="m-3 p-2"><b>{item.property}&nbsp;</b>{item.value}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="font-ntHand m-3 p-4 text-[2rem]">
              Driven and self motivated, and therefore effective at completing
              tasks with minimal supervision. Confident leader and enthusiastic
              communicator.
            </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;