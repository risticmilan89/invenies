import React from "react";

const Display = ({ num, text, subText }) => {
  return (
    <div className="display">
      <div className="display-panel">
        <p className="num">{num}</p> <p className="text">{text}</p>
      </div>
      <p className="sub-text">{subText}</p>
    </div>
  );
};

export default Display;
