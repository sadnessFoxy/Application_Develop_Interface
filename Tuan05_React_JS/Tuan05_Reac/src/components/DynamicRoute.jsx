import React from 'react'
import { BrowserRouter,Link,Routes,Route } from 'react-router-dom'
import ProductsPage from './ProductsPage'
import ProductItem from './ProductItem'


function DynamicRoute() {
  return (
    <BrowserRouter>
     <nav>
        <Link to="/products">Pages</Link>
     </nav>
     <Routes>
        <Route path="/products" element={<ProductsPage></ProductsPage>}></Route>
        <Route path="/products/:id" element={<ProductItem>Item</ProductItem>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default DynamicRoute