import React, { useState } from "react";
import Passport from "./Passport";
import Success from "./Success";
import Visa from "./Visa";

export default function Stepper() {
  const [data, setData] = useState({
    step: 1,
  });

  const prevStep = () => {
    const { step } = data;
    setData({ step: step - 1 });
  };

  const nextStep = () => {
    const { step } = data;
    setData({ step: step + 1 });
  };

  const { step } = data;

  switch (step) {
    case 1:
      return <Passport nextStep={nextStep} />;
    case 2:
      return <Visa prevStep={prevStep} nextStep={nextStep} />;
    case 3:
      return <Success />;
    default:
  }

  return <></>;
}
