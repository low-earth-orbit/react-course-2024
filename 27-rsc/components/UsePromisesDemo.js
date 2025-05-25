"use client";

import { use, useState } from "react";

export default function UsePromiseDemo({ usersPromise }) {
  const users = use(usersPromise); // resolve the promise
  const [count, setCount] = useState(0);

  return (
    <div className="rsc">
      <h2>RSC with Data Fetching</h2>
      <p>
        Uses <strong>async / await</strong> for data fetching.
      </p>
      <p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <span>{count}</span>
      </p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.title})
          </li>
        ))}
      </ul>
    </div>
  );
}
