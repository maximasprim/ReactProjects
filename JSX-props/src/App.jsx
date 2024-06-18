import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name ="maximas"
  const moreDetails ={ 
    age:21,
    country: "India",
    height: "5.7"
  }
  let islogged = false 

  return (
    <>
    <h2>Heyy,my name is { name }</h2>
    <p>My height is {moreDetails.height}</p>
    <p> {islogged ? " im logged in": "im not logged in"}</p>
    </>
  )
}

export default App
