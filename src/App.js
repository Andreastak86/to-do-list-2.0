import "./App.css";
import { useState } from "react";
import Tilte from "./Tilte";
import todos from "./mock-todos.json";
import ToDoList from "./ToDoList";

function App() {
  const [toDoList, setToDo] = useState(todos);
  const toggle = (id) => {
    let item = toDoList.map((todo) => {
      return todo.id == id ? { ...todo, done: !todo.done } : { ...todo };
    });
    setToDo(item);
  };

  return (
    <div className='App'>
      <Tilte />
      <ToDoList toDoList={toDoList} toggle={toggle} />
    </div>
  );
}

export default App;
