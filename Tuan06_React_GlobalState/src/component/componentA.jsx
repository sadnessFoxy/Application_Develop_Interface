import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { recoilCounter } from '../recoil/recoilCounter'

function ComponentA() {
    const count = useRecoilValue(recoilCounter)
  return (
    <div> Component A: Counter value: {count} </div>
  )
}

export default ComponentA