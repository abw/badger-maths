import { expect, test } from 'vitest'
import { divide } from '../src/index'

test(
  'divide(6.6, 2.2)',
  () => expect(divide(6.6, 2.2)).toBe(3)
)

test(
  'divide(-14.08, 3.2)',
  () => expect(divide(-14.08, 3.2)).toBe(-4.4)
)
test(
  'divide(13.2, 2.0, 1.1)',
  () => expect(divide(13.2, 2.0, 1.1)).toBe(6)
)
