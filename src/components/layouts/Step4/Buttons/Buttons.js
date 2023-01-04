import React, { useContext } from "react";

import Button from "../../../UI/Button/Button";
import StepContext from "../../../../store/step-context";

import styles from "./Buttons.module.css";

const Buttons = ({ setStep }) => {
  const stepCtx = useContext(StepContext);

  // Loop to select the selected addons.
  const selectedAddons = (
    stepCtx.billed === "monthly"
      ? stepCtx.addons.monthly
      : stepCtx.addons.yearly
  ).filter((addon) => addon.checked);

  const backClickHandler = () => {
    // Set step to 3 to render step 3
    stepCtx.setStep(3);
    setStep(3);
  };

  const nextClickHandler = () => {
    // Set confirmed to true.
    stepCtx.setOrderConfirmed(true);

    // Set order with order details.
    stepCtx.setOrder({
      customer: stepCtx.inputValues.names,
      email: stepCtx.inputValues.email,
      phone: stepCtx.inputValues.phone,
      plan: stepCtx.plan,
      addons: selectedAddons,
    });

    // Reset input values.
    stepCtx.setInputValues({
      names: "",
      email: "",
      phone: "",
    });

    // Reset billed to initial monthly.
    stepCtx.billed("monthly");

    // Reset plan
    stepCtx.setPlan({
      names: "",
      price: 0,
    });

    // Reset addons
    stepCtx.setAddons([]);
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
