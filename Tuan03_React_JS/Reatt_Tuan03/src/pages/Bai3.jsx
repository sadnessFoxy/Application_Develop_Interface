import React, { useMemo, useState } from 'react';

const MOCK_DATA = Array.from({ length: 5000 }, (_, i) => ({
  id: i,
  name: `Laptop Pro ${i}`,
  price: Math.floor(Math.random() * 2000) + 100
}));

function Bai3() {
  const [search, setSearch] = useState('');
  const [maxPrice, setMaxPrice] = useState(2000);

  const filteredProducts = useMemo(() => {
    return MOCK_DATA.filter(p => 

      p.name.toLowerCase().includes(search.toLowerCase()) && p.price <= maxPrice
    );
  }, [search, maxPrice]); 

  const totalPrice = useMemo(() => {
    return filteredProducts.reduce((sum, p) => sum + p.price, 0);
  }, [filteredProducts]);

  return (
    <div>
      <h2>Bộ lọc sản phẩm</h2>
      
  
      <input 
        placeholder="Tìm tên..." 
        onChange={(e) => setSearch(e.target.value)} 
      />
    
      <input 
        type="number" 
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))} 
      />
      
      <p>Số lượng: {filteredProducts.length}</p>
      <p>Tổng tiền: ${totalPrice}</p>

      <hr />
      <ul>
        {filteredProducts.slice(0, 20).map(p => (
          <li key={p.id}>{p.name} - ${p.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default Bai3;