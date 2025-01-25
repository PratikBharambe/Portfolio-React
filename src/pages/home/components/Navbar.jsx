import React from "react";

import { FaHome } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { GiSkills } from "react-icons/gi";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { MdConnectWithoutContact } from "react-icons/md";

function Navbar() {
  const navbarData = [
    { icon: <FaHome />, title: "Home", link: "#home" },
    { icon: <GoPerson />, title: "About Me", link: "#aboutme" },
    { icon: <GiSkills />, title: "Skills", link: "#skills" },
    { icon: <MdOutlineDocumentScanner />, title: "Resume", link: "#resume" },
    { icon: <GrProjects />, title: "Projects", link: "#" },
    { icon: <MdConnectWithoutContact />, title: "Contact Me", link: "#" },
  ];

  return (
    <div className="bg-gradient-to-b from-black/60 to-transparent">
      <nav className="flex items-center m-auto pt-16 justify-between p-4 h-16 w-[90%]">
        {/* Left side: Logo */}
        <div className="text-5xl font-graduate flex items-center">
          Port<span className="text-[#30fb37]">folio</span>
        </div>

        {/* Right side: Language Selector and Sign In Button */}
        <div className="flex items-center gap-6 text-[1.1rem]">
          <div className="flex items-center text-white p-2 justify-center">
            {
                navbarData.map((item) => (
                    <div className="font-semibold font-sans">
                        <a href={item.link} className="flex items-center justify-center p-2 hover:text-[#30fb37]">
                            <div className="p-1">{item.icon}</div>
                            <div className="p-1">{item.title}</div>
                        </a>
                    </div>
                ))
            }
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
