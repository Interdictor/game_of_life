import { Position } from "./Position"
import { CardinalStrategy } from "./strategies/CardinalStrategy"
import { CrossStrategy } from "./strategies/CrossStrategy"


export class NeighboursCounter {
  constructor() {
    this._strategies = [
      new CardinalStrategy(),
      new CrossStrategy(),
    ]
  }

  count(externalPositionData, tissue) {
    let aliveCount = 0

    const neighboursPositions = this.generateNeighbours(externalPositionData)
    const cleanPositions = neighboursPositions.filter((element) => { return element })

    for (const positionData of cleanPositions) {
      const position = new Position(positionData.x, positionData.y)
      const neighbourCell = tissue.find((cell) => { return cell.hasPosition(position) })
      if (neighbourCell.isAlive()) {
        aliveCount++
      }
    }

    return aliveCount
  }

  generateNeighbours(positionData) {
    let result = []

    for (const strategy of this._strategies) {
      result = result.concat(strategy.perform(positionData))
    }

    return result
  }
}
