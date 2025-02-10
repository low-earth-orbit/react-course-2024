import Places from "./Places.jsx";
import { useState, useEffect } from "react";
import ErrorPage from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";

const places = localStorage.getItem("places");

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const response = await fetch("http://localhost:3000/places"); // error could occur here
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("Failed to fetch places"); // this is what we consider an error response (if not 200, 300)
        }

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaced = sortPlacesByDistance(
            resData.places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaced);
          setIsFetching(false);
        });
      } catch (error) {
        setError({
          message: error.message || "Could not fetch places, please try again",
        });
        setIsFetching(false);
      }
    }

    fetchPlaces();
  }, []);

  if (error)
    return <ErrorPage title="An error occurred" message={error.message} />;
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
