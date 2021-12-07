function removeElement(nums: number[], val: number): number {
  let k: number = 0,
    i: number = nums.length - 1;
  while (k <= i) {
    if (nums[k] === val) {
      nums[k] = nums[i];
      i--;
    } else {
      k++;
    }
  }
  return k;
}
