/* 
Given an array of numbers,
return a count of how many numbers are negative.
*/

var array = [1, 2, -1, -2, 3, 4, 5];
var expectedValue = 2

function negative(array) {
    var counter = 0;
    for (var index = 0; index < array.length; index++) {

        if (array[index] < 0) {
            counter++;
        }

    }
    return counter
}
console.log(negative(array));

/* 
Given an array of numbers,
return a count of even numbers.
*/

var arr = [1, 2, 3, 4, 5, 6];
var expectedValue = 3

function even(arr) {
    var counter = 0;
    for (var index = 0; index < array.length; index++) {
        if (arr[index] % 2 == 0) {
            counter++;
        }
    }
    return counter
}
console.log(even(arr));