import React from "react";

import styles from "./Header.module.css";

const Header = ({ heading, message }) => {
  // Header component can be re-used. It only needs Heading and Message that can be passed through props.

  return (
    <header className={styles.header}>
      <h2>{heading}</h2>
      <p>{message}</p>
    </header>
  );
};

export default Header;
