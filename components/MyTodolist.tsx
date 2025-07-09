'use client'
import { useState } from 'react'
import Button from './button'

interface Todo {
  id: number
  text: string
  date: string
  completed: boolean
}

export default function MyTodolist() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState('')
  const [newDate, setNewDate] = useState('')
  const [error, setError] = useState('')

  const handleAddItem = () => {
    if (newTodo.trim() !== '' && newDate.trim() !== '') {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTodo, date: newDate, completed: false },
      ])
      setNewTodo('')
      setNewDate('')
      setError('')
    } else {
      setError('Please enter a task and a date.')
    }
  }

  const handleDeleteItem = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleToggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md h-screen w-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        ToDo List
      </h1>
      <div className="flex flex-col sm:flex-row mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="flex-grow p-3 border border-gray-300 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
          className="p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button onClick={handleAddItem} label="Add" />
      </div>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gray-100 p-3 rounded-lg"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo.id)}
                className="mr-4 h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
              />
              <div>
                <span
                  className={`text-gray-800 ${
                    todo.completed ? 'line-through' : ''
                  }`}
                >
                  {todo.text}
                </span>
                <span className="text-sm text-gray-500 ml-4">{todo.date}</span>
              </div>
            </div>
            <Button onClick={() => handleDeleteItem(todo.id)} label="Delete" />
          </li>
        ))}
      </ul>
    </div>
  )
}
