import React from 'react'
import './Footer.css'
function Footer(props) {
  return (
    <div className='footer'>
      <span>{props.children}</span>
      </div>
  )
}

export default Footer