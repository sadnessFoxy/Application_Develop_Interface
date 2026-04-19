import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { areaAtom, heightAtom, widthAtom } from '../recoil/recoilArea'

function Area() {
    const [width,setWidth]  = useRecoilState(widthAtom)
    const [height,setHeight]  = useRecoilState(heightAtom)
    const area = useRecoilValue(areaAtom)
    function handleWidth(){
        setWidth(width+1)
    }
    function handleHeight(){
        setHeight(height+1)
    }
  return (
    <div>
        <h2>width now is: {width} <button onClick={handleWidth}>plus 1</button></h2>
        <h2>height now is: {height} <button onClick={handleHeight}>plus 1</button></h2>
        <h2>area now is: {area} </h2>



    </div>
  )
}

export default Area