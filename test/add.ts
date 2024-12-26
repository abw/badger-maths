import { expect, test } from 'vitest'
import { add } from '../src/index'

test(
  'add(2.2, 2.2, 2.2)',
  () => expect(add(2.2, 2.2, 2.2)).toBe(6.6)
)

test(
  'add(-3.14, -3.14, -3.14)',
  () => expect(add(-3.14, -3.14, -3.14)).toBe(-9.42)
)
test(
  'add(1.1, 6.6, 0.1)',
  () => expect(add(1.1, 6.6, 0.1)).toBe(7.8)
)
