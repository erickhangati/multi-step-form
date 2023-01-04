import React, { useContext } from "react";

import Button from "../../../UI/Button/Button";
import StepContext from "../../../../store/step-context";

import styles from "./Buttons.module.css";

const Buttons = ({ setStep }) => {
  const stepCtx = useContext(StepContext);

  const backClickHandler = () => {
    stepCtx.setStep(1);
    setStep(1);
  };

  const nextClickHandler = () => {
    if (stepCtx.plan.names.length === 0) {
      stepCtx.setPlanError(true);
      return;
    }

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
