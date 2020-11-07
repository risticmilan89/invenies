import React, { useEffect, useState, useRef } from "react";

const CustomSlider = ({ min, max, value, setValue, formId }) => {
  const buttonRef = useRef(null);
  const [totalWidth, setTotalWidth] = useState(1);
  const [draging, setDraging] = useState(false);

  useEffect(() => {
    const { width } = buttonRef.current.getBoundingClientRect();
    setTotalWidth(width - 30); //30px is button width
  }, [buttonRef]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const calcValue = (value - min) * (totalWidth / (max - min));
  const dinamicStyle = { left: `${calcValue}px` };

  return (
    <label className="custom-slider relative" ref={buttonRef}>
      <div className={`blue-box`} style={dinamicStyle}>
        <div
          className={`blue-box-bg ${draging === true ? "animated-box" : ""}`}
        />
        {draging && <span className="slider-text">{value}</span>}
      </div>

      <input
        id={formId}
        className="slider"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        onMouseDown={() => setDraging(true)}
        onMouseUp={() => setDraging(false)}
        onTouchStart={() => setDraging(true)}
        onTouchEnd={() => setDraging(false)}
      />
    </label>
  );
};

export default CustomSlider;
