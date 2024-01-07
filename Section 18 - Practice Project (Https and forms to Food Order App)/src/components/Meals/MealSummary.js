import React from "react";
import style from "./MealsSummary.module.css";

const MealSummary = () => {
  return (
    <section className={style.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our borad selection of available meals
        and enjoy a delicious lunch or dinner at home
      </p>
      <p>
        All our meals are cooked with hight-quality ingredients, just-in-time
        and of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealSummary;
