import { bigReduce } from './reduce'

/**
 * Function to subtract numbers using fixed floating point maths.
 * @param {...number} args - numbers to subtract
 * @returns {number} - the result of adding the numbers
 * @example
 * subtract(7.8, 0.1, 2.4);  // 5.3
 */
export const subtract = (...args: number[]): number =>
  bigReduce('minus', args)
