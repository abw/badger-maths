/**
 * Function to clamp a number to a min, max range
 * @param {number} n - number to clamp
 * @param {number} min - minimum value of n
 * @param {number} max - maximum value of n
 * @returns {number} - the number n clamped to the min, max range
 * @example
 * clamp(1.1, 0, 1);  // 1
 */
export const clamp = (n: number, min: number, max: number): number =>
  Math.min(Math.max(n, min), max)
