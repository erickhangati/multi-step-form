import React, { useContext } from "react";

import StepContext from "../../../../store/step-context";

import styles from "./ListItem.module.css";

const ListItem = ({
  names,
  description,
  price,
  checked,
  className,
  onClick,
}) => {
  const stepCtx = useContext(StepContext);
  const classes = `${styles.item}${className ? ` ${className}` : ""}`;

  return (
    <div className={classes} onClick={onClick}>
      <input type="checkbox" checked={checked} onChange={onClick} />
      <h2>{names}</h2>
      <p>{description}</p>
      <span>{`+$${price}/${stepCtx.billed === "monthly" ? "mo" : "yr"}`}</span>
    </div>
  );
};

export default ListItem;
