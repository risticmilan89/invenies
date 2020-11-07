import React from "react";

import switchButton from "../../../../assets/slider-head.png";

const CustomSwitch = ({ value, setValue }) => {
  const toggleValue = () => {
    setValue((oldValue) => !oldValue);
  };
  return (
    <div className="switch" onClick={toggleValue}>
      <div className="switch-bg" />
      <img
        src={switchButton}
        alt="switch button"
        className={`switch-button ${value ? "" : "active"}`}
      />
    </div>
  );
};

export default CustomSwitch;
