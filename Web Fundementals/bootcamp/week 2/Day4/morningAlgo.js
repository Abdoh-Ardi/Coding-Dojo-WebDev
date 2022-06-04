/* 
  Array: Second-Largest
  Return the second-largest element of an array, or null if there is none.
  Bonus: do it with one loop and no nested loops
  example below
  const arr = [1,2,3,4,5]
  const expected = 4
*/
const array = [1, 2, 3, 4, 5]
const expected = 4;

secondLargestBetter(array);


function secondLargestBetter(array) {
    let largest = -1;
    let secondLargest = -1;
    for (let i = 0; i < array.length; i++) {

        if (largest < array[i]) {
            largest = array[i]
        }
    }

    for (let i = 0; i < array.length; i++) {

        if (largest > array[i]) {
            secondLargest = array[i];
        }

    }

    console.log(secondLargest);
}