import React, { useState } from "react";

import classnames from "classnames";

import styles from "./BodyDropDown.module.css";

export const BodyDropDownOne = () => {
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);

  const onClickOne = () => {
    setShowOne(!showOne);
  };
  const onClickTwo = () => {
    setShowTwo(!showTwo);
  };
  return (
    <div id="wrap" className={styles.wrapper}>
      <div className={styles.elems}>
        <div>Элем1</div>
        <div className={styles.elem}>
          <div onClick={onClickOne}> Элем2</div>
          {showOne && (
            <div>
              <div>2.2.1</div>
              <div>2.2.2</div>
              <div>2.2.3</div>
            </div>
          )}
        </div>
        <div className={styles.elem}>
          <div onClick={onClickTwo}> Элем3</div>
          {showTwo && (
            <div>
              <div>2.3.1</div>
              <div>2.3.2</div>
              <div>2.3.3</div>
            </div>
          )}
        </div>
        <div>Элем4</div>
      </div>
    </div>
  );
};

export const BodyDropDownTwo = () => {
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);

  const onClickOne = () => {
    setShowOne(!showOne);
  };
  const onClickTwo = () => {
    setShowTwo(!showTwo);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.elems}>
        <div>Элем3.1</div>
        <div className={styles.elem}>
          <div onClick={onClickOne}>Элем3.2</div>
          {showOne && (
            <div>
              <div>3.2.1</div>
              <div>3.2.2</div>
              <div>3.2.3</div>
            </div>
          )}
        </div>
        <div className={styles.elem}>
          <div onClick={onClickTwo}> Элем3.4</div>
          {showTwo && (
            <div>
              <div>3.4.1</div>
              <div>3.4.2</div>
              <div>3.4.3</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
