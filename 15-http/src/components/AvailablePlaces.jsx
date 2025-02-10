import Places from "./Places.jsx";
import { useState, useEffect } from "react";
import ErrorPage from "./Error.jsx";

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

        setAvailablePlaces(resData.places);
      } catch (error) {
        setError({
          message: error.message || "Could not fetch places, please try again",
        });
      }

      setIsFetching(false); // end loading state not matter it succeeds or not
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
