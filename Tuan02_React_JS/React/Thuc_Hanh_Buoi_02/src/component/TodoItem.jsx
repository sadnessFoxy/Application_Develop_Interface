import React from 'react'
import './TodoItem.css'

function TodoItem({ task, onDelete }) {
  return (
    <li>
      <span>{task.text}</span>
      <button onClick={() => {onDelete(task.id)}}>Xóa</button>
    </li>
  )
}

export default TodoItem