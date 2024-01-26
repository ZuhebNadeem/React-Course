import React, { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

export default function Headers() {
  const cartCtx = useContext(CartContext);

  const totaltCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A resturant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>{totaltCartItems}</Button>
      </nav>
    </header>
  );
}
