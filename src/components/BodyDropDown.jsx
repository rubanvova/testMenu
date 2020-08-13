import React, { useState } from "react";

import styles from "./BodyDropDown.module.css";

export const BodyDropDownOne = ({ visibleBody }) => {
  const [active, setActive] = useState(0);
  const visible = visibleBody ? "initial" : "none";

  const onClickOne = (value) => {
    setActive(value);
  };

  const One = () => (
    <div>
      <div>2.1.1</div>
      <div>2.1.2</div>
      <div>2.1.3</div>
    </div>
  );
  const Two = () => (
    <div>
      <div>2.2.1</div>
      <div>2.2.2</div>
      <div>2.2.3</div>
    </div>
  );
  const Three = () => (
    <div>
      <div>2.3.1</div>
      <div>2.3.2</div>
      <div>2.3.3</div>
    </div>
  );

  const podMenu = (active) => {
    switch (active) {
      case 1:
        return <One />;
      case 2:
        return <Two />;
      case 3:
        return <Three />;
      default:
        return "";
    }
  };

  return (
    <div id="wrap" className={styles.wrapper}>
      <div className={styles.elems}>
        <div className={styles.elem}>
          <div onClick={() => onClickOne(1)}>Элем1</div>
          <div className={styles.showElem}>
            {active === 1 ? podMenu(active) : ""}
          </div>
          <div style={{ display: visible }}>
            <One />
          </div>
        </div>
        <div className={styles.elem}>
          <div onClick={() => onClickOne(2)}> Элем2</div>
          <div className={styles.showElem}>
            {active === 2 ? podMenu(active) : ""}
          </div>
          <div style={{ display: visible }}>
            <Two />
          </div>
        </div>
        <div className={styles.elem}>
          <div onClick={() => onClickOne(3)}> Элем3</div>
          <div className={styles.showElem}>
            {active === 3 ? podMenu(active) : ""}
          </div>
          <div style={{ display: visible }}>
            <Three />
          </div>
        </div>
        <div>Элем4</div>
      </div>
    </div>
  );
};

export const BodyDropDownTwo = ({ visibleBody }) => {
  const [active, setActive] = useState(0);
  const visible = visibleBody ? "initial" : "none";
  const One = () => (
    <div>
      <div>3.1.1</div>
      <div>3.1.2</div>
      <div>3.1.3</div>
    </div>
  );
  const Two = () => (
    <div>
      <div>3.2.1</div>
      <div>3.2.2</div>
      <div>3.2.3</div>
    </div>
  );
  const Three = () => (
    <div>
      <div>3.3.1</div>
      <div>3.3.2</div>
      <div>3.3.3</div>
    </div>
  );

  const onClickOne = (value) => {
    setActive(value);
  };

  const podMenu = (active) => {
    switch (active) {
      case 1:
        return <One />;
      case 2:
        return <Two />;
      case 3:
        return <Three />;
      default:
        return "";
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.elems}>
        <div className={styles.elem}>
          <div onClick={() => onClickOne(1)}>Элем3.1</div>
          <div className={styles.showElem}>
            {active === 1 ? podMenu(active) : ""}
          </div>
          <div style={{ display: visible }}>
            <One />
          </div>
        </div>
        <div className={styles.elem}>
          <div onClick={() => onClickOne(2)}>Элем3.2</div>
          <div className={styles.showElem}>
            {active === 2 ? podMenu(active) : ""}
          </div>
          <div style={{ display: visible }}>
            <Two />
          </div>
        </div>
        <div className={styles.elem}>
          <div onClick={() => onClickOne(3)}> Элем3.3</div>
          <div className={styles.showElem}>
            {active === 3 ? podMenu(active) : ""}
          </div>
          <div style={{ display: visible }}>
            <Three />
          </div>
        </div>
      </div>
    </div>
  );
};
