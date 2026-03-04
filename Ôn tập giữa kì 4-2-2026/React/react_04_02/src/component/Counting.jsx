import React from 'react'
import { useState } from 'react';
function Counting() {

  // Use state sẽ set giá trị mặc định ban đầu là 0 và setCount sẽ thực hiện thay đổi nếu đối
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>1. useState Exercise</h3>
      <p>Bạn đã click {count} lần</p>
      {/* Khi click, gọi setCount để tăng giá trị count lên 1, React sẽ re-render lại giao diện */}
      <button onClick={() => setCount(count + 1)}>Tăng số</button>
      <button onClick={() => setCount(count - 1)}>Giảm số</button>
    </div>
  );
}

export default Counting