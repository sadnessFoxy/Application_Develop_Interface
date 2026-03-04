import React, { useState, useMemo } from 'react';

function Calculator() {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);

  ///tạo ra một hàm tính toán lớn để thực hiện tính toán và một hàm thay đổi màu sắc
  const slowFunction = (num) => {
    console.log('Đang tính toán...');
    for (let i = 0; i < 1000000000; i++) {;} 
    return num * 2;
  };
 // useMemo chỉ chạy khi nhận thấy có sự thay đổi ở giá trị truyền vào là count và sẽ không chạy kể cả khi ta re-render lại màu nền của component
 // nếu không có useMemo thì khi chạy lại màu nền đồng nghĩa với re-render thì tất cả useState sẽ chạy lại trong khi mình không muốn
  const doubleNumber = useMemo(() => {
    return slowFunction(count);
  }, [count]);

  return (
    <div style={{ 
      background: isDark ? '#333' : '#fff', 
      color: isDark ? '#fff' : '#000',
      padding: '20px' 
    }}>

      
      <button onClick={() => setCount(count + 1)}>Tăng số: {count}</button>
      <p>Kết quả: {doubleNumber}</p>

      <button onClick={() => setIsDark(!isDark)}>
        re-render thử
      </button>
    </div>
  );
}

export default Calculator;