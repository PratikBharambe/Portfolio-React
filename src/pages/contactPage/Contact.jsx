import React from "react";
import SectionTitle from "../../components/SectionTitle";

import { MdConnectWithoutContact } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import { MdAddCall } from "react-icons/md";
import { MdContactMail } from "react-icons/md";

function Contact() {
  const contactDetails = [
    { logo: <FaGithub />, url: "https://github.com/PratikBharambe" },
    {
      logo: <FaLinkedin />,
      url: "https://www.linkedin.com/in/pratik-bharambe-769907289/",
    },
  ];

  return (
    <>
      <SectionTitle title="Contact Me" desc="Don't Hesitate to Contact Me" />

      <div className="px-6">
        <div className="flex flex-col items-center space-y-4 p-4 bg-[#131313] bg-opacity-50 rounded-lg border">
          <div className="text-7xl p-4 m-2 border border-dashed border-[#30fb37] rounded-full text-white">
            <MdConnectWithoutContact />
          </div>
          <div className="text-3xl font-ntHand font-semibold">
            Social Profiles
          </div>
          <div className="flex flex-wrap justify-center space-x-4">
            {contactDetails.map((items) => (
              <div
                key={items.url}
                className="my-2 border border-dashed border-[#30fb37] rounded-full p-4 m-2"
              >
                <a
                  href={items.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-7xl text-white hover:text-[#30fb37] transition-colors"
                >
                  {items.logo}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex my-4 py-6 items-center space-x-6">
            {/* Call Section */}
            <div className="w-full bg-[#131313] bg-opacity-75 rounded-lg border border-white p-8 text-center text-white space-y-4 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="flex justify-center text-4xl mb-2">
                <MdAddCall />
                </div>
                <div className="text-2xl font-ntHand font-semibold">Call Me</div>
                <div className="text-lg">
                <a href="tel:+918767121795" className="text-[#30fb37] ">
                    8767121795
                </a>
                </div>
            </div>
            
            {/* Mail Section */}
            <div className="w-full bg-[#131313] bg-opacity-75 rounded-lg border border-white p-8 text-center text-white space-y-4 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="flex justify-center text-4xl text-center mb-2">
                <MdContactMail />
                </div>
                <div className="text-2xl font-ntHand font-semibold">Mail</div>
                <div className="text-lg">
                <a href="mailto:pratikbharambe.kp@gmail.com" className="text-[#30fb37]">
                    pratikbharambe.kp@gmail.com
                </a>
                </div>
            </div>
        </div>


      </div>
    </>
  );
}

export default Contact;
