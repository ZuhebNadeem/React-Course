import React, { useEffect, useState } from "react";
import style from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card/Card";

const AvailableMeals = () => {
  const [allMeals, setAllMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const fetchMeals = async () => {
    setLoading(true);
    const response = await fetch(
      "https://reactcourse-1e7c6-default-rtdb.firebaseio.com/taks/meals.json",
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const responseData = await response.json();
    const loadedMeals = [];

    for (const key in responseData) {
      loadedMeals.push({
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price,
      });
    }

    setAllMeals(loadedMeals);
    setLoading(false);
  };

  useEffect(() => {
    fetchMeals().catch(() => {
      setLoading(false);
      setError(true);
    });
  }, []);

  return (
    <section className={style.meals}>
      <Card>
        <ul>
          {loading && <p>Loading</p>}
          {hasError && <p>Something went wrong</p>}
          {allMeals.map((meal) => {
            return <MealItem id={meal.id} key={meal.id} meals={meal} />;
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
