import React from 'react'
import { useEffect, useState } from 'react';
const API_URL = "https://699fb84a3188b0b1d5369e2a.mockapi.io/todos";
function Bai5() {
 const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);                
  useEffect(() => {
    fetch(API_URL)
      .then(res => {
        if (!res.ok) throw new Error("Không thể kết nối API");
        return res.json();
      })
      .then(data => setTodos(data))
      .catch(err => setError(err.message));
  }, []);
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setIsSubmitting(true); 
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: inputValue, completed: false }) 
      });
      
      const newTodo = await response.json();
      
      setTodos([...todos, newTodo]);
      setInputValue("");
    } catch (err) {
      alert("Lỗi khi thêm: " + err.message);
    } finally {
      setIsSubmitting(false); 
    }
  };

  
  const handleDelete = async (id) => {
    const oldTodos = [...todos];
    setTodos(todos.filter(t => t.id !== id));
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error();
    } catch  {
      setTodos(oldTodos);
      alert("Xóa thất bại!");
    }
  };
  return (
    <div style={{ padding: '20px' }}>
      <h2>Todo List - MockAPI</h2>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleAdd}>
        <input 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Việc cần làm..."
          disabled={isSubmitting}
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Đang xử lý..." : "Thêm"}
        </button>
      </form>

      <ul>
        {todos.map(item => (
          <li key={item.id} style={{ margin: '8px 0' }}>
            {item.name} 
            <button onClick={() => handleDelete(item.id)} style={{ marginLeft: '10px' }}>
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Bai5