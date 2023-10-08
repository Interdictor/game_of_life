import { describe, it, expect } from 'vitest'
import { Life } from './Life'

describe('Life', () => {
  it.skip('updates its state', () => {
    const life = new Life()

    life.update()

    const tissue = life.serialize().tissue
    expect(tissue).toEqual([])
  })
})
