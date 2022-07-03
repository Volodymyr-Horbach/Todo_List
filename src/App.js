import { useState } from 'react';
import ToDo from './Component/ToDo';
import ToDoForm from './Component/ToDoForm';
import Popup from './Component/Popup';



function App() {
  const [todos, setTodos] = useState([])

  const addTask = (userInput) =>{
    if(userInput){
      const newItem = {
        id: Math.random().toString(36).substring(2,9),
        task: userInput,
        complete: false,
      }
    setTodos([...todos, newItem])
    
    localStorage.setItem(JSON.stringify(newItem.id), JSON.stringify(newItem.task))
    }
  }
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
    localStorage.removeItem(JSON.stringify(id))
  }

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) => 
      todo.id === id ? {...todo, complete: !todo.complete} : {...todo})
    ])
  }

  // const popup = () => {
  //   alert('gggg')
  // }

  return (
    <div className="App">
      <Popup addTask={addTask}/>
      <header>
        <h1>My tasks : {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask}/>
      {todos.map((todo) => {
        return(
          <ToDo
          todo={todo}
          key={todo.id}
          toggleTask={handleToggle}
          removeTask={removeTask}
          />
        )
      })}
    </div>
  );
}

export default App;
