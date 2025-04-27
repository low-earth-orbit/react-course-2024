import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";

const requestConfig = {};
const initialData = [];

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, initialData);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
