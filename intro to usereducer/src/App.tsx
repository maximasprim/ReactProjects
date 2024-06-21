import { useReducer } from 'react'

import './App.css'

function App() {
  type IAction = { type: 'INCREMENT' | 'DECREASE' }

   const reducerCount = (state: number, action: IAction) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREASE':
        return state - 1;
      default:
        return state;
    }
  }
  const [number, dispatch] = useReducer(reducerCount, 0);  //

  const handleIncrease = () => dispatch({ type: 'INCREMENT' })

  return (
    <>
      <h2>Counter App : useReducer</h2>
      <div className='btns'>
        <button onClick={handleIncrease}>+</button>
        <span>{number}</span>
        <button onClick={() => dispatch({ type: 'DECREASE' })}>-</button>
      </div>
    </>
  )
}

export default App
