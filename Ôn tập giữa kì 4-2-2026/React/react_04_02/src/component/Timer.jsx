import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  // useEffect sẽ thực hiện khi giá trị bị thay đổi
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(preValue => preValue + 1); // ở đây em tạo một vòng đếm tự tăng giá trị mỗi 1 giây 
    }, 1000);
    return () => clearInterval(interval);

  }, []);  // em không đặt tham số vào là vì ở trên biến đếm nó vẫn hoạt động, nếu để tham số vào thì nó sẽ gọi một useEffect mới chạy song song với việc nó nhận ra second + 1 làm cho nó nhảy số
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Time Counting</h2>
      <p style={{ fontSize: '30px' }}>{seconds} giây</p>
    </div>
  );
}

export default Timer;