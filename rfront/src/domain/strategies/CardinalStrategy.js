const COLUMNS = 16
const ROWS = 30

export class CardinalStrategy {
  perform(positionData) {
    const vectors = [
      { x: 0, y: 1 },
      { x: 1, y: 0 },
      { x: 0, y: -1 },
      { x: -1, y: 0 },
    ]

    return vectors.map((vector) => {
      const newPosition = { x: positionData.x + vector.x, y: positionData.y + vector.y }

      if(this._notValid(newPosition)) {
        return null
      }

      return newPosition
    })
  }

  _notValid(position) {
    const invalidX = position.x >= COLUMNS || position.x < 0
    const invalidY = position.y >= ROWS || position.y < 0

    return invalidX || invalidY
  }
}
