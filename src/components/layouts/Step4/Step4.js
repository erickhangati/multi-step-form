import React, { useContext } from "react";

import Section from "../../UI/Section/Section";
import Summary from "./Summary";
import ThankYou from "./ThankYou/ThankYou";
import StepContext from "../../../store/step-context";

const Step3 = ({ setStep }) => {
  const stepCtx = useContext(StepContext);

  return (
    <Section>
      {!stepCtx.orderConfirmed && <Summary setStep={setStep} />}
      {stepCtx.orderConfirmed && <ThankYou />}
    </Section>
  );
};

export default Step3;
