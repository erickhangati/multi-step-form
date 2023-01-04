import React, { useContext } from "react";

import StepContext from "../../../../store/step-context";
import List from "./List/List";

import styles from "./Confirm.module.css";

const Confirm = ({ setStep }) => {
  const stepCtx = useContext(StepContext);

  const selectedAddons = (
    stepCtx.billed === "monthly"
      ? stepCtx.addons.monthly
      : stepCtx.addons.yearly
  ).filter((addon) => addon.checked);

  const plan = stepCtx.plan.price;
  const addons = selectedAddons.reduce((acc, addon) => acc + addon.price, 0);
  const total = plan + addons;

  const changeClickHandler = () => {
    stepCtx.setStep(2);
    setStep(2);
  };

  return (
    <div className={styles.confirm}>
      <ul className={styles.summary}>
        <div
          className={`${styles.plan}${
            selectedAddons.length > 0 ? ` ${styles.addons}` : ""
          }`}
        >
          <h2>{`${stepCtx.plan.names} (${
            stepCtx.billed === "monthly" ? "Monthly" : "Yearly"
          })`}</h2>
          <span className={styles.change} onClick={changeClickHandler}>
            Change
          </span>
          <span className={styles.price}>{`$${stepCtx.plan.price}/${
            stepCtx.billed === "monthly" ? "mo" : "yr"
          }`}</span>
        </div>
        {selectedAddons.map((addon, index) => (
          <List key={index} names={addon.names} price={addon.price} />
        ))}
      </ul>
      <div className={styles.total}>
        <p>{`Total (per ${
          stepCtx.billed === "monthly" ? "month" : "year"
        })`}</p>
        <span>{`$${total}/${stepCtx.billed === "monthly" ? "mo" : "yr"}`}</span>
      </div>
    </div>
  );
};

export default Confirm;
