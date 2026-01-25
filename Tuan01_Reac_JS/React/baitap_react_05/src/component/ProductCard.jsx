import React from 'react'
import './ProductCard.css'
import productImage from '../assets/anh_1.jfif'

function ProductCard() {
  return (
    <div className="product-card">
        <img src={productImage} alt="Product's image" style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover'
        }}/>
        <h2 className="product-name">Product Name</h2>
        <p className='product-price'>$99.99</p>
        <button className="add-to-cart">Add to Cart</button>
    </div>

  )
}

export default ProductCard