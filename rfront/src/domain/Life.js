import { Cell } from "./Cell"
import { Position } from "./Position"

const COLUMNS = 2
const ROWS = 2
const PERIOD = 1000

export class Life {
  constructor() {
    this.dev = 'hola'
    this.observers = []
    this._isRunning = false
    this._timeoutId = null
    this._tissue = this._generateCleanTissue()
  }

  start() {
    this._isRunning = true
    this._updateRecursively()
  }

  stop() {
    clearTimeout(this._timeoutId)
    this._isRunning = false
  }

  clear() {
    this.stop()
    this._tissue = this._generateCleanTissue()
    this._notifyObservers()
  }

  toggleCell(positionData) {
    const position = new Position(positionData.x, positionData.y)
    if(!this._isRunning) {
      const selectedCell = this._tissue.find((cell) => { return cell.hasPosition(position) })

      selectedCell.toggle()
      this._notifyObservers()
    }
  }

  _updateRecursively() {
    if (this._isRunning) {
      this._timeoutId = setTimeout(
        () => {
          this._notifyObservers()
          this._updateRecursively()
        },
        PERIOD
      )
    }
  }

  addObserver(observer) {
    this.observers.push(observer)
  }

  serialize() {
    return {
      dev: this.dev,
      tissue: this._tissue.map((cell) => { return cell.serialize() })
    }
  }

  _generateCleanTissue() {
    const tissue = []

    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < COLUMNS; x++) {
        const position = new Position(x, y)
        const cell = new Cell(position)
        tissue.push(cell)
      }
    }

    return tissue
  }

  _notifyObservers() {
    for (const observer of this.observers) {
      observer(this.serialize())
    }
  }
}
