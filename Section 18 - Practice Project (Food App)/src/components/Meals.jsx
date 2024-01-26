import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [loadedMelas, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMelas() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
      }

      const meals = await response.json();
      setLoadedMeals(meals);
    }

    fetchMelas();
  }, []);

  return (
    <ul id="meals">
      {loadedMelas.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
