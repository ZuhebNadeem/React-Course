import React, { useState } from "react";
import style from "./Header.module.css";
import img from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={style.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={style.mainImage}>
        <img src={img} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
