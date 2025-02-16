import React, { useState, useEffect } from "react";

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Function to track mouse movements
  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  // Set up mousemove event listener when component mounts
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed z-50 w-4 h-4 bg-transparent border-2 border-collapse border-[#30fb37] rounded-full transform"
      style={{
        left: `${mousePosition.x - 8}px`, // 32px offset to center the circle
        top: `${mousePosition.y - 8}px`, // 32px offset to center the circle
        transition: "left 0.3s ease, top 0.3s ease", // Smooth movement effect
        pointerEvents: "none", // Allow mouse events to pass through the circle
      }}
    ></div>
  );
};

export default MouseFollower;
