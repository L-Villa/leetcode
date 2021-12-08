function singleNonDuplicate(nums: number[]): number {
  return binarySearch(nums, 0, nums.length - 1);
}

const binarySearch = (arr: number[], l: number, r: number): number => {
  if (r > l) {
    let mid = l + Math.floor((r - l) / 2);
    if (arr[mid] !== arr[mid + 1] && arr[mid] !== arr[mid - 1]) return arr[mid];
    if (
      (mid % 2 === 0 && arr[mid] !== arr[mid + 1]) ||
      (mid % 2 !== 0 && arr[mid] !== arr[mid - 1])
    ) {
      return binarySearch(arr, l, mid - 1);
    } else {
      return binarySearch(arr, mid + 1, r);
    }
  }
  return arr[l];
};
