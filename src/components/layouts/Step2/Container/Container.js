import React from "react";

import styles from "./Container.module.css";

// Re-usable container component.

const Container = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default Container;
