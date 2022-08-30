// Reduce a string of lowercase characters in range ascii[‘a’..’z’] by doing a series of operations. In each operation, select a pair of adjacent letters that match, and delete them.

// Delete as many characters as possible using this method and return the resulting string. If the final string is empty, return Empty String

// Example
// s = 'aab'

// aab shortens to b in one operation: remove the adjacent a characters.

// Sample Input
// aaabccddd

// Sample Output
// abd

// Explanation Perform the following sequence of operations to get the final string:
// aaabccddd → abccddd → abddd → abd

// Sample Input 2
// aa

// Sample Output
// Empty String

// Explanation
// aa → Empty String

function reduce(str) {
    str = str.split("");
    let updated = false;
    do {
        updated = false;
        for (let i = 0; i < str.length - 1; i++) {
            // console.log(str[i+1]);
            if (str[i] === str[i + 1]) {

                str.splice(i, 2);
                updated = true;
            }
        }
    } while (updated);

    return str.join("");
}

console.log(reduce("abba") == "");
console.log(reduce("abbaa") == "a");
console.log(reduce("aaabccddd") == "abd");
console.log(reduce("abba ccdd") == " ");
console.log(reduceStr("abba ccdd") == " ");

function reduceStr(str) {
    let i = 0
    while (str.length != 0 && i < str.length) {
        if (str[i] == str[i + 1]) {
            str = str.replace(str[i] + str[i + 1], '')
            // return two steps to check if the chars before and after the deleted pair match or not
            i -= 2
        }
        i++
    }
    return str
}