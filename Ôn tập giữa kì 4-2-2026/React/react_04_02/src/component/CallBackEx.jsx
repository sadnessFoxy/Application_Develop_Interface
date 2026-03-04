import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child render");

  return (
    <button onClick={onClick}>
      Click from Child
    </button>
  );
});

// Mỗi lần parent re-render lại thì nó sẽ chạy lại và tạo lại function mới làm cho child nhận định rằng đó là một function mới được truyền vào
// và khi nó nhận thấy có sự thay đổi thì nó cũng re-render lại và in ra console log là child re-render
// với việc sử dụng useCallback thì nó sẽ lưu function khi mới đầu vô nó tạo lại
// và cho dù thằng parent có re-render thì function cx sẽ không tạo mới và child sẽ không phải re-render theo parent
function CallBackEx() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleClick = useCallback(() => {
    console.log("Child re-render");
  }, []);

  return (
    <div>

      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>
        Increase Count
      </button>

      <br /><br />
      <input placeholder="Khoa ne..." value={text} onChange={(e) => setText(e.target.value)}  />
      <p>Typing: {text}</p>
      <br /><br />
      <Child onClick={handleClick} />
    </div>
  );
}

export default CallBackEx;
