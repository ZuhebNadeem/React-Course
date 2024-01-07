import React, { useContext } from "react";
import style from "./MealItem.module.css";
import MealItemForm from "../Form/MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.meals.price}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.meals.name,
      amount: amount,
      price: props.meals.price,
    });
  };

  return (
    <li className={style.meal}>
      <div>
        <h3>{props.meals.name}</h3>
        <div className={style.description}>{props.meals.description}</div>
        <div className={style.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
