import { Link, useParams } from "react-router-dom";

export default function EventDetailPage() {
  const params = useParams();

  const eventId = params.eventId;

  return (
    <>
      <h1>Event Detail</h1>
      <p>{eventId}</p>
      <p>
        <Link to=".." relative="path">
          Back To Events List
        </Link>
      </p>
    </>
  );
}
