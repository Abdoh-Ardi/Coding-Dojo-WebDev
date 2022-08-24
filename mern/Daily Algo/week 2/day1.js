/* 
Interview question asked by a google engineer interviewer on interviewing.io
Given two strings, find the longest common substring
i.e., the longest string that could be built with common characters
Output order doesn't matter
*/

const str1A = "aaa";
const str1B = "aa";
const expected1 = "aa";

const str2A = "aaba";
const str2B = "aa";
const expected2 = "aa";

const str3A = "aeff";
const str3B = "abcdef";
// Expected chars can be in any order.
const expected3 = "aef";

const str4A = "z this hurts my head x";
const str4B = "my head, this hurts";
// Expected chars can be in any order.
const expected4 = "this hurts my head";

/**
 * Finds the longest longest string that can be built from characters that both
 * of the given strings share.
 * @param {string} s1
 * @param {string} s2
 * @returns {string} The longest common substring.
 */
console.log(longestCommonSubstring(str1A, str1B));
console.log(longestCommonSubstring(str2A, str2B));
console.log(longestCommonSubstring(str3A, str3B));
console.log(longestCommonSubstring(str4A, str4B));

function longestCommonSubstring(s1, s2) {
    let result = [];
    let shortestArray = s1.length >= s2.length ? s1 : s2;
    let longestArray = s1.length >= s2.length ? s2 : s1;
    shortestArray = shortestArray.split("");
    longestArray = longestArray.split("");
    while (shortestArray.length != 0) {
        let index = longestArray.indexOf(shortestArray.shift());
        if (index > -1) {
            result.push(longestArray[index]);
            longestArray.splice(index, 1); //remove that value 
        }

    }
    return result.join("");
}