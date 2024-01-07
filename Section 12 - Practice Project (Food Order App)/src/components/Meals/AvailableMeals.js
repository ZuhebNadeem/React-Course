import React from "react";
import { DUMMY_MEALS } from "../../data/dummy-mels";
import style from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card/Card";

const AvailableMeals = () => {
  return (
    <section className={style.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => {
            return <MealItem id={meal.id} key={meal.id} meals={meal} />;
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
