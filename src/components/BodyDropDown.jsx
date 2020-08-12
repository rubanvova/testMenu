import React, { useState } from "react";

import styles from "./BodyDropDown.module.css";

export const BodyDropDownOne = () => {
  const [active, setActive] = useState(0);

  const onClickOne = (value) => {
    setActive(value);
    console.log(value);
  };

  const podMenu = (active) => {
    switch (active) {
      case 1:
        return (
          <div>
            <div>2.1.1</div>
            <div>2.1.2</div>
            <div>2.1.3</div>
          </div>
        );
      case 2:
        return (
          <div>
            <div>2.2.1</div>
            <div>2.2.2</div>
            <div>2.2.3</div>
          </div>
        );
      case 3:
        return (
          <div>
            <div>2.3.1</div>
            <div>2.3.2</div>
            <div>2.3.3</div>
          </div>
        );
      default:
        return "";
    }
  };

  return (
    <div id="wrap" className={styles.wrapper}>
      <div className={styles.elems}>
        <div className={styles.elem}>
          <div onClick={() => onClickOne(1)}>Элем1</div>
          {active === 1 ? podMenu(active) : ""}
        </div>
        <div className={styles.elem}>
          <div onClick={() => onClickOne(2)}> Элем2</div>
          {active === 2 ? podMenu(active) : ""}
        </div>
        <div className={styles.elem}>
          <div onClick={() => onClickOne(3)}> Элем3</div>
          {active === 3 ? podMenu(active) : ""}
        </div>
        <div>Элем4</div>
      </div>
    </div>
  );
};

export const BodyDropDownTwo = () => {
  const [active, setActive] = useState(0);

  const onClickOne = (value) => {
    setActive(value);
    console.log(value);
  };

  const podMenu = (active) => {
    switch (active) {
      case 1:
        return (
          <div>
            <div>3.1.1</div>
            <div>3.1.2</div>
            <div>3.1.3</div>
          </div>
        );
      case 2:
        return (
          <div>
            <div>3.2.1</div>
            <div>3.2.2</div>
            <div>3.2.3</div>
          </div>
        );
      case 3:
        return (
          <div>
            <div>3.3.1</div>
            <div>3.3.2</div>
            <div>3.3.3</div>
          </div>
        );
      default:
        return "";
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.elems}>
        <div className={styles.elem}>
          <div onClick={() => onClickOne(1)}>Элем3.1</div>
          {active === 1 ? podMenu(active) : ""}
        </div>
        <div className={styles.elem}>
          <div onClick={() => onClickOne(2)}>Элем3.2</div>
          {active === 2 ? podMenu(active) : ""}
        </div>
        <div className={styles.elem}>
          <div onClick={() => onClickOne(3)}> Элем3.3</div>
          {active === 3 ? podMenu(active) : ""}
        </div>
      </div>
    </div>
  );
};
