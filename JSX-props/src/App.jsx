import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
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
    <p> {moreDetails.age > 18 ? "im an adult" : "im a minor"}</p>
    <p> my country is {moreDetails.country}</p>

    <div>Favourite programming languages</div>

    <ul style={ {listStyle:'none',backgroundColor: 'lightgreen'}}>
      <li>Typescript</li>
      <li>Javascript</li>
      <li>C#</li>
      <li>Python</li>
    </ul>
    </>
  )
}

export default App
