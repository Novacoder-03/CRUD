
import { useState } from 'react';
import './App.css';
import {Task} from './Task.js'
function App() {
 let [todo , Settodolist] = useState([]);
 let [newtask , setnewtask] = useState("");


const handlechange=(event) =>{
   setnewtask(event.target.value);
};

const addtask=()=>{
  const task={
    id: todo.length === 0?1 : todo[todo.length-1].id+1,
    taskname : newtask,
    complelted : false
  }
  Settodolist([...todo , task]);
}

const del = (id) => {
  Settodolist(
     todo.filter((todel) => {
       if(todel.id === id){
         return false;
       }
       else{
         return true;
       }
     })
  );
 }

const setcomplete = (id) =>{
  alert("task completed");
  Settodolist(
    todo.map((task) => {
      if(task.id === id){
       return {...task , completed : true};
      }
      else{
       return task;
      }
     })
  );
 
};
  return (
    <div className="App">
       <div class="addtack">
        <input onChange={handlechange}/>
        <button onClick={addtask}>Add task</button>
        {todo.map((task) => {
          return(
            <Task  
            taskname={task.taskname} 
            id={task.id} 
            completed = {task.completed}
            del={del} 
            setcomplete ={setcomplete }/>
          );
              
        }
        )}
       </div>
    </div>
  );
}

export default App;
