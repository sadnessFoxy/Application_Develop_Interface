import { useState } from 'react'
import './App.css'
import ComponentA from './component/componentA'
import ComponentB from './component/componentB'
import ToggleTheme from './component/ToggleTheme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ComponentA />
      <ComponentB /> */}

      <ToggleTheme/>
    </>
  )
}

export default App
