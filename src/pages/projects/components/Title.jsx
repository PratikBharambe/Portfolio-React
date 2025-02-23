// import React from "react";
import PropTypes from "prop-types";

function Title(props) {
  return (
    <>
      <div className="flex items-center space-x-4 mb-4">
        <span className="flex items-center justify-center w-4 h-4 bg-[#30fb37] rounded-full shadow-md"></span>
        <span className="text-2xl font-semibold text-[#30fb37] tracking-wide font-charm">
          {props.value}
        </span>
      </div>
    </>
  );
}


Title.propTypes = {
  value: PropTypes.string.isRequired,  // 'value' should be a required string
};


export default Title;
