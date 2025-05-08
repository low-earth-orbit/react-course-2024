import { useLoaderData, Await } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const data = useLoaderData();
  const { events } = data;

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(events) => <EventsList events={events} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not fetch events." }, { status: 500 })
    ); // this will go to the errorElement defined in the router.
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return {
    events: loadEvents(),
  };
}
