// Time Complexity : O(n)
var pivotIndex = function (nums) {
  let totalSum = 0,
    leftSum = 0;

  for (let index = 0; index < nums.length; index++) {
    totalSum += nums[index];
  }

  for (let index = 0; index < nums.length; index++) {
    rightSum = totalSum - nums[index] - leftSum;
    if (leftSum === rightSum) return index;
    leftSum += nums[index];
  }
  return -1;
};
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
console.log(pivotIndex([-1, -1, -1, -1, -1, 0]));
