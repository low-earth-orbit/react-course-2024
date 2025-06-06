import Todo from "../models/todos";

const TodoItem: React.FC<{ item: Todo }> = (props) => {
  return <li>{props.item.text}</li>;
};

export default TodoItem;
