import React from "react";
import Todos from "./components/Todos";
import Todo from "./models/todos";
function App() {
  const todos = [new Todo("Learn react"), new Todo("Learn ts")];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
