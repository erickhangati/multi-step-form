import React from "react";

import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles["input-container"]}>
      <div className={styles["input-labels"]}>
        <label>{props.label}</label>
        {props.error && <span>This field is required</span>}
      </div>
      <input
        className={props.className ? styles.error : ""}
        type={props.type}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
};

export default Input;
