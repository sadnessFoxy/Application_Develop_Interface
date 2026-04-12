import React from 'react'
import { atom } from 'recoil'

export const recoilCounter = atom({
    key: 'recoilCounter',
    default: 0
})