const COLUMNS = 16
const ROWS = 28

export class CrossStrategy {
  perform(positionData) {
    const vectors = [
      { x: 1, y: 1 },
      { x: 1, y: -1 },
      { x: -1, y: -1 },
      { x: -1, y: 1 },
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
