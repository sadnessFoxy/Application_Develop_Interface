import { useState } from "react";
import "./App.css";

import Bai1 from "./pages/Bai1";
// import Bai2 from "./pages/Bai2";
// import Bai3 from "./pages/Bai3";
// import Bai4 from "./pages/Bai4";
// import Bai5 from "./pages/Bai5";
// import Bai6 from "./pages/Bai6";

function App() {
  const [currentBai, setCurrentBai] = useState(1);

  const listBai = [
    { id: 1, label: "Bài 1", component: <Bai1 /> },
    { id: 2, label: "Bài 2", component: <Bai2 /> },
    { id: 3, label: "Bài 3", component: <Bai3 /> },
    { id: 4, label: "Bài 4", component: <Bai4 /> },
    { id: 5, label: "Bài 5", component: <Bai5 /> },
    { id: 6, label: "Bài 6", component: <Bai6 /> },
  ];

 
  const currentContent = listBai.find(item => item.id === currentBai)?.component;

  return (
    <div className="app-content">
      <h1>ReactJS - Week 3</h1>

      <div className="app-buttons">
        {listBai.map((item) => (
          <button
            key={item.id} 
            className={currentBai === item.id ? "active" : ""}
            onClick={() => setCurrentBai(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="bai-display">
        {currentContent || <Bai1 />}
      </div>
    </div>
  );
}

export default App;