import React, { useState } from "react";

import BurgerElem from "./BurgerElem";
import { BodyDropDownOne, BodyDropDownTwo } from "./BodyDropDown";

import styles from "./BurgerMenu.module.css";

const BurgerMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const onClickOne = () => {
    if (activeMenu === 0) {
      setActiveMenu(null);
    } else {
      setActiveMenu(0);
    }
    const scroll = (block) => {
      block.scrollIntoView({
        block: "end",
        behavior: "smooth",
      });
    };
  };
  const onClickTwo = () => {
    if (activeMenu === 1) {
      setActiveMenu(null);
    } else {
      setActiveMenu(1);
    }
  };

  return (
    <div id="box" className={styles.boxMenu}>
      <BurgerElem
        onClick={onClickOne}
        isOpen={0 === activeMenu}
        title="Каталог"
        body={BodyDropDownOne()}
      />
      <BurgerElem
        onClick={onClickTwo}
        isOpen={1 === activeMenu}
        title="Новости"
        body={BodyDropDownTwo()}
      />
    </div>
  );
};

export default BurgerMenu;
