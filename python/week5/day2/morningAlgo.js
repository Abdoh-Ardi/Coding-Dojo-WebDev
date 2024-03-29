/* 
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

const nums1 = [3, 0, 1];
const expected1 = 2;

const nums2 = [3, 0, 1, 2];
const expected2 = null;
// Explanation: nothing is missing

/* 
  Bonus: now the lowest value can now be any integer (including negatives),
  instead of always being 0. 
*/

const nums3 = [2, -4, 0, -3, -2, 1];
const expected3 = -1;

const nums4 = [5, 2, 7, 8, 4, 9, 3];
const expected4 = 6;

/**
 * Determines what the missing int is in the given unordered array of ints
 *    which spans from 0 to N where only one int is missing. With this missing
 *    int, a consecutive sequence of ints could be formed from the array.
 * Bonus: Given ints can span from N to M (start and end anywhere).
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} unorderedNums
 * @returns {number|null} The missing integer needed to be able to form an unbroken
 *    consecutive set of integers from the given array or null if none is missing.
 */
function missingValue(unorderedNums) {
    orderedNums = unorderedNums.sort((a, b) => a - b)
    console.log(orderedNums);
    //look back
    for (let i = 1; i < orderedNums.length; i++) {
        if (orderedNums[i - 1] != (orderedNums[i] - 1)) {
            return orderedNums[i] - 1;
        }
    }
    return null
}

console.log(missingValue(nums1));
console.log(missingValue(nums2));
console.log(missingValue(nums3));
console.log(missingValue(nums4));


//Algo 2
/* 
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array
  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
  Bonus: Keep it O(n) time even if it is not sorted
*/

const nums5 = [1, 1, 1, 1];
const expected5 = [1];

const nums6 = [1, 1, 2, 2, 3, 3];
const expected6 = [1, 2, 3];

const nums7 = [1, 1, 2, 3, 3, 4];
const expected7 = [1, 2, 3, 4];

const nums8 = [1, 1];
const expected8 = [1];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */
function dedupeSorted(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i-1]==nums[i]) {
            nums.splice(i,1);
            i--;
        }
        
    }
    return nums;
}
console.log(dedupeSorted(nums5));
console.log(dedupeSorted(nums6));
console.log(dedupeSorted(nums7));
console.log(dedupeSorted(nums8));

