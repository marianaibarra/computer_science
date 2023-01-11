/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let l = nums.length;
  let mid = Math.floor(l / 2);
  return pivotSearch(mid, l, nums);
};

/**
 * @param {number} mid
 * @param {number} l
 * @param {number} array
 * @return {number}
 */

var pivotSearch = function (mid, l, array) {
  let a = mid;
  let b = mid + 2;
  let sumLeft = 0;
  let sumRight = 0;
  // sum to left & right
  while (a >= 0) {
    sumLeft += array[a];
    if(b < l)
    {

    }
    sumRight += array[b];
    a--;
    b++;
  }
  console.log("sL: ", sumLeft, "sR: ", sumRight);
  if (sumLeft === sumRight) return mid;
  else if (mid <= l || mid >= 0) return -1;
  else if (sumLeft < sumRight) return pivotSearch(mid - 1, l);
  else if (sumLeft > sumRight) return pivotSearch(mid + 1, l);
  else return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
