import React, { useState } from 'react'
import Button from '../component/Button'
import './Bai2.css'
function Bai2() {
    const [count,setCount] = useState(0)
    const color = count >= 10 ? "red" : "black"
    const increment = ()=>{
        setCount(count+1)
    }
    const decrement = ()=>{
        if(count > 0){
            setCount(count-1)
        }else{
            reset()
        }
        
    }
    const reset = ()=>{
        setCount(0)
    }
  return (
    <div className='container'>
        <div className='btn-group'>
            <Button className="primary" onClick={increment}>+</Button>
            <Button className="danger" onClick={decrement}>-</Button>
            <Button className="warning" onClick={reset}>reset</Button>
        </div>
        <div className='output'>
            <span className='text' >Number now is: <span style={{color}}>{count}</span> </span>
        </div>
    </div>
  )
}

export default Bai2