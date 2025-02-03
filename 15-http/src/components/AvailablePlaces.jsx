import Places from "./Places.jsx";
import { useState, useEffect } from "react";

const places = localStorage.getItem("places");

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  // useEffect block will run only once in first render of this component
  // to prevent repeated requests
  useEffect(() => {
    // send an HTTP request and update the state
    fetch("http://localhost:3000/places") // this is a GET request
      .then((response) => {
        // should be executive upon resolving the promise / getting a response
        return response.json(); // extract data in json format; standard data format for exchanging data with backend
      })
      .then((resData) => {
        setAvailablePlaces(resData.places); // resData is the response data in json format, returned by previous action
      });
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
