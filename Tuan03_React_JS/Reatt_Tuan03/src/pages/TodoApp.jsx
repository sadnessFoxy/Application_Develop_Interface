import React, { useState, useCallback } from 'react';


const TodoItem = React.memo(({ todo, onDelete, onToggle }) => {
  console.log("render item", todo.id); 
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '5px' }}>
      <span 
        onClick={() => onToggle(todo.id)}
        style={{ 
          textDecoration: todo.completed ? 'line-through' : 'none', 
          cursor: 'pointer',
          flex: 1 
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Xóa</button>
    </div>
  );
});

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Học React Performance", completed: false },
    { id: 2, text: "Luyện tập useCallback", completed: false }
  ]);
  const [inputValue, setInputValue] = useState("");

  const onDelete = useCallback((id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  }, []);

  const handleAdd = () => {
    if (!inputValue.trim()) return;
    setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
    setInputValue("");
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '10px' }}>
      <h3>Bài 4: Todo List Performance</h3>
      <input 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Nhập việc cần làm..."
      />
      <button onClick={handleAdd}>Thêm</button>

      <div style={{ marginTop: '15px' }}>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            onDelete={onDelete} 
            onToggle={onToggle} 
          />
        ))}
      </div>
    </div>
  );
};

export default TodoApp; // Export để App.jsx có thể dùng