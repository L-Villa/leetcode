function sortArrayByParity(nums: number[]): number[] {
  let i = 0,
    j = nums.length - 1;

  while (i <= j) {
    if (nums[i] % 2 !== 0) {
      const store = nums[i];
      nums[i] = nums[j];
      nums[j] = store;
      j--;
    } else {
      i++;
    }
  }

  return nums;
}
