/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x: number): boolean {
  if (x < 0) return false;
  return x === flipped(x);
};

const flipped = (num: number): number => {
  let remainder;
  let storage = 0;

  while (num) {
    remainder = num % 10;
    storage = storage * 10 + remainder;
    num = Math.floor(num / 10);
  }

  return storage;
};
