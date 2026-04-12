import React from 'react'
import { useRecoilState } from 'recoil'
import { recoilCounter } from '../recoil/recoilCounter'

function ComponentB() {
  const [counter, setCounter] = useRecoilState(recoilCounter)
  const handleInc = ()=>{
     setCounter(counter+1)
  }
  const handleDec = ()=>{
     setCounter(counter-1)
  }
  

  return (
    <div>
      <h3>Component B</h3>
      <div>
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleDec}>Decrement</button>
      </div>
    </div>
  )
}

export default ComponentB