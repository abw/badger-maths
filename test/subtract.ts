import { expect, test } from 'vitest'
import { subtract } from '../src/index'

test(
  'subtract(6.6, 2.2)',
  () => expect(subtract(6.6, 2.2)).toBe(4.4)
)

test(
  'subtract(3.14, 9.42)',
  () => expect(subtract(3.14, 9.42)).toBe(-6.28)
)

test(
  'subtract(-3.14, 6.28)',
  () => expect(subtract(-3.14, 6.28)).toBe(-9.42)
)

test(
  'subtract(7.8, 0.1, 2.4)',
  () => expect(subtract(7.8, 0.1, 2.4)).toBe(5.3)
)

