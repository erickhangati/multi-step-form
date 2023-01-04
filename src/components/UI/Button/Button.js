import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  // Button class entered locally or any passed through props.
  const classes = `${styles.button}${
    props.className ? ` ${props.className}` : ""
  }`;

  // This button component can be re-used and takes Type and Click Handler Function through props. Content passed in between.

  return (
    <button className={classes} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
