// Modular Exponentiation (Power in Modular Arithmetic)
// Given three numbers x, y and p, compute (x^y) % p.
// Do not use built-in functions

// Input:  x = 2, y = 3, p = 5
// Output: 3
// Explanation: 2^3 % 5 = 8 % 5 = 3.

// Input:  x = 2, y = 5, p = 13
// Output: 6
// Explanation: 2^5 % 13 = 32 % 13 = 6.

function modExpon(x, y, p) {
    result = 1;
    for (let i = 1; i <= y; i++) {
        result = result * x;
    }
    return result % p;
}

console.log(modExpon(2, 3, 5));
console.log(modExpon(2, 5, 13));


const modExpon2 = (x, y, p) => (x ** y) % p;
console.log(modExpon2(2, 3, 5));
console.log(modExpon2(2, 5, 13));