import { useState, useEffect } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      let response;
      try {
        response = await fetch("http://localhost:3000/meals");
      } catch (error) {
        console.error("Error fetching meals:", error);
      } // this try catch block catches errors in the fetch call
      // but not errors in the response

      if (!response.ok) {
        console.error("Failed to fetch meals");
        return;
      } // this if statement checks if the response is ok

      const resData = await response.json();

      setLoadedMeals(resData); // this line sets the loadedMeals state to the response data
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.length > 0 ? (
        loadedMeals.map((meal) => <MealItem key={meal.id} meal={meal} />)
      ) : (
        <p>No meals available</p>
      )}
    </ul>
  );
}
