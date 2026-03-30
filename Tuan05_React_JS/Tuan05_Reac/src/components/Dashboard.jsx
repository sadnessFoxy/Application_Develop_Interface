import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
function Dashboard() {
   function handleProfile(){
      useNavigate("/dashboard/profile")
    }


  return (
   
    <div>
        <h1>Dashboard</h1>
        <nav>
            <Link to="profile">Profile</Link>|
            <Link to="orders">Order</Link>|
            <Link to="settings">Setting</Link>
        </nav>
        <button onClick={handleProfile()}>to profile</button>
        <button>to orders</button>
        <button>to settings</button>

        <Outlet/>
    </div>
  )
}

export default Dashboard