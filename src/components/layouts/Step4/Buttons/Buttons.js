import React, { useContext } from "react";

import Button from "../../../UI/Button/Button";
import StepContext from "../../../../store/step-context";

import styles from "./Buttons.module.css";

const Buttons = ({ setStep }) => {
  const stepCtx = useContext(StepContext);

  const selectedAddons = (
    stepCtx.billed === "monthly"
      ? stepCtx.addons.monthly
      : stepCtx.addons.yearly
  ).filter((addon) => addon.checked);

  const backClickHandler = () => {
    stepCtx.setStep(3);
    setStep(3);
  };

  const nextClickHandler = () => {
    stepCtx.setOrderConfirmed(true);
    stepCtx.setOrder({
      customer: stepCtx.inputValues.names,
      email: stepCtx.inputValues.email,
      phone: stepCtx.inputValues.phone,
      plan: stepCtx.plan,
      addons: selectedAddons,
    });
  };

  return (
    <div className={styles.buttons}>
      <Button className={styles.back} onClick={backClickHandler}>
        Go Back
      </Button>
      <Button onClick={nextClickHandler} className={styles.confirm}>
        Confirm
      </Button>
    </div>
  );
};

export default Buttons;
