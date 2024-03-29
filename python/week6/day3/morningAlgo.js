
/* 
  Recursive Factorial
  Input: integer
  Output: integer, product of ints from 1 up to given integer
  
  If less than zero, treat as zero.
  Bonus: If not integer, truncate (remove decimals).
  
  Experts tell us 0! is 1.
  
  rFact(3) = 6 (1*2*3)
  rFact(6.8) = 720 (1*2*3*4*5*6)
*/



const num1 = 3;
const expected1 = 6;
// Explanation: 1*2*3 = 6

const num2 = 6.8;
const expected2 = 720;
// Explanation: 1*2*3*4*5*6 = 720

const num3 = 0;
const expected3 = 1;

// /**
//  * Recursively multiples 1 to the given int.
//  * @param {number} n The int to factorial. Treat negatives as zero and
//  *    floor decimals.
//  * @returns {number} The result of !n.
//  */
function factorial(n) {
    if (n <= 0) {
        return 1;
    } else {

        return Math.floor(n) * factorial(Math.floor(n) - 1);
    }

}

console.log(factorial(num2));


/*
  Return the fibonacci number at the nth position, recursively.

  Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
  The next number is found by adding up the two numbers before it,
  starting with 0 and 1 as the first two numbers of the sequence.
*/




// const num1 = 0;
// const expected1 = 0;

// const num2 = 1;
// const expected2 = 1;

// const num3 = 2;
// const expected3 = 1;

// const num4 = 3;
// const expected4 = 2;

// const num5 = 4;
// const expected5 = 3;

// const num6 = 8;
// const expected6 = 21;

/**
 * Recursively finds the nth number in the fibonacci sequence.
 * @param {number} num The position of the desired number in the fibonacci sequence.
 * @returns {number} The fibonacci number at the given position.
 */
function fibonacci(num) {
    if (num <= 1) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

// console.log(fibonacci(num1));
// console.log(fibonacci(num2));
// console.log(fibonacci(num3));
// console.log(fibonacci(num4));
// console.log(fibonacci(num5));
// console.log(fibonacci(num6));
