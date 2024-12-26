import { bigReduce } from './reduce'

/**
 * Function to multiply numbers using fixed floating point maths.
 * @param {...number} args - numbers to multiply
 * @returns {number} - the product of the numbers
 * @example
 * multiply(3.0, 2.2, 2.0);  // 13.2
 */
export const multiply = (...args: number[]): number =>
  bigReduce('times', args)
