export class Position {
  constructor(x, y) {
    this._x = x
    this._y = y
  }

  isEqual(position) {
    return this._x === position._x && this._y === position._y
  }

  serialize() {
    return { x: this._x, y: this._y }
  }

  toId() {
    return `${this._x},${this._y}`
  }
}
