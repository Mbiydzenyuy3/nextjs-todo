'use strict'
interface Todolist {
  name: string
  date: number
  isDue: boolean
}

const todolist: Todolist = { name: 'alice', date: 25, isDue: false }

export default function Todolist() {
  return (
    <>
      <div className="todo">
        <h1>ToDo List</h1>
      </div>
    </>
  )
}
