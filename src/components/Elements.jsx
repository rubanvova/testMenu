import React from "react";

import DropDownButton from "./DropDownButton";
import { BodyDropDownOne, BodyDropDownTwo } from "./BodyDropDown";

import styles from "./Elements.module.css";

const Elements = () => {
  return (
    <div className={styles.buttons}>
      <DropDownButton title="Каталог" />
      <DropDownButton title="Новости" body={<BodyDropDownOne visibleBody />} />
      <DropDownButton
        title="Автобарахолка"
        body={<BodyDropDownTwo visibleBody />}
      />
      <DropDownButton title="Дома и квартиры" />
      <DropDownButton title="Услуги" />
      <DropDownButton title="Барахолка" />
      <DropDownButton title="Форум" />
    </div>
  );
};

export default Elements;
