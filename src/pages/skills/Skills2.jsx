import React from "react";

import SectionTitle from "../../components/SectionTitle";

function Skills2() {
  const skillCatagory = [
    {
      logo: "LOGO",
      name: "Programming Languages",
    },
    {
      logo: "LOGO",
      name: "Framwwork & Libraries",
    },
    {
      logo: "LOGO",
      name: "Technology & Tools",
    },
    {
      logo: "LOGO",
      name: "Database Technologies",
    },
  ];

  return (
    <>
      <div>
        <SectionTitle title="Skills" desc="My technology skill set" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col">
          {skillCatagory.map((item) => (
            <div className="bg-black rounded-xl m-3 p-3 flex items-center gap-3 justify-center cursor-pointer border border-solid border-[#ff2a2a]">
              <div>{item.logo}</div>
              <div>{item.name}</div>
            </div>
          ))}
        </div>
        <div className="col-span-2 justify-center">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
        </div>
      </div>
      <div className="flex flex-col">
        {skillCatagory.map((item) => (
          <div className="bg-neutral-700 m-3 p-3 flex items-center gap-3 justify-center">
            <div>{item.logo}</div>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills2;
