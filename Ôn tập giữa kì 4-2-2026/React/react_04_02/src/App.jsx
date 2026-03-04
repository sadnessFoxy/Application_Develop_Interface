
import './App.css'
import Calculator from './component/Caculator'
import CallBackEx from './component/CallBackEx'
import Cart from './component/Cart'
import Counting from './component/Counting'
import FocusInput from './component/FocusInput'
import Timer from './component/Timer'

function App() {


  return (
    <>
    <h1>Use State</h1>
    <Counting></Counting>
    <h1>Use Effect</h1>
    <Timer></Timer>
    <h1>Use Reducer</h1>
    <Cart></Cart>
    <h1>Use Ref</h1>
    <FocusInput></FocusInput>
    <h1>Use Memo</h1>
    <Calculator></Calculator>
    <h1>Use Callback</h1>
    <CallBackEx></CallBackEx>
    </>
  )
}

export default App
