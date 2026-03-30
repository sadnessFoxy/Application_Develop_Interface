import React from 'react'
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom'

function ProductsPage() {
  return (
    <div>
        <Link to="/products/1">Iphone</Link>|
        <Link to="/products/2">Samsung</Link>|
        <Link to="/products/3">Laptop</Link>|
    </div>
  )
}

export default ProductsPage