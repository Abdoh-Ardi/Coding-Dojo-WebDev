// given an array, create a recursive function that reverse the array

const arr1 = [3, 5, 7, 9]
const arr2 = [1,2,3,4,5,6]
const arr3 = [1]
const expectedOutput = [9, 7, 5, 3]

function reverseArr(arr) {
    if (arr.length < 1) {
        // do nothing
    } else {
        const temp = arr.pop();
        reverseArr(arr);
        arr.push(temp);
    }
    console.log("calls");
    return arr;
}
console.log(reverseArr(arr1));
console.log(reverseArr(arr2));
console.log(reverseArr(arr3));