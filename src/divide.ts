import { bigReduce } from './reduce'

/**
 * Function to divide numbers using fixed floating point maths.
 * @param {...number} args - numbers to divide
 * @returns {number} - the result of dividing the numbers
 * @example
 * divide(13.2, 2.0, 1.1);  // 6
 */
export const divide = (...args: number[]): number =>
  bigReduce('div', args)
