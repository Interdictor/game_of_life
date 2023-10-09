import { Cell } from './Cell'
import { NeighboursCounter } from './NeighboursCounter'
import { Position } from './Position'
import { cloneDeep } from 'lodash';

const COLUMNS = 16
const ROWS = 30
const PERIOD = 150

export class Life {
  constructor() {
    this.dev = 'hola'
    this.observers = []
    this._isRunning = false
    this._timeoutId = null
    this._tissue = this._generateCleanTissue()
    this._neighbourCounter = new NeighboursCounter()
  }

  start() {
    if(!this._isRunning && this._anyAliveCell()) {
      this._isRunning = true
      this._updateRecursively()
    }
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

  addObserver(observer) {
    this.observers.push(observer)
  }

  serialize() {
    return {
      dev: this.dev,
      tissue: this._tissue.map((cell) => { return cell.serialize() })
    }
  }

  _updateRecursively() {
    if (!this._anyAliveCell()) {
      this.stop()
    }

    if (this._isRunning) {
      this._timeoutId = setTimeout(
        () => {
          this._updateTissue()
          this._notifyObservers()
          this._updateRecursively()
        },
        PERIOD
      )
    }
  }

  _anyAliveCell() {
    return !!this._tissue.find((cell) => { return cell.isAlive() })
  }

  _updateTissue() {
    const currentState = cloneDeep(this._tissue)

    for (const cell of this._tissue) {
      const aliveNeighbours = this._neighbourCounter.count(
        cell.serialize().position,
        currentState
      )

      cell.update(aliveNeighbours)
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
