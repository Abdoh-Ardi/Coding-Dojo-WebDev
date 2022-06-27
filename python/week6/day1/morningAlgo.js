
// function recurse(num) {
//     if (num > 1) {
//         console.log(num)
//         return recurse(num - 1);
//     }
//     return 1;
// }

// console.log(recurse(10));


// let arr = [];
// console.log(recursArr(arr, 10));
// console.log(recursArr(arr, 10));

// function recursArr(arr, num) {
//     if (arr.length >= 10) {
//         return arr;
//     } else {
//         arr.push(num)
//         return recursArr(arr, num - 1)
//     }
// }

function recursArr(num, arr = []) {
    if (num < 1) {
        return arr;
    } else {
        arr.push(num);
        return recursArr(num - 1, arr);
    }
}

console.log(recursArr(10));