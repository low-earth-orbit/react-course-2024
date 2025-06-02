import { useState, useRef } from "react";

export default function SearchableList({ items, itemKeyFn, children }) {
  const lastChangeTime = useRef(0);

  const [searchTerm, setSearchTerm] = useState("");

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleChange(event) {
    if (lastChangeTime.current) {
      clearTimeout(lastChangeTime.current);
    }

    lastChangeTime.current = setTimeout(() => {
      setSearchTerm(event.target.value);
    }, 500); // Debounce the search input
  }

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange} />
      <ul>
        {searchResults.map((item) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}
