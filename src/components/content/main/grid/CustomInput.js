import React from "react";

const CustomInput = ({ value, setValue, formId }) => {
  const handleChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setValue(e.target.value);
    }
  };
  return (
    <>
      <input
        id={formId}
        className="custom-input"
        type="number"
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default CustomInput;
