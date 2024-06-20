
import './App.css'

function App() {
  // function handleClick() {
  //   console.log('Button clicked')
  //   alert('Button clicked')
  // }
   const sendToserver = (e:any) => {
    e.preventDefault()
    console.log('Data sent to server')
    alert('Data sent to server')
   }
  return (
  //  <button onClick={handleClick}>Do Something</button>
  <form action=''>
    <label htmlFor='name'></label>
    <input type='text' placeholder='enter your name'/>
    <button type='submit' onClick={sendToserver} >Submit</button>
  </form>
  )
}

export default App
