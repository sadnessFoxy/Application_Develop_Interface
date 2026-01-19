import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
