const removeDuplicates = (nums: number[]): number | undefined => {
  let currIndex = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      if (nums[i + 1] === undefined) return (nums.length = currIndex);
      nums[currIndex] = nums[i + 1];
      currIndex++;
    }
  }
};
