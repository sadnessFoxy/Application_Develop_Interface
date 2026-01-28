import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, onDelete }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} task={todo} onDelete={onDelete}/>
      ))}
    </ul>
  )
}

export default TodoList