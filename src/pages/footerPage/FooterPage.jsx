import React from 'react';
import bg from './assets/bg.jpg';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";

function FooterPage() {

  const contactDetails = [
    { logo: <FaGithub />, url: "https://github.com/PratikBharambe" },
    {
      logo: <FaLinkedin />,
      url: "https://www.linkedin.com/in/pratik-bharambe-769907289/",
    },
  ];

  return (
    <div 
      className="bg-fixed bg-cover bg-center py-16" 
      style={{ backgroundImage: `url(${bg})` }}>
      
      <div className="text-center">
        <p className='text-[#30fb37] text-3xl font-charm m-2 p-3'>Pratik Bharambe</p>
        <p className='text-2xl py-1'>Full Stack Developer</p>
        
        <div className="flex flex-wrap justify-center py-3 space-x-4">
          {contactDetails.map((items) => (
            <div
              key={items.url}
              className="my-2 border border-dashed border-[#30fb37] rounded-full p-4 m-2"
            >
              <a
                href={items.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl text-white hover:text-[#30fb37] transition-colors"
              >
                {items.logo}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className='flex justify-center items-center text-lg'>
          <FaRegCopyright /> &nbsp; copyright &nbsp;
          <span className='font-bold'>Pratik</span>. All Rights Reserved
        </p>
        <p className='text-center p-3'>
          Designed by <span className='text-[#30fb37] text-lg'>Pratik Bharambe</span>
        </p>
      </div>
    </div>
  );
}

export default FooterPage;
