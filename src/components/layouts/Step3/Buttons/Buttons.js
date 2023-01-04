import React, { useContext } from "react";

import Button from "../../../UI/Button/Button";
import StepContext from "../../../../store/step-context";

import styles from "./Buttons.module.css";

const Buttons = ({ setStep }) => {
  const stepCtx = useContext(StepContext);

  const backClickHandler = () => {
    stepCtx.setStep(2);
    setStep(2);
  };

  const nextClickHandler = () => {
    stepCtx.setStep(4);
    setStep(4);
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
