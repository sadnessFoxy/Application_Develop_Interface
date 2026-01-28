
import React ,{useState} from 'react'
import './TodoInput.css'

function TodoInput({ onAdd }) {
  const [text, setText] = useState('');
  const handleSubmit = () => {
    if (text.trim() !== '') {
      onAdd(text);
      setText('');
    }
  };
  return (
    <div className="todo-input">
        <input value={text} onChange={(e)=>{setText(e.target.value)}} placeholder='Nhập việc cần làm ...'/>
        <button className="btn-add" onClick={handleSubmit}>Thêm</button>
    </div>
  )
}

export default TodoInput
