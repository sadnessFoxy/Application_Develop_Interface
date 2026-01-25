import React, { useState } from 'react';
import Bai1 from './pages/Bai1';
// import Bai2 from './pages/Bai2';
// import Bai3 from './pages/Bai3';
// import Bai4 from './pages/Bai4';
// import Bai5 from './pages/Bai5';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div id="root">
      <h1>Danh sách bài tập React</h1>

      <div className="tab-navigation">
        {[1, 2, 3, 4, 5].map((num) => (
          <button 
            key={num}
            className={activeTab === num ? "tab-btn active" : "tab-btn"} 
            onClick={() => setActiveTab(num)}
          >
            Bài {num}
          </button>
        ))}
      </div>

      <div className="app-container">
        {activeTab === 1 && <Bai1 />}
        {activeTab === 2 && <Bai2 />}
        {activeTab === 3 && <Bai3 />}
        {activeTab === 4 && <Bai4 />}
        {activeTab === 5 && <Bai5 />}
      </div>
    </div>
  );
}

export default App;