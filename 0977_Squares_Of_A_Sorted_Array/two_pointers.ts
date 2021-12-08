function sortedSquares(nums: number[]): number[] {
  const answer = [];
  let i = 0;
  while (nums[i] < 0) i++;
  let j = i - 1;
  while (answer.length < nums.length) {
    if (nums[i] < -nums[j] || j < 0) {
      answer.push(nums[i] * nums[i]);
      i++;
    } else {
      answer.push(nums[j] * nums[j]);
      j--;
    }
  }
  return answer;
}
