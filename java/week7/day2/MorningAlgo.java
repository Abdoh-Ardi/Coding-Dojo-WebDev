package week7.day2;

import java.util.Arrays;

public class MorningAlgo {

    public static void main(String[] args) {
        // int[] arr = { 1, 51, 57, 8, 0 };
        // int[] arr = { 3, 4, 5, 6, 10, 20, 30, 7, 8, 9 };
        int[] arr= {1,2,3,4,5,6,7,8,9,10};
        // int[] arr = { 9,2};
        arr = bubbleSort(arr);
        System.out.println(Arrays.toString(arr));
    }

    public static int[] bubbleSort(int[] arr) {
        boolean swap = false;
        for (int i : arr) {
            // -1 to avoid index out of bound
            for (int j = 0; j < arr.length - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swap = true;
                }
            }
            // check if already sorted
            if (!swap) {
                break;
            } else {
                swap = false;
            }
        }
        return arr;
    }

}
