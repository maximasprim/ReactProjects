import { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(0)
  
  const increase = () => {
    setNumber(number + 1);
  }

  const decrease = () => {
    setNumber(number - 1);
  }

  return (
    <>
     <h3>intro to usestate</h3>
     <button onClick={increase}>+</button>
     <button onClick={decrease}>-</button>
     <div>{number}</div>
    </>
  )
}

export default App
