// import React from "react";
import bg from "./assets/images/bg.jpg";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

function Home() {
  return (
    <div 
      className="w-full h-screen bg-cover bg-center" 
      style={{ backgroundImage: `url(${bg})` }}>
      <div className="w-full h-screen bg-black/60">
        <Navbar />
        <div className="w-full">
          <Intro />
        </div>
      </div>
    </div>
  );
}

export default Home;
