import { useEffect, useState } from 'react'
import './GameRenderer.css'

export function GameRenderer({ life }) {
  const [gameData, setGameData] = useState(life.serialize())

  useEffect(() => {
    const observer = (newGameData) => {
      setGameData(newGameData)
    }

    life.addObserver(observer)
  }, [])

  return (
    <div className='game-grid'>
      { gameData.tissue.map((wadus) => (
        <div key={wadus} className='cell' onClick={life.update.bind(life)}></div>
      ))}
    </div>
  )
}
