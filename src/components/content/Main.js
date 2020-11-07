import React, { useState } from "react";

import Grid from "./main/Grid";
import Display from "./main/Display";

const Main = () => {
  const [age, setAge] = useState(25);
  const [genderMale, setGenderMale] = useState(true);
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(80);
  const [active, setActive] = useState(2);

  const activeDesc = [
    { value: 1, desc: "Not active" },
    { value: 1.2, desc: "Barely active" },
    { value: 1.4, desc: "Somewhat active" },
    { value: 1.6, desc: "Active" },
    { value: 1.9, desc: "Very active" },
  ];

  const packedProps = {
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
  };

  //calculation
  const genderValue = genderMale ? 5 : -161;
  const bmiCalculation = 10 * weight + 6.25 * height - 5 * age + genderValue;
  const bmiCalculationTimesActivity =
    bmiCalculation * activeDesc[active - 1].value;
  const bmiCalculationRound = Math.round(bmiCalculationTimesActivity);

  return (
    <div className="flex column main">
      <Grid packedProps={packedProps} />
      <div className="display-wrapper">
        <Display
          num={bmiCalculationRound}
          text="calories per day"
          subText="no weight loss"
        />
        <Display
          num={
            active === 1
              ? "-"
              : Math.round(bmiCalculationRound - bmiCalculationRound * 0.2)
          }
          text="calories per day"
          subText="slight weight loss - 20%"
        />
      </div>
    </div>
  );
};

export default Main;
