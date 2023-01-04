import React, { useContext } from "react";

import StepContext from "../../../../store/step-context";
import { initialAddons } from "../../../../store/StepProvider";

import styles from "./Toggle.module.css";

const Toggle = () => {
  const stepCtx = useContext(StepContext);

  const toggleClickHandler = () => {
    // If billed is monthly set to yearly.
    if (stepCtx.billed === "monthly") {
      stepCtx.setBilled("yearly");
    }

    // If billed is yearly set to monthly.
    if (stepCtx.billed === "yearly") {
      stepCtx.setBilled("monthly");
    }

    // Reset plan is it was set before toggling.
    stepCtx.setPlan({
      names: "",
      price: 0,
    });

    // Remove error if any was selected due to skipping step without selecting plan.
    stepCtx.setPlanError(false);

    // Set addons to initial addons.
    stepCtx.setAddons(initialAddons);
  };

  return (
    <div className={styles["toggle-container"]}>
      <span className={stepCtx.billed === "monthly" ? styles.active : ""}>
        Monthly
      </span>
      <div className={styles.toggle}>
        <span
          onClick={toggleClickHandler}
          className={stepCtx.billed === "yearly" ? styles.yearly : ""}
        ></span>
      </div>
      <span className={stepCtx.billed === "yearly" ? styles.active : ""}>
        Yearly
      </span>
    </div>
  );
};

export default Toggle;
