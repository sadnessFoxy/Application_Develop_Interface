import { useState } from 'react'
import './App.css'
import Button from './component/Button'
import Alert from './component/Alert'

function App() {
  const [type, setType] = useState(null);

  return (
    <div className='stst'>
      <Alert type={type} />

      <div className="button-group">
        <Button className="primary" onClick={() => setType('success')}>Success</Button>
        <Button className='warning' onClick={() => setType('warning')}>Warning</Button>
        <Button className="danger" onClick={() => setType('error')}>Error</Button>
      </div>
    </div>
  )
}

export default App