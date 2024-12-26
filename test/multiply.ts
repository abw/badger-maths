import { expect, test } from 'vitest'
import { multiply } from '../src/index'

test(
  'multiply(3.0, 2.2)',
  () => expect(multiply(3.0, 2.2)).toBe(6.6)
)

test(
  'multiply(-3.14, 3)',
  () => expect(multiply(-3.14, 3)).toBe(-9.42)
)

test(
  'multiply(3.0, 2.2, 2.0)',
  () => expect(multiply(3.0, 2.2, 2.0)).toBe(13.2)
)
