// * 
//   - Visualization with playing cards (scroll down):
//       https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
//   - Array / bar visualization:
//       https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
//   - Stable sort, efficient for small data sets or mostly sorted data sets.
//   Time Complexity
//     - Best: O(n) linear when array is already sorted.
//     - Average: O(n^2) quadratic.
//     - Worst: O(n^2) quadratic when the array is reverse sorted.
//   Space: O(1) constant.
//   - this sort splits the array into two portions (conceptually, not literally).
//   - the left portion will become sorted, the right portion
//       (that hasn't been iterated over yet) is unsorted.
//   // can shift OR swap target element until it reaches desired position
//   // shifting steps:
//   1. consider the first item as sorted
//   2. move to the next item
//   3. store current item in a temp var (to make this position available to shift items)
//   4. if item to the left of current is greater than current item, shift the
//       left item to the right.
//   5. repeat step 4 as many times as needed
//   6. insert current item
//   7. move to the next item and repeat
//   // swap steps:
//   1. consider the first item as sorted
//   2. move to the next item
//   4. if item to left of current item is less than current, swap
//   5. repeat step 4 until item to left is less than current item
//   6. move to next item and repeat
// */

// const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// /**
//  * Sorts the given array in-place.
//  * Best: O(n) linear when array is already sorted.
//  * Average: O(n^2) quadratic.
//  * Worst: O(n^2) quadratic when the array is reverse sorted.
//  * @param {Array<number>} nums
//  * @returns {Array<number>} The given array after being sorted.
//  */
// function insertionSort(nums) {}

package week7.day3;

import java.util.Arrays;

/**
 * MorningAlgo
 */
public class MorningAlgo {

    public static void main(String[] args) {
        int[] arr = { -1, 100, 5, 99, 0 };
        System.out.println(Arrays.toString(insertionSort(arr)));
    }

    // public static int[] insertionSort(int[] arr) {
    // for (int i = 0; i < arr.length; i++) {
    // for (int j = 1; j < arr.length; j++) {
    // if (arr[j - 1] > arr[j]) {
    // int temp = arr[j];
    // arr[j] = arr[j - 1];
    // arr[j - 1] = temp;
    // }

    // }
    // }
    // return arr;
    // }

    public static int[] insertionSort(int[] arr) {
        // int[] arr = {};
        for (int i = 1; i < arr.length; i++) {
            int valueToInsert = arr[i];// temperoraly hold the value to insert
            int holePosition = i;

            while (holePosition > 0 && arr[holePosition - 1] > valueToInsert) {
                arr[holePosition] = arr[holePosition - 1];// shift the larger value to the right
                holePosition = holePosition - 1;// move pointer to the next value on the left
            }
            arr[holePosition] = valueToInsert;// insert the value in its correct position
        }
        return arr;
    }
}