// import { useState } from 'react'

import { useEffect, useState } from 'react';
import './App.css'
import { TodoProvider } from './context/context'
import { Header, TodoForm, TodoItem } from './components';


function App() {
  const [todos, setTodos] = useState([]);

  // in the above todos array
  const addTodo = (todo) => {
    setTodos(
      (prev) => [{ id: Date.now(), ...todo }, ...prev]
    )
  };

  const updateTodo = (id, todo) => {
    setTodos(
      (prev) => prev.map(
        (prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo)
      )
    )
  };

  const deletetodo = (id) => {
    setTodos(
      (prev) => prev.filter((todo) => todo.id !== id)
    )
  };


  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : { prevTodo }
      )
    )
  }

  // useEffect() hooks to handle local storage
  // getItem
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);
  // setItem
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deletetodo, toggleComplete }}>
      <Header />
      <div className='mb-4'>
        <TodoForm />
      </div>
      <div>
        {
          todos.map((todo) => (
            <div key={todo.id}>
              <div className='w-full'>
                <TodoItem todo={todo} />
              </div>
            </div>
          ))
        }
      </div>
    </TodoProvider>
  )
}

export default App;
