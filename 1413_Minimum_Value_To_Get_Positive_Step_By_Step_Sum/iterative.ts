var minStartValue = function (nums: number[]): number {
  let value = 0;
  let sum: number;
  let diff: number;

  if (nums[0] < 0) {
    value = -1 * nums[0] + 1;
  } else {
    value = 1;
  }
  sum = value + nums[0];

  for (let i = 0; i < nums.length - 1; i++) {
    sum = sum + nums[i + 1];
    if (sum < 1) {
      diff = 1 + -1 * sum;
      sum = sum + diff;
      value = value + diff;
    }
  }

  return value;
};
