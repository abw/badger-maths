import { expect, test } from 'vitest'
import { multiply, clamp } from '../src/index'

// Examples of cases that fail
test(
  'multiply(0.55, 100) # FAIL',
  () => expect(multiply(0.55, 100)).toBe(55)
)

test(
  'clamp(1.5, 0, 1) # FAIL',
  () => expect(clamp(1.5, 0, 1)).toBe(1)
)
