import { describe, it, expect } from 'vitest'
import { Rules } from './Rules'

describe('Rules', () => {
  it('tells death when the cell was dead and there are no alive neighbours', () => {
    const rules = new Rules()
    const dead = false
    const aliveNeighbours = 0

    const result = rules.determine(aliveNeighbours, dead)

    expect(result).toEqual(dead)
  })
})
