import React, { useContext } from "react";

import Button from "../../../UI/Button/Button";
import StepContext from "../../../../store/step-context";

import styles from "./Buttons.module.css";

const Buttons = ({ setStep }) => {
  const stepCtx = useContext(StepContext);

  const backClickHandler = () => {
    // Set step to 1 to render step 1.
    stepCtx.setStep(1);
    setStep(1);
  };

  const nextClickHandler = () => {
    // Check if plan selected. If not set error.
    if (stepCtx.plan.names.length === 0) {
      stepCtx.setPlanError(true);
      return;
    }

    // Set step to 3 to render step 3.
    stepCtx.setStep(3);
    setStep(3);
  };

  return (
    <div className={styles.buttons}>
      <Button className={styles.back} onClick={backClickHandler}>
        Go Back
      </Button>
      <Button onClick={nextClickHandler}>Next Step</Button>
    </div>
  );
};

export default Buttons;
