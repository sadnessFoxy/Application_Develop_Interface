
import React, { useRef } from 'react';

function FocusInput() {
  // Tạo một tham chiếu (reference) khởi tạo bằng null.
  const inputRef = useRef(null);

  const handleFocus = () => {
    // Truy cập trực tiếp vào thuộc tính focus của thẻ input thông qua .current
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = '#e6f7ff';
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '10px' }}>
      <h3>4. useRef Exercise</h3>
      <input ref={inputRef} type="text" placeholder="Khoa ne ..." />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}

export default FocusInput