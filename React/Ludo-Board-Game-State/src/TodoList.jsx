import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; // unique id creating package

export default function TodoList()
{
    let [todos,setTodo] = useState([{task: "sample task", id: uuidv4()}]);
    let [newTodo, setNewTodo] =useState("");

    let addNewTask =() =>{
        setTodo((prevTodos)=>{
            return [...prevTodos, {task :newTodo, id: uuidv4()}]
        });
        setNewTodo("");
    }

    let updateTaskValue = (event)=>{
        setNewTodo(event.target.value);
    }

    let deleteTodo=(id)=>{
        setTodo((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id !=id));
    }

    let upperCaseAll= () =>{
       setTodo((prevTodos)=>prevTodos.map((todo)=>{
            return{
                ...todo,
                task: todo.task.toUpperCase()

            }
        }));
    }

    let UpperCaseOne=(id)=>{
        setTodo((prevTodos)=>prevTodos.map((todo)=>{
            if(todo.id== id){
                return{
                    ...todo,
                    task: todo.task.toUpperCase()
    
                }
            }
            else{
                return todo;
            }

        }));
         
    }
 
    return (
    <div>
        <input placeholder="add a task" value={newTodo} onChange={updateTaskValue}></input>
        <br /> <br />
        <button onClick={addNewTask} >Add Task</button>
        <br /><br /><br /><br /><br /><br />
        <hr /> 
        <h4>Task Todo</h4>
        <ul>
            {todos.map((todo) => (
                    <li key={todo.id}>
                    <span>{todo.task}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                    <button onClick={()=>UpperCaseOne(todo.id)}>UpperCase one </button>
                    </li>
                ))}
        </ul> 
        <br /> <br />
        <button onClick={upperCaseAll}>Upper Case All</button>
    </div>
    );
}
 