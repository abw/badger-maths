import { bigReduce } from './reduce'

/**
 * Function to add numbers using fixed floating point maths.
 * @param {...number} args - numbers to add
 * @returns {number} - the result of adding the numbers
 * @example
 * add(1.1, 6.6, 0.1);  // 7.8
 */
export const add = (...args: number[]): number =>
  bigReduce('plus', args)
