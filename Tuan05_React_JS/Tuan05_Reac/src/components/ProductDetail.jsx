import React from 'react'
import { BrowserRouter ,Route, Routes} from 'react-router-dom'
import Checkout from './Checkout'
import ProductsPage from './ProductsPage'


function ProductDetail() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard/>}>
                <Route path="profile" element={<Profile/>} />
                <Route path="orders" element={<Orders/>} />
                <Route path="settings" element={<Setting/>} />
            </Route>
            <Route path='/product' element={<ProductsPage/>}/>
            <Route path='/checkout' element={<Checkout/>}/>


    
        </Routes>
    </BrowserRouter>
    
  )
}

export default ProductDetail