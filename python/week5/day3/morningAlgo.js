// Write a function that takes in a non-empty array of distinct integers and an
//   integer representing a target sum. If any two numbers in the input array sum
//   up to the target sum, the function should return them in an array, in any
//   order. If no two numbers sum up to the target sum, the function should return
//   an empty array.

// Note that the target sum has to be obtained by summing two different integers
//   in the array; you can't add a single integer to itself in order to obtain the
//   target sum.

// You can assume that there will be at most one pair of numbers summing up to
//   the target sum.

let array = [1, 5, 9, 22]
targetsum1 = 6
// result=[1, 5];

let array2 = [44, 21, 4, 8]
targetsum2 = 28
// result = []

function targetsumFun(array, targetsum) {
    let targetValue = 0;
    let result = [];
    for (let i = 0; i < array.length; i++) {

        targetValue = targetsum - array[i];
        result.push(array[i]);

        for (let j = 0; i != j && j < array.length; j++) {

            if (targetValue == array[j]) {
                result.push(array[j]);
                return result;
            }
        }
        result.pop();//pop the stored value as its not part of the target sum
    }
    return result
}

console.log(targetsumFun(array, targetsum1));
console.log(targetsumFun(array2, targetsum2));

//circular array solution  
