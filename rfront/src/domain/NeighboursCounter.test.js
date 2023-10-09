import { describe, it, expect } from 'vitest'
import { NeighboursCounter } from './NeighboursCounter'

describe('NeighboursCounter', () => {
  it.skip('generates neighbours positions', () => {
    const initialPositionData = { x: 0, y: 0 }
    const counter = new NeighboursCounter()

    const result = counter.generateNeighbours(initialPositionData)

    const expectedResult = [
      { x: 0, y: 1 },
      { x: 1, y: 0 },
      { x: 0, y: -1 },
      { x: -1, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: -1 },
      { x: -1, y: -1 },
      { x: -1, y: 1 },
    ]
    expect(result).toEqual(expectedResult)
  })
})
