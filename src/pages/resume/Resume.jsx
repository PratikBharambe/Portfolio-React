import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Resume() {
  return (
    <>
      <SectionTitle title="Resume" desc="Academic & Professional Details" />
      <div className="flex">
        <div>

          <div>
            <div>Summary</div>
            <span>Pratik Bharambe</span>
            <p>Driven and self motivated, and therefore effective at completing tasks with minimal supervision. Confident leader and enthusiastic communicator.</p>
            <ol>
              <li>Pune, India</li>
              <li><a href="tel:+918767121795">8767121795</a></li>
              <li><a href="mailto:pratikbharambe.kp@gmail.com">pratikbharambe.kp@gmail.com</a></li>
            </ol>
          </div>

        </div>
        <div></div>
      </div>
    </>
  );
}

export default Resume;
