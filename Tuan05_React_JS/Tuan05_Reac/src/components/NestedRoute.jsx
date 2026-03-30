import React from 'react'
import Dashboard from './Dashboard'
import Home from './Home'
import Profile from './Profile'
import Orders from './Orders'
import Setting from './Setting'
import { Link,Routes,Route, BrowserRouter } from 'react-router-dom'
function NestedRoute() {
  return (
    <div>
        <BrowserRouter>
           <nav>
            <Link to="/">Home</Link>|
            <Link to="/dashboard">Dashboard</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}>
                <Route path="profile" element={<Profile/>}></Route>
                <Route path="orders" element={<Orders/>}></Route>
                <Route path="settings" element={<Setting/>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>  
    </div>
  )
}

export default NestedRoute