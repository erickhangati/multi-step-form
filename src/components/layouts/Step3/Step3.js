import React from "react";

import Section from "../../UI/Section/Section";
import Header from "../../UI/Header/Header";
import Addons from "./Addons/Addons";
import Buttons from "./Buttons/Buttons";

const Step3 = ({ setStep }) => {
  // Step heading and description.
  const heading = "Pick add-ons";
  const message = "Add-ons help enhance your gaming experience.";

  return (
    <Section>
      {/* Render Header Components. */}
      <Header heading={heading} message={message} />

      {/* Render Addond Components. */}
      <Addons />

      {/* Render Buttons Components. */}
      <Buttons setStep={setStep} />
    </Section>
  );
};

export default Step3;
