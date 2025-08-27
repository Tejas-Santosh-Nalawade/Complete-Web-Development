import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";


export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(task);
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Add a new todo"
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
