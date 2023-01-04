import React, { useContext } from "react";

import Section from "../../UI/Section/Section";
import Header from "../../UI/Header/Header";
import Monthly from "./Monthly";
import Yearly from "./Yearly";
import Toggle from "./Toggle/Toggle";
import StepContext from "../../../store/step-context";
import Buttons from "./Buttons/Buttons";

const Step2 = ({ setStep }) => {
  const stepCtx = useContext(StepContext);

  // Step heading and description.
  const heading = "Select your plan";
  const message = "You have the option of monthly and yearly billing.";

  return (
    <Section>
      {/* Render header */}
      <Header heading={heading} message={message} />

      {/* Render plan with the state */}
      {stepCtx.billed === "monthly" && <Monthly />}
      {stepCtx.billed === "yearly" && <Yearly />}

      {/* Render toggle component */}
      <Toggle />

      {/* Render buttons for back/next step */}
      <Buttons setStep={setStep} />
    </Section>
  );
};

export default Step2;
