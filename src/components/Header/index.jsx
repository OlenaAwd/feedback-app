import React from "react";
import styles from "./Header.module.scss";

const Header = ({ text }) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};

export default Header;
