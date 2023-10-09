import { useEffect, useState } from 'react'
import './GameRenderer.css'
import { CellComponent } from './CellComponent'

export function GameRenderer({ life }) {
  const [gameData, setGameData] = useState(life.serialize())

  useEffect(() => {
    const observer = (newGameData) => {
      setGameData(newGameData)
    }

    life.addObserver(observer)
  }, [])

  return (
    <div>
      <div className='game-grid'>
        { gameData.tissue.map((cell) => (
          // <div key={wadus} className='cell' onClick={life.update.bind(life)}></div>
          <CellComponent
            key={cell.id}
            cellData={cell}
            toggleCell={life.toggleCell.bind(life)}
          />
        ))}
      </div>

      <div>
        <button onClick={() => { life.start() }}>START</button>
        <button onClick={() => { life.stop() }}>STOP</button>
        <button onClick={() => { life.clear() }}>CLEAR</button>
      </div>
    </div>
  )
}
