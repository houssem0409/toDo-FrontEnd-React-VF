import React from 'react'
import { useSelector } from 'react-redux'
export default function TotalCompleteItems() {
    const completedTodos = useSelector((state) => state.todos.filter((todo) => todo.completed === true))
  return (

    <div>
    <h2>Total {completedTodos.length}</h2>
    </div>
  )
}
