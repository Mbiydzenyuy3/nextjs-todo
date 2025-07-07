'use strict'
interface MyTodolist {
  name: string
  date: number
  isDue: boolean
}

const todolist: MyTodolist = { name: 'alice', date: 25, isDue: false }

export default function MyTodolist() {
  return (
    <>
      <div className="todo">
        <h1>ToDo List</h1>
      </div>
    </>
  )
}
