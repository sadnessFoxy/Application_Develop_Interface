import React from 'react'
import ProductItem from './ProductItem'
import { Link, useNavigate } from 'react-router-dom'

function ProductsPage() {
  const navigate = useNavigate()
  function handleClick (){
    navigate("/checkout")
  }
  return (
    <div>
        <Link to="/products/1">Iphone</Link>|
        <Link to="/products/2">Samsung</Link>|
        <Link to="/products/3">Laptop</Link>|
        <h1>Product</h1> <button onClick={handleClick}>buy now </button>
    </div>
  )
}

export default ProductsPage