import React from "react";
import styles from "./DropDownButton.module.css";

const DropDownButton = ({ title, body }) => (
  <div className={styles.box}>
    <a href="##" className={styles.title}>
      {title}
    </a>
    <img
      src="https://image.flaticon.com/icons/png/512/130/130882.png"
      className={styles.newsArrow}
      height="6px"
      alt=""
    />
    <div className={styles.dropDownNews}>{body}</div>
  </div>
);

export default DropDownButton;
