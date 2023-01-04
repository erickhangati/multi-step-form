import React from "react";

import styles from "./Header.module.css";

const Header = ({ heading, message }) => {
  return (
    <header className={styles.header}>
      <h2>{heading}</h2>
      <p>{message}</p>
    </header>
  );
};

export default Header;
