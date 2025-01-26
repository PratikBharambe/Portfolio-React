import React from "react";
import { FaHome } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { GiSkills } from "react-icons/gi";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { MdConnectWithoutContact } from "react-icons/md";
import { BiCertification } from "react-icons/bi";

function Navbar() {
  const navbarData = [
    { icon: <FaHome />, title: "Home", link: "#home" },
    { icon: <GoPerson />, title: "About Me", link: "#aboutme" },
    { icon: <GiSkills />, title: "Skills", link: "#skills" },
    { icon: <MdOutlineDocumentScanner />, title: "Resume", link: "#resume" },
    { icon: <BiCertification />, title: "Certifications", link: "#certifications" },
    { icon: <GrProjects />, title: "Projects", link: "#" },
    { icon: <MdConnectWithoutContact />, title: "Contact Me", link: "#contactme" },
  ];

  return (
    <div className="bg-gradient-to-b from-black/60 to-transparent">
      <nav className="flex items-center m-auto pt-8 sm:pt-12 justify-between p-4 h-16 w-[90%]">
        {/* Left side: Logo */}
        <div className="text-4xl sm:text-5xl font-graduate flex items-center">
          Port<span className="text-[#30fb37]">folio</span>
        </div>

        {/* Right side: Navigation Links */}
        <div className="hidden sm:flex items-center gap-6 text-[1rem] sm:text-[1.1rem]">
          {navbarData.map((item) => (
            <div key={item.title} className="font-semibold font-sans">
              <a href={item.link} className="flex items-center justify-center p-2 hover:text-[#30fb37]">
                <div className="p-1">{item.icon}</div>
                <div className="p-1">{item.title}</div>
              </a>
            </div>
          ))}
        </div>
        
        {/* Mobile Menu (Optional, if you want to add a mobile-friendly menu) */}
        <div className="sm:hidden flex items-center text-white">
          {/* A mobile menu button or icon could be placed here */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
