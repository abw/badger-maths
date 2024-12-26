import { expect, test } from 'vitest'
import { clamp } from '../src/index'

test(
  'clamp(5, 1, 10)',
  () => expect(clamp(5, 1, 10)).toBe(5)
)

test(
  'clamp(11, 1, 10)',
  () => expect(clamp(11, 1, 10)).toBe(10)
)

test(
  'clamp(-1, 1, 10)',
  () => expect(clamp(-1, 1, 10)).toBe(1)
)

test(
  'clamp(0.5, 0, 1)',
  () => expect(clamp(0.5, 0, 1)).toBe(0.5)
)
