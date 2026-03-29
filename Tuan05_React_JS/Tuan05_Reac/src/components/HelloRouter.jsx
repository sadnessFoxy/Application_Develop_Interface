import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'

const HelloRouter = () => {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default HelloRouter