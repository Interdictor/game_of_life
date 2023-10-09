import { describe, it, expect } from 'vitest'
import { Rules } from './Rules'

const DEAD = 'dead'

describe('Rules', () => {
  it('determines "dead" when the cell was dead and there are no alive neighbours', () => {
    const rules = new Rules()
    const dead = 'dead'
    const aliveNeighbours = 0

    const result = rules.determine(aliveNeighbours, dead)

    expect(result).toEqual(dead)
  })

  it('determines "alive" when the cell was dead and there are exactly three alive neighbours', () => {
    const rules = new Rules()
    const dead = 'dead'
    const alive = 'alive'
    const aliveNeighbours = 3

    const result = rules.determine(aliveNeighbours, dead)

    expect(result).toEqual(alive)
  })

  it('determines "alive" when the cell was alive and there are exactly three alive neighbours', () => {
    const rules = new Rules()
    const alive = 'alive'
    const aliveNeighbours = 3

    const result = rules.determine(aliveNeighbours, alive)

    expect(result).toEqual(alive)
  })

  it('determines "dead" when there are four or more alive neighbours', () => {
    const rules = new Rules()
    const alive = 'alive'
    const dead = 'dead'
    const aliveNeighbours = 4

    const result = rules.determine(aliveNeighbours, alive)

    expect(result).toEqual(dead)
  })

  it('determines "alive" when there are 2 neighbours and the cell was alive', () => {
    const rules = new Rules()
    const alive = 'alive'
    const aliveNeighbours = 2

    const result = rules.determine(aliveNeighbours, alive)

    expect(result).toEqual(alive)
  })

  it('determines "dead" when there are 2 neighbours and the cell was dead', () => {
    const rules = new Rules()
    const aliveNeighbours = 2

    const result = rules.determine(aliveNeighbours, DEAD)

    expect(result).toEqual(DEAD)
  })

  it('determines "dead" when there are inssuficient neighbours', () => {
    const rules = new Rules()
    const alive = 'alive'
    const aliveNeighbours = 1

    const result = rules.determine(aliveNeighbours, alive)

    expect(result).toEqual(DEAD)
  })
})
