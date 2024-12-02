import React from "react";
import bg from "./assets/images/bg.jpg";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

function Home() {
  return (
    <>
      <div className="w-full h-screen" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="w-full h-screen" style={{ background: "rgba(0, 0, 0, 0.6)"}}>
            <Navbar/>
            <div>
                <Intro />
            </div>
        </div>
      </div>
    </>
  );
}

export default Home;
