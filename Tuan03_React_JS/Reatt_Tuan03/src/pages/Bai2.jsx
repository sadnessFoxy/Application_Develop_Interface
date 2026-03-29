import React, { useEffect, useState } from 'react'

function Bai2() {
   const [count, setCount] = useState(new Date().toLocaleTimeString());
   useEffect(()=>{
    const timer = setInterval(() => {
      setCount(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer)
   },[])
  return (
    <div>
        <h1>Count: {count}</h1>
    </div>
  )
}

export default Bai2