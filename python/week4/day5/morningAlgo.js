/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

const strA5 = "listeh";
const strB5 = "listen";
const expected5 = false;
/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
console.log(isAnagram(strA1, strB1));
console.log(isAnagram(strA2, strB2));
console.log(isAnagram(strA3, strB3));
console.log(isAnagram(strA4, strB4));
console.log(isAnagram(strA5, strB5));
// function isAnagram(s1, s2) {

//     if (s1.length != s2.length) {
//         return false
//     }
//     s1 = s1.toUpperCase()
//     s2 = s2.toUpperCase()
//     var result = false
//     for (let i = 0; i < s1.length; i++) {
//         for (let j = 0; j < s2.length; j++) {

//             if (s1.length == 0 && s2.length == 0) {
//                 return true
//             }
//             if (s1[i] === s2[j]) {
//                 //0,i+1 till before character
//                 //i+1 string after the character
//                 s1 = s1.slice(0, i + 1) + s1.slice(i + 1)
//                 s2 = s2.slice(0, j + 1) + s2.slice(j + 1)
//                 //reduce steps 
//                 // i--;
//                 // j--;
//             }

//         }

//     }

//     return false
// }




function isAnagram(s1, s2) {
    s1 = s1.toUpperCase();
    s2 = s2.toUpperCase();
    var found = false;
    if (s1.length != s2.length) {
        return false
    }
    
    while (s1.length != 0) {
        for (let i = 0; i < s2.length; i++) {
            if (s1[0] == s2[i]) {
                //remove first character from s1
                s1 = s1.substr(1);
                found = true;
                break;
            } else {
                found = false;
            }
        }

        if (!found) {
            return found;
        }


    }
    return found;
}
