import React from "react";

import styles from "./ThankYou.module.css";

const ThankYou = () => {
  return (
    <div className={styles["thank-you"]}>
      <div></div>
      <h2>Thank you!</h2>
      <p>
        Thanks for confirming your subscription. We hope you have fun using our
        platform. If you ever need support, please feel free and email us at
        hello@erickhangati.dev.
      </p>
    </div>
  );
};

export default ThankYou;
