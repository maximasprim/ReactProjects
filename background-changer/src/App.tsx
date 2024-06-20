import { useState } from 'react'
import Button  from './Components/Button'

import './App.scss'

function App() {
  const [bg, setBg] = useState<string>("");
   const changeBackground = (color:string) => {
setBg(color);
   }
   console.log(bg);
  return (
    <>
      <div className='app'style={{ backgroundColor: bg?bg: "rgba(87,33,0,0.5)"}}>
        <div className='buttons'>
          <Button color="red"changeBGFunc={changeBackground}/>
          <Button color="green"changeBGFunc={changeBackground}/>
          <Button color="blue"changeBGFunc={changeBackground}/>
          <Button color="reset"changeBGFunc={() => setBg("")}/>
        </div> 
      </div>
    </>
  )
}

export default App
