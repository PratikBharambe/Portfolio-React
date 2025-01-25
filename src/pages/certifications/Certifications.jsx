import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';

import core_java from "./assets/images/core_java.png";
import info_ai from "./assets/images/info_ai.png";
import java_basics from "./assets/images/java_basics.png";
import js_basics from "./assets/images/js_basics.png";
import problem_solving_basics from "./assets/images/problem_solving_basics.png";
import problem_solving_Intermediate from "./assets/images/problem_solving_Intermediate.png";
import python_basics from "./assets/images/python_basics.png";
import soft_tcs from "./assets/images/soft_tcs.png";
import sql_basics from "./assets/images/sql_basics.png";
import gamaka_python from "./assets/images/gamaka_python.png";

function Certifications() {
    const [selectedImage, setSelectedImage] = useState(null);

    const certifications = [
        {url : java_basics, title : "Java (Basic) Certificate"},
        {url : js_basics, title : "JavaScript (Basic) Certificate"},
        {url : sql_basics, title : "SQL (Basic) Certificate"},
        {url : problem_solving_basics, title : "Problem Solving (Basic) Certificate"},
        {url : problem_solving_Intermediate, title : "Problem Solving (Intermediate) Certificate"},
        {url : python_basics, title : "Python (Basic) Certificate"},
        {url : gamaka_python, title : "Gamaka Ai - Python Certificate"},
        {url : core_java, title : "Internshala Core Java Certificate"},
        {url : soft_tcs, title : "TCS iON Career Edge - Young Professional"},
        {url : info_ai, title : "Infosys Introduction to Artificial intelligence Certificate"},
    ];

    const openModal = (item) => {
        setSelectedImage(item);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <SectionTitle title="Certifications" desc="Earned certifications" />
            <div className="mt-10 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {certifications.map((item, index) => (
                    <div key={index} className="rounded-lg overflow-hidden hover:shadow-2xl transition duration-300">
                        <div className="relative cursor-pointer" onClick={() => openModal(item)}>
                            <img className="w-full h-[300px] object-cover" src={item.url} alt={item.title} />
                        </div>
                        <div className="p-4 text-center">
                            <p className="text-lg font-semibold">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="p-6 rounded-lg w-4/5 md:w-1/2 lg:w-1/3">
                        <div className="relative">
                            <button
                                onClick={closeModal}
                                className="absolute top-0 right-0 text-gray-500 hover:text-gray-700 p-2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            {/* Image is now scaled to double the size using width and height */}
                            <img
                                className="w-[500%] h-[00%] object-contain mb-4"
                                src={selectedImage.url}
                                alt={selectedImage.title}
                            />
                            <p className="text-lg font-semibold text-center">{selectedImage.title}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Certifications;
