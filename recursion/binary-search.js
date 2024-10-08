/*
  Recursive Binary Search

  Input: SORTED array of ints, int value
  Output: bool representing if value is found

  Recursively search to find if the value exists, do not loop over every element.

  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the searchNum was found in the sortedNums array.
 */

// initialize start and end
function binarySearch(
  sortedNums,
  searchNum,
  start = 0,
  end = sortedNums.length - 1
) {
  // your code here
  let mid = Math.floor((start + end) / 2);
  // base case
  if (start > end) {
    return false;
  }
  // base case
  if (sortedNums[mid] === searchNum) {
    return true;
  } else if (sortedNums[mid] > searchNum) {
    //progression and recursive call (keep start the same, and the new end is mid - 1)
    return binarySearch(sortedNums, searchNum, start, mid - 1);
  } else if (sortedNums[mid] < searchNum) {
    // progression and recursive call
    return binarySearch(sortedNums, searchNum, mid + 1, end);
  }
}

console.log(binarySearch(nums1, searchNum1));
console.log(binarySearch(nums2, searchNum2));
console.log(binarySearch(nums3, searchNum3));
