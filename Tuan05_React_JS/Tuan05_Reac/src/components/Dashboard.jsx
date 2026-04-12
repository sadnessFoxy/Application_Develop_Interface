import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
function Dashboard() {
  const navigate = useNavigate()
   function handleProfile(){
      navigate('profile')
    }
    function handleOrders(){
      navigate('orders')
    }
    function handleSettings(){
      navigate('settings')
    }



  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="profile">Profile</Link>|
        <Link to="orders">Order</Link>|
        <Link to="settings">Setting</Link>
      </nav>
      <button onClick={handleProfile}>to profile</button>
      <button onClick={handleOrders}>to orders</button>
      <button onClick={handleSettings}>to settings</button>

      <Outlet />
    </div>
  )
}

export default Dashboard