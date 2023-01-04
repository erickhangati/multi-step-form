import React, { useContext } from "react";

import StepContext from "../../../../store/step-context";
import { initialAddons } from "../../../../store/StepProvider";

import styles from "./Toggle.module.css";

const Toggle = () => {
  const stepCtx = useContext(StepContext);

  const toggleClickHandler = () => {
    if (stepCtx.billed === "monthly") {
      stepCtx.setBilled("yearly");
    }

    if (stepCtx.billed === "yearly") {
      stepCtx.setBilled("monthly");
    }

    stepCtx.setPlan({
      names: "",
      price: 0,
    });

    stepCtx.setPlanError(false);

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
