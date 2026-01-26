import React, { useState } from 'react'
import "./StatusBadge.css"
import Button from './Button'
function StatusBadge() {
  const [color,setColor] = useState("black")
  return (
    <>
    <h1>User Status Nè</h1>
    <div className='user_status' style={{backgroundColor:color}}></div>
    <div className='user_btn'>
      <Button className="online" onClick={()=>setColor("green")}>online</Button>
      <Button className="offline" onClick={()=>setColor("red")}>offline</Button>
      <Button className="busy" onClick={()=>setColor("grey")}>busy</Button>
    </div>
    </>
  )
}

export default StatusBadge