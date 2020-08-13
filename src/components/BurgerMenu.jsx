import React, { useState } from "react";
import scrollIntoView from "scroll-into-view-if-needed";

import BurgerElem from "./BurgerElem";
import { BodyDropDownOne, BodyDropDownTwo } from "./BodyDropDown";

import styles from "./BurgerMenu.module.css";

const BurgerMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const block = (value) => {
    const a = document.getElementById(value);
    scrollIntoView(a, {
      behavior: "smooth",
      block: "start",
    });
  };

  const onClickOne = () => {
    const news = "news";
    if (activeMenu === 0) {
      setActiveMenu(null);
    } else {
      setActiveMenu(0);
    }
    block(news);
  };
  const onClickTwo = () => {
    const avto = "avto";
    if (activeMenu === 1) {
      setActiveMenu(null);
    } else {
      setActiveMenu(1);
    }
    block(avto);
  };

  return (
    <div className={styles.boxMenu}>
      <BurgerElem arrowOff title="Каталог" />
      <div id="news">
        <BurgerElem
          title="Новости"
          onClick={onClickOne}
          isOpen={0 === activeMenu}
          body={<BodyDropDownOne />}
        />
      </div>
      <div id="avto">
        <BurgerElem
          onClick={onClickTwo}
          isOpen={1 === activeMenu}
          title="Автобарахолка"
          body={<BodyDropDownTwo />}
        />
      </div>
      <BurgerElem arrowOff title="Дома и квартиры" />
      <BurgerElem arrowOff title="Услуги" />
      <BurgerElem arrowOff title="Барахолка" />
      <BurgerElem arrowOff title="Форум" />
    </div>
  );
};

export default BurgerMenu;
