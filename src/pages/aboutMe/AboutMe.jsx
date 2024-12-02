import React from "react";

import SectionTitle from "../../components/SectionTitle";
import me from "./assets/images/me.jpg"
 
function AboutMe() {
  return (
    <>
      <div>
        <SectionTitle title="About Me" desc="Basic information about myself" />
      </div>
      <div className="flex justify-between m-7 p-3">
        <div><img className="w-[450px] h-[600px] rounded-2xl" src={me} alt="me.jpg"/></div>
        <div>
          <div className="flex justify-between">
            <div>
              <ul>
                <li>Name : Pratik Bharambe</li>
                <li>Phone : 8767121795</li>
                <li>City : Pune, INDIA</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Age : 22</li>
                <li>Degree : Pg-DAC (pursing)</li>
                <li>Email : pratikbharambe.kp@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="font-ntHand">
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
