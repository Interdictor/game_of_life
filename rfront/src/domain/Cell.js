import { Rules } from "./Rules"

const DEAD = 'dead'
const ALIVE = 'alive'

export class Cell {
  constructor(position) {
    this.id = position.toId()
    this._rules = new Rules()
    this._position = position
    this._state = 'dead'
  }

  hasPosition(position) {
    return this._position.isEqual(position)
  }

  update(aliveNeighbours) {
    this._state = this._rules.determine(aliveNeighbours, this._state)
  }

  isAlive() {
    return this._state === ALIVE
  }

  toggle() {
    if(this._state === DEAD) {
      this._state = ALIVE
    } else {
      this._state = DEAD
    }
  }

  serialize() {
    return {
      id: this.id,
      isAlive: this.isAlive(),
      position: this._position.serialize(),
    }
  }
}
