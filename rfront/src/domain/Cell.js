export class Cell {
  constructor(position) {
    this.id = position.toId()
    this._position = position
    this._isAlive = false
  }

  hasPosition(position) {
    return this._position.isEqual(position)
  }

  toggle() {
    this._isAlive = !this._isAlive
  }

  serialize() {
    return {
      id: this.id,
      isAlive: this._isAlive,
      position: this._position.serialize(),
    }
  }
}
