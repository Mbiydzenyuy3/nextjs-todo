'use client'
import MyTodolist from '@/components/MyTodolist'

export default function Todolist() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <MyTodolist />
    </div>
  )
}
