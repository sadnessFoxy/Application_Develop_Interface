import HelloRouter from "./components/HelloRouter"
import './App.css'
import DynamicRoute from "./components/DynamicRoute"
import NestedRoute from "./components/NestedRoute"
import Dashboard from "./components/Dashboard"
import ProductDetail from "./components/ProductDetail"

function App() {


  return (
    <div>
      {/* <HelloRouter></HelloRouter> */} // bai 1, 2
      <DynamicRoute></DynamicRoute>   // bai 3,5
      {/* <NestedRoute></NestedRoute> */}   // bai 4
    </div>
  )
}

export default App
