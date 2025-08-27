import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { marksAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();
  const clickHandler = (id) => {
    console.log("delete", id);
    dispatch(deleteTodo(id));
  };
  const marksAsDoneHandler = (id) => {
    console.log("done", id);
    dispatch(marksAsDone(id));
  }
  return (
    <>
      <AddForm />
      <h2>Todos List App</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button onClick={() => clickHandler(todo.id)}>Delete</button>
            <button onClick={() =>marksAsDoneHandler(todo.id)} >Mark As Done</button>
          </li>
        ))}
      </ul>
    </>
  );
}
