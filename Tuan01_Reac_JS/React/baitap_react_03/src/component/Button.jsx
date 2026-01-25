import React from 'react'
import "./Button.css"

function Button(prop) {
  return (
    <button className={prop.className} onClick={prop.onClick}>{prop.children}</button>
  )
}

export default Button