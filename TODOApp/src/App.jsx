import { useState } from 'react'
import TODOform from './TODOform.jsx'
import './App.css'
import {v4 as uuidv4} from 'uuid'
uuidv4()

function App() {  
  const [todos, setTodos] = useState([])

  const addTodo = todo =>
  {
      setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
      console.log(todos)
  }
 
  const deleteTodo = id =>
  {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const editTodo = id =>
  {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }
  const editTask = (task, id) =>
  {
    setTodos(todos.map(todo => todo.id  === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
  }
  
  
  return (
    <>
    <div className='flex h-sreen items-center justify-center flex-col'>
      <TODOform addTodo={addTodo}   Addtodos={todos} editTask={editTask} editTodo={editTodo} deleteTodo={deleteTodo}/>
    </div>
    </>
  )
}

export default App
