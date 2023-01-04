import React from "react";

import styles from "./ListItem.module.css";

const ListItem = ({ number, step, menu, className, onClick }) => {
  // Local class plus any classes passed through props.
  const classes = `${styles["list-item"]}${
    className ? ` ${styles.active}` : ""
  }`;

  return (
    <li className={classes} onClick={onClick}>
      <span className={styles.number}>{number}</span>
      <span className={styles.step}>{step}</span>
      <span className={styles.menu}>{menu}</span>
    </li>
  );
};

export default ListItem;
