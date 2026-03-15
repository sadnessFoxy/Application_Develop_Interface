import React, { useEffect,  useState } from 'react'

function Bai4() {
  const [originalPosts, setOriginalPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setOriginalPosts(data); 
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
      }
    };

    fetchPosts();
  }, []); 

  const displayedPosts = originalPosts.filter((post) => {

    return post.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Tìm kiếm Bài viết</h2>
      <input
        type="text"
        placeholder="Nhập tiêu đề cần tìm..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
      />

    
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {displayedPosts.length > 0 ? (
          displayedPosts.map((post) => (
            <div 
              key={post.id} 
              style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}
            >
              <h3 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>{post.title}</h3>
              <p style={{ margin: 0, color: '#7f8c8d' }}>{post.body}</p>
            </div>
          ))
        ) : (
          <p>Không tìm thấy bài viết nào phù hợp.</p>
        )}
      </div>
    </div>
  );
}

export default Bai4