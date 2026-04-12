import React from 'react'
import "./ToggleTheme.css"
import { useRecoilState, useRecoilValue } from 'recoil'
import { recoilTheme } from '../recoil/recoilTheme'
function ToggleTheme() {
    const [theme,setTheme] = useRecoilState(recoilTheme)
    localStorage.setItem("theme",theme)
    const handleTheme = ()=>{
       setTheme(theme === "light"?"dark":"light")
    }
  return (
    <div className={theme}>    
      <h1>Title</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolorum blanditiis ex ea eligendi placeat, nisi ratione sed magni doloribus iusto distinctio qui molestias quis, recusandae cum itaque voluptatibus expedita.</p>
      <button onClick={handleTheme}>Theme Mode </button>
    </div>
  )
}

export default ToggleTheme