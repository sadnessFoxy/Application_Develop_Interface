import React from 'react'
import "./Alert.css"
function Alert(prop) {
  if (!prop.type) return null;
  const messages = {
    success: 'success',
    warning: 'warning',
    error: 'error'
  };

  return (
    <div className={`alert alert-${prop.type}`}>
      {messages[prop.type]}
    </div>
  )
}

export default Alert