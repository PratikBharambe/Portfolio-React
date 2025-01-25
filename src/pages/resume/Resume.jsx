import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Resume() {
  return (
    <>
      <SectionTitle title="Resume" desc="Academic & Professional Details" />
      <div className="flex">
        <div>

          {/* <div className="p-3">
            <div className="font-bold text-4xl m-2 tracking-wider">Summary</div>
            <div className="flex items-center space-x-3">
              <span className="flex items-center justify-center w-3 h-3 bg-[#30fb37] rounded-full shadow-md"></span>
              <span className="text-lg font-semibold text-[#30fb37] tracking-wide">Pratik Bharambe</span>
            </div>
            <p>Driven and self motivated, and therefore effective at completing tasks with minimal supervision. Confident leader and enthusiastic communicator.</p>
            <ol>
              <li>Pune, India</li>
              <li><a href="tel:+918767121795">8767121795</a></li>
              <li><a href="mailto:pratikbharambe.kp@gmail.com">pratikbharambe.kp@gmail.com</a></li>
            </ol>
          </div> */}

<div className="p-6">
  <div className="font-bold text-4xl m-2 tracking-wide">Summary</div>
  
  <div className="flex items-center space-x-4 mb-4">
    <span className="flex items-center justify-center w-4 h-4 bg-[#30fb37] rounded-full shadow-md"></span>
    <span className="text-lg font-semibold text-[#30fb37] tracking-wide">Pratik Bharambe</span>
  </div>
  
  <p className="mb-4">Driven and self-motivated, and therefore effective at completing tasks with minimal supervision. Confident leader and enthusiastic communicator.</p>
  
  <ol className="list-inside space-y-2">
    <li className="flex items-center">
      <span className="text-[#30fb37] mr-2">📍</span> Pune, India
    </li>
    <li className="flex items-center">
      <span className="text-[#30fb37] mr-2">📞</span>
      <a href="tel:+918767121795" className="hover:text-[#2a8f26]">8767121795</a>
    </li>
    <li className="flex items-center">
      <span className="text-[#30fb37] mr-2">✉️</span>
      <a href="mailto:pratikbharambe.kp@gmail.com" className="hover:text-[#2a8f26]">pratikbharambe.kp@gmail.com</a>
    </li>
  </ol>
</div>


        </div>
        <div></div>
      </div>
    </>
  );
}

export default Resume;
