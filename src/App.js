import { useSelector, useDispatch } from 'react-redux'
import { INCREMENT, DECREMENT } from './constants'

import './App.css'

function App() {
  const count = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch({ type: INCREMENT })
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: DECREMENT })
        }}
      >
        -
      </button>
    </div>
  )
}

export default App
