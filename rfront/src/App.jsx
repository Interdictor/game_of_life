import { useState } from 'react'
import './App.css'
import { GameRenderer } from './components/GameRenderer'

function App({ life }) {
  const [count, setCount] = useState(0)

  return (
    <>
      <GameRenderer life={life} ></GameRenderer>
    </>
  )
}

export default App
