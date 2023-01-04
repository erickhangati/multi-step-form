import React from "react";

import Section from "../../UI/Section/Section";
import Header from "../../UI/Header/Header";
import Addons from "./Addons/Addons";
import Buttons from "./Buttons/Buttons";

const Step3 = ({ setStep }) => {
  const heading = "Pick add-ons";
  const message = "Add-ons help enhance your gaming experience.";

  return (
    <Section>
      <Header heading={heading} message={message} />
      <Addons />
      <Buttons setStep={setStep} />
    </Section>
  );
};

export default Step3;
