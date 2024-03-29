/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

const str5 =

    /**
     * Determines whether the parenthesis in the given string are valid.
     * Each opening parenthesis must have exactly one closing parenthesis.
     * - Time: O(?).
     * - Space: O(?).
     * @param {string} str
     * @returns {boolean} Whether the parenthesis are valid.
     */

    // function parensValid(str) {
    //     result = false;
    //     for (let i = 0; i < str.length; i++) {
    //         if (str[i] === "(") {
    //             result = false;
    //         } else if (str[i] === ")") {
    //             result = true;
    //         }

    //     }
    //     return result > 0;

    // }

    // function parensValid(str) {
    //     result = 0;
    //     for (let i = 0; i < str.length; i++) {
    //         if (result < 0) {
    //             return false;
    //         }
    //         if (str[i] == "(") {
    //             result++;
    //         } else if (str[i] == ")") {
    //             result--;
    //         }

    //     }
    //     return result == 0;

    // }
    function parensValid(str) {
        result = 0;
        for (let i = 0; i < str.length; i++) {
            if (result < 0) {
                return false;
            }
            if (str[i] == "(") {
                result++;
            } else if (str[i] == ")") {
                result--;
            }

        }
        return result == 0;

    }
console.log(parensValid(str1));
console.log(parensValid(str2));
console.log(parensValid(str3));
console.log(parensValid(str4));
console.log(parensValid(str5));


// if ( push if ) then pop twice

/*****************************************************************************/