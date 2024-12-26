import Big from 'big.js'

/**
 * Function to multiply numbers using fixed floating point maths.
 * @param {string} method - method to call
 * @param {...number} args - numbers to apply
 * @returns {number} - the result of the calculation numbers
 * @example
 * bigReduce('plus', 3.0, 2.2, 5.8);  // 11
 */

export const bigReduce = (method: string, args: number[]): number => {
  const [first, ...rest] = args
  return rest.reduce(
    (sum, value) => sum[method](value),
    new Big(first)
  ).toNumber()
}

