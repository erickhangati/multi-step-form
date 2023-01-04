import React, { useContext } from "react";

import StepContext from "../../../../../store/step-context";

import styles from "./List.module.css";

const List = ({ names, price }) => {
  const stepCtx = useContext(StepContext);

  // Check if billed is monthly or yearly.
  const billed = stepCtx.billed === "monthly" ? "mo" : "yr";

  return (
    <li className={styles["addons-list"]}>
      <p>{names}</p>
      <span>{`+$${price}/${billed}`}</span>
    </li>
  );
};

export default List;
