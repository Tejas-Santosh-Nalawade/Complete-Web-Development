import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; // unique id creating package

export default function UpdatedTodoList()
{
    let [todos,setTodo] = useState([{task: "sample task", id: uuidv4(), isDone:false}]);
    let [newTodo, setNewTodo] =useState("");

    let addNewTask =() =>{
        setTodo((prevTodos)=>{
            return [...prevTodos, {task :newTodo, id: uuidv4(), isDone: false}]
        });
        setNewTodo("");
    }

    let updateTaskValue = (event)=>{
        setNewTodo(event.target.value);
    }

    let deleteTodo=(id)=>{
        setTodo((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id !=id));
    }

    let markAllDone= () =>{
       setTodo((prevTodos)=>prevTodos.map((todo)=>{
            return{
                ...todo,
                isDone :true,

            }
        }));
    }

    let MarkAsDone=(id)=>{
        setTodo((prevTodos)=>prevTodos.map((todo)=>{
            if(todo.id== id){
                return{
                    ...todo,
                    isDone :true,
    
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
                    <span style={todo.isDone ? {textDecorationLine: "line-through"}: {}}>{todo.task}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={()=>MarkAsDone(todo.id)}>Mark As Done</button>
                    </li>
                ))}
        </ul> 
        <br /> <br />
        <button onClick={markAllDone}>Mark All Done</button>
    </div>
    );
}
 