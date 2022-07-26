
import java.util.ArrayList;
import java.util.Set;

public class MorningAlgo {
    public static void main(String[] args) {
        int[] numsA1 = { 0, 1, 2, 2, 2, 7 };
        int[] numsB1 = { 2, 2, 6, 6, 7 };
        System.out.println(orderedIntersection(numsA1, numsB1).toString());
        int[] numsA2 = {0, 1, 2, 2, 2, 7};
        int[] numsB2 = {2, 2};
        System.out.println(orderedIntersection(numsA2, numsB2).toString());
        int[] numsA3 = {4,5};
        int[] numsB3 ={5,6,7,8,9};
        System.out.println(orderedIntersection(numsA3, numsB3).toString());

    }
    
    public static ArrayList<Integer> orderedIntersection(int[] sortedA, int[] sortedB) {
        ArrayList<Integer> newArr = new ArrayList<>();
        // get the largest array in first loop
        for (int i = 0; i < sortedA.length; i++) {
            for (int j = 0; j < sortedB.length; j++) {
                if (sortedA[i] < sortedB[j]) {// means it doesnt exist in the other set
                    break;
                }
                if (sortedA[i] == sortedB[j]) {
                    newArr = addToSet(newArr, sortedA[i]);// prevents duplicates
                    break;// get out no need to check more
                }
            }
        }
        return newArr;
    }

    public static ArrayList<Integer> addToSet(ArrayList<Integer> arr, int value) {
        for (int i = 0; i < arr.size(); i++) {
            if (arr.get(i) == value) {
                return arr;// add nothing
            }
        }
        arr.add(value);
        return arr;
    }
}

// /*
// Efficiently combine two already sorted multiset arrays
// into an array containing the sorted set intersection of the two.
// Output: only the shared values between the two arrays (deduped).
// Venn Diagram Visualization (bottom)
// https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
// */

// const numsA1 = [0, 1, 2, 2, 2, 7];
// const numsB1 = [2, 2, 6, 6, 7];
// const expected1 = [2, 7];

// const numsA2 = [0, 1, 2, 2, 2, 7];
// const numsB2 = [2, 2];
// const expected2 = [2];

// const numsA3 = [0, 1, 2, 2, 2, 7];
// const numsB3 = [10];
// const expected3 = [];

// /**
// * Efficiently combine the two sorted arrays into a new array that is the a
// * sorted set intersection.
// * Venn Diagram Visualization (bottom):
// * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
// * - Time: O(?).
// * - Space: O(?).
// * @param {Array<number>} sortedA
// * @param {Array<number>} sortedB Both sets are multisets
// * (multi in that it can contain multiple dupes).
// * @returns {Array<number>} The sorted set intersection: a new array that is
// * sorted and contains only the shared values between the two arrays
// * deduped.
// */
// function orderedIntersection(sortedA, sortedB) {
// }
