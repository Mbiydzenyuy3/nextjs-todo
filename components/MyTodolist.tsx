'use client'
import { useState } from 'react'
import Button from './button'

interface Todo {
  id: number
  text: string
}

export default function MyTodolist() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState('')

  const handleAddItem = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo }])
      setNewTodo('')
    }
  }

  const handleDeleteItem = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        ToDo List
      </h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button onClick={handleAddItem} label="Add" />
      </div>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gray-100 p-3 rounded-lg"
          >
            <span className="text-gray-800">{todo.text}</span>
            <Button onClick={() => handleDeleteItem(todo.id)} label="Delete" />
          </li>
        ))}
      </ul>
    </div>
  )
}
