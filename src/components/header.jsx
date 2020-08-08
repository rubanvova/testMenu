import React, { useState } from "react";

import Elements from "./Elements";
import BurgerMenu from "./BurgerMenu";

import burger from "./img/burger.svg";
import close from "./img/close.svg";

import styles from "./header.module.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const onClickBurger = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className={styles.wrapperHeader}>
      <div>
        <div className={styles.box1}>
          <div className={styles.panel1}>
            <div className={styles.burger} onClick={onClickBurger}>
              <div>
                {showMenu ? (
                  <img src={close} alt="" height="40px" />
                ) : (
                  <img src={burger} alt="" />
                )}
              </div>
            </div>
            <div className={styles.elements}>
              <Elements />
            </div>
          </div>
        </div>
      </div>
      {showMenu && <BurgerMenu />}
    </div>
  );
};

export default Header;
