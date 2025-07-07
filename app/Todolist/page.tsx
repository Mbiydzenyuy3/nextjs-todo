'use strict'
import Button from '@/components/button'
import MyTodolist from '@/components/MyTodolist'

export default function Todolist() {
  return (
    <>
      <div className="todo">
        <div className="todo">
          <MyTodolist />
        </div>
        <Button />
      </div>
    </>
  )
}
