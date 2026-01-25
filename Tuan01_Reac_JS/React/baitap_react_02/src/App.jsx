
import './App.css'
import Button from './component/Button'

function App() {
 

  return (
    <>
    <div className='containner'>
     <Button className="primary" onClick= {()=>{document.body.style.backgroundColor = "rgba(35, 35, 221, 0.724)"}} >Click me</Button>
     <Button className="danger" onClick = {()=>{document.body.style.backgroundColor="rgba(206, 15, 5, 0.724)"}}>Click me</Button>
     <Button className="warning" onClick= {()=>{document.body.style.backgroundColor=" rgba(250, 229, 42, 0.837)"}}>Click me</Button>
    </div>
     

    </>
  )
}

export default App
