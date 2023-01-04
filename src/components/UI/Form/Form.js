import React from "react";

import styles from "./Form.module.css";

const Form = (props) => {
  // Form component that can be re-used. The submit handler is passed through props. Any content can be passed in between.

  return (
    <form className={styles.form} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
};

export default Form;
