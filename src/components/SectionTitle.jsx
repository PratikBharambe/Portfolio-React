import React from "react";

function SectionTitle(props) {
  return (
    <div className="text-center m-5 p-4">
      <div className="text-7xl opacity-30 leading-3 pt-6 mt-3 font-charm font-bold tracking-wider">{props.title}</div>
      <div className="text-5xl font-charm font-bold tracking-wide">{props.title}</div>
      <div className="m-3 p-3 text-xl font-slabo">{props.desc}</div>
    </div>
  );
}

export default SectionTitle;
