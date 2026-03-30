import React from 'react'
import { useParams } from 'react-router-dom'

function ProductItem(props) {
    const {id} = useParams()
  return (
    <div>
        <div>{props.children}:{id}</div>
    </div>
  )
}

export default ProductItem