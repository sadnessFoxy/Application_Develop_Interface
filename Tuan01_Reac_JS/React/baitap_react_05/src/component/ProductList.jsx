import React from 'react';
import './ProductList.css';
import ProductCard from './ProductCard';

function ProductList() {


  return (
    <div className="container">
      <h1>Danh sách sản phẩm</h1>
      <div className="product-grid">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>

      </div>
    </div>
  );
}

export default ProductList;