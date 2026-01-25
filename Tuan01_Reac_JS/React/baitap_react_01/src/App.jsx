import { useState } from 'react'
import './App.css'
import ProductCard from './component/ProductCard'

function App() {
  return (
    <>
      <div className="App" style={{display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', padding: '20px'}}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      
      </div>
    </>
  )
}

export default App
