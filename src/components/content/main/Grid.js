import React from "react";

import female from "../../../assets/female.svg";
import male from "../../../assets/male.svg";
import { ReactComponent as Couch } from "../../../assets/couch.svg";
import { ReactComponent as Workout } from "../../../assets/workout.svg";

import CustomInput from "./grid/CustomInput";
import CustomSlider from "./grid/CustomSlider";
import CustomSwitch from "./grid/CustomSwitch";

const Grid = ({ packedProps }) => {
  const {
    age,
    setAge,
    genderMale,
    setGenderMale,
    height,
    setHeight,
    weight,
    setWeight,
    active,
    setActive,
    activeDesc,
  } = packedProps;

  return (
    <div className="main-grid">
      {/* 1st row -------------------------------------------------------------------- */}
      <label htmlFor="age-slider" className="title">
        Age ({age})
      </label>
      <p className="center numbers">15</p>
      <CustomSlider
        formId="age-slider"
        min={15}
        max={80}
        value={age}
        setValue={setAge}
      />
      <p className="center numbers">80</p>

      {/* 2nd row -------------------------------------------------------------------- */}
      <p className="title">Gender</p>
      <div onClick={(_) => setGenderMale(true)}>
        <img
          className="img-male"
          src={male}
          alt="male"
          height="35px"
          width="35px"
        />
      </div>
      <div className="input-wrapper span-2">
        <CustomSwitch value={genderMale} setValue={setGenderMale} />
        <div onClick={(_) => setGenderMale(false)}>
          <img
            className="img-female"
            src={female}
            alt="female"
            height="45px"
            width="45px"
          />
        </div>
      </div>

      {/* 3rd row -------------------------------------------------------------------- */}
      <label htmlFor="height-input" className="title span-2">
        Height
      </label>
      <div className="input-wrapper  span-2">
        <CustomInput
          formId="height-input"
          value={height}
          setValue={setHeight}
        />
        <p className="small">cm</p>
      </div>

      {/* 4th row -------------------------------------------------------------------- */}
      <label htmlFor="weight-input" className="title span-2">
        Weight
      </label>
      <div className="input-wrapper  span-2">
        <CustomInput
          formId="weight-input"
          value={weight}
          setValue={setWeight}
        />
        <p className="small">kg</p>
      </div>

      {/* 5th row -------------------------------------------------------------------- */}
      <label htmlFor="activity-slider" className="title span-2 activity">
        Activity
      </label>
      <p className="title span-2 activity activity-desc">
        {activeDesc[active - 1].desc}
      </p>

      {/* 6th row --------------------------------------------------------------------  */}
      <div />
      <Couch />
      <CustomSlider
        formId="activity-slider"
        min={1}
        max={5}
        value={active}
        setValue={setActive}
      />
      <Workout />
    </div>
  );
};

export default Grid;
