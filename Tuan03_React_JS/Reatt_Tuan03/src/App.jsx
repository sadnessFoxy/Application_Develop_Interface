import { useState } from "react";

import Bai1 from "./pages/Bai1";
import Bai2 from "./pages/Bai2";
import Bai3 from "./pages/Bai3";
import TodoApp from "./pages/TodoApp";

// import Bai5 from "./pages/Bai5";
// import Bai6 from "./pages/Bai6";

function App() {

  const [currentBai, setCurrentBai] = useState(1);

  const listBai = [
    { id: 1, label: "Bài 1", component: <Bai1 /> },
    { id: 2, label: "Bài 2", component: <Bai2 /> },
    { id: 3, label: "Bài 3", component: <Bai3 /> },
    { id: 4, label: "Bài 4", component: <TodoApp /> },
    // { id: 5, label: "Bài 5", component: <Bai5 /> },
    // { id: 6, label: "Bài 6", component: <Bai6 /> },
  ];

  const currentContent = listBai.find(item => item.id === currentBai)?.component;

  return (
    <div className="app-content">
      <h1>ReactJS - Week 3</h1>

      <div className="app-buttons" style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {listBai.map((item) => (
          <button
            key={item.id} 
            className={currentBai === item.id ? "active" : ""}
            onClick={() => setCurrentBai(item.id)}
            style={{
              padding: '8px 16px',
              cursor: 'pointer',
              backgroundColor: currentBai === item.id ? '#007bff' : '#f0f0f0',
              color: currentBai === item.id ? 'white' : 'black',
              border: '1px solid #ccc'
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      <hr />
      <div className="bai-display" style={{ marginTop: '20px', padding: '15px', border: '1px dashed #aaa' }}>
        {currentContent || <div>Không tìm thấy nội dung bài tập.</div>}
      </div>
    </div>
  );
}

export default App;