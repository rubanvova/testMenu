import React from "react";

import classnames from "classnames";

import styles from "./BurgerElem.module.css";

const BurgerElem = ({ title, body, onClick, isOpen, arrowOff }) => {
  const arrow = arrowOff ? "none" : "";
  return (
    <div>
      <div className={styles.box}>
        <a href="##" className={styles.title}>
          {title}
        </a>
        <div className={styles.wrapperArrow} style={{ display: arrow }}>
          <img
            src="https://image.flaticon.com/icons/png/512/130/130882.png"
            className={classnames(styles.newsArrow, {
              [styles.newsArrowActive]: isOpen,
            })}
            height="10px"
            alt=""
            onClick={onClick}
          />
        </div>
      </div>
      <div className={styles.dropDownNews}>{isOpen && body}</div>
    </div>
  );
};

export default BurgerElem;
