import React from "react";
import SectionTitle from "../../components/SectionTitle";
import me from "./assets/images/me.jpg";

function AboutMe() {
  const left = [
    { property: "Name : ", value: "Pratik Bharambe" },
    { property: "Phone : ", value: <a href="tel:+918767121795" className="hover:text-[#2a8f26]">8767121795</a> },
    { property: "City : ", value: "Pune, India" }
  ];

  const right = [
    { property: "Age : ", value: "22" },
    { property: "Degree : ", value: "PG-DAC (Pursuing)" },
    { property: "Email : ", value: <a href="mailto:pratikbharambe.kp@gmail.com" className="hover:text-[#2a8f26]">pratikbharambe.kp@gmail.com</a> }
  ];

  return (
    <>
      <div>
        <SectionTitle title="About Me" desc="Basic information about myself" />
      </div>
      <div className="flex flex-col md:flex-row justify-between m-7 p-3">
        {/* Left Section (Image) */}
        <div className="w-full md:w-[450px] md:h-[600px] mb-5 md:mb-0 md:mr-5">
          <img className="w-full h-auto rounded-2xl" src={me} alt="me.jpg" />
        </div>
        
        {/* Right Section (Information) */}
        <div className="w-full md:w-[500px]">
          <div className="flex flex-col md:flex-row justify-between text-[1rem] md:text-[1.15rem]">
            {/* Left Info */}
            <div className="w-full md:w-[45%] mb-5 md:mb-0">
              <ul className="list-disc m-3 p-4">
                {left.map((item) => (
                  <li className="m-3 p-2" key={item.property}>
                    <b>{item.property}&nbsp;</b>{item.value}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Info */}
            <div className="w-full md:w-[45%]">
              <ul className="list-disc m-3 p-4">
                {right.map((item) => (
                  <li className="m-3 p-2" key={item.property}>
                    <b>{item.property}&nbsp;</b>{item.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Description Section */}
          <div className="font-ntHand m-3 p-4 text-[1.25rem] sm:text-[1.5rem] md:text-[2rem]">
            Driven and self-motivated, and therefore effective at completing tasks with minimal supervision.
            Confident leader and enthusiastic communicator.
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
