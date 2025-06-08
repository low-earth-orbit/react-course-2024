import Todo from "../models/todos";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ item: Todo; onRemove: () => void }> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemove}>
      {props.item.text}
    </li>
  );
};

export default TodoItem;
