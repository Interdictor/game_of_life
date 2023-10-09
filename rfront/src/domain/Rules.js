const OPTIMAL_NEIGHBOURS_AMOUNT = 3
const EQUILIBRIUM_AMOUNT = 2
const ALIVE = 'alive'

export class Rules {
  determine(aliveNeighbours, cellState) {
    if(aliveNeighbours > OPTIMAL_NEIGHBOURS_AMOUNT) {
      return 'dead'
    }

    if(aliveNeighbours === OPTIMAL_NEIGHBOURS_AMOUNT) {
      return 'alive'
    }

    if(aliveNeighbours === EQUILIBRIUM_AMOUNT && cellState === ALIVE) {
      return 'alive'
    }

    return 'dead'
  }
}
