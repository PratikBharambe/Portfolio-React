// import React from "react";
import PropTypes from "prop-types"; 

function SectionTitle(props) {
  return (
    <div className="text-center m-5 p-4">
      {/* Main Title */}
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl opacity-30 leading-3 pt-6 mt-3 font-charm font-bold tracking-wider">
        {props.title}
      </div>
      {/* Subtitle */}
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-charm font-bold tracking-wide">
        {props.title}
      </div>
      {/* Description */}
      <div className="m-3 p-3 text-base sm:text-lg md:text-xl font-slabo">
        {props.desc}
      </div>
    </div>
  );
}

// Prop validation
SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,  // 'title' should be a required string
  desc: PropTypes.string.isRequired,   // 'desc' should be a required string
};

export default SectionTitle;
