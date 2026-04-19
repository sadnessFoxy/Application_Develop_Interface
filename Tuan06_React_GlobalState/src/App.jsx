import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Cart from './component/Cart'
import UserList from './component/UserList'
import SearchProducts from './component/SearchProducts'
import Login from './component/Login'
import Notification from './component/Notification'
import ProductList from './component/ProductList'
import { useRecoilValue } from 'recoil'
import { authAtom } from './recoil/recoilAuth'

function App() {
  const auth = useRecoilValue(authAtom);

  return (
    <div className="app-container" style={{ background: '#f4f7f6', minHeight: '100vh' }}>
      <Notification />
      
      {/* Navbar (B10 Integration) */}
      <nav style={{ 
        padding: '1rem', 
        background: '#2c3e50', 
        color: 'white', 
        display: 'flex', 
        gap: '30px',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Shop (B10)</Link>
        <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>Cart (B5)</Link>
        <Link to="/users" style={{ color: 'white', textDecoration: 'none' }}>Users (B7)</Link>
        <Link to="/search" style={{ color: 'white', textDecoration: 'none' }}>Search (B8)</Link>
        <div style={{ flex: 1 }}></div>
        <Link to="/auth" style={{ 
          color: auth.isAuthenticated ? '#2ecc71' : 'white', 
          textDecoration: 'none',
          padding: '5px 15px',
          border: '1px solid currentColor',
          borderRadius: '20px'
        }}>
          {auth.isAuthenticated ? `Hi, ${auth.user.name}` : 'Login (B9)'}
        </Link>
      </nav>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px' }}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/search" element={<SearchProducts />} />
          <Route path="/auth" element={<Login />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
