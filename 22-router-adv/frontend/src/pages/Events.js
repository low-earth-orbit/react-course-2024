import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "1",
    name: "Event 1",
  },
  {
    id: "2",
    name: "Event 2",
  },
  {
    id: "3",
    name: "Event 3",
  },
];

export default function EventsPage() {
  return (
    <>
      <h1>Events</h1>
      <ul>
        {DUMMY_EVENTS.map((item) => (
          <li key={item.id}>
            <Link to={item.id}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
