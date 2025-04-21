import { useState, useEffect } from "react";

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
        loadedMeals.map((meal) => (
          <li key={meal.id}>
            <h2>{meal.name}</h2>
            <p>{meal.description}</p>
            <span>${meal.price}</span>
            <image src={meal.image} alt={"photo of " + meal.name} />
          </li>
        ))
      ) : (
        <p>No meals available</p>
      )}
    </ul>
  );
}
