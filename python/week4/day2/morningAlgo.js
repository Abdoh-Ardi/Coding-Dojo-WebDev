/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
function stringDedupe(str) {
    arr = str.split('');
    resutltDict = {};
    while (arr.length > 0) {
        var tempValue = arr.shift();
        resutltDict[tempValue] = resutltDict[tempValue];
        
    }
    return Object.keys(resutltDict).join('');
}



console.log(stringDedupe(str1))
console.log(stringDedupe(str2))
console.log(stringDedupe(str3))
console.log(stringDedupe(str4))



//Algo 2 


/*
Given a string containing space separated words
Reverse each word in the string.
If you need to, use .split to start, then try to do it without.
*/

const str5 = "hello";
const expected5 = "olleh";

const str6 = "hello world";
const expected6 = "olleh dlrow";

const str7 = "abc def ghi";
const expected7 = "cba fed ihg";

/**

Reverses the letters in each words in the given space separated
string of words. Does NOT reverse the order of the words themselves.
@param {string} str Contains space separated words.
@returns {string} The given string with each word's letters reversed.
*/
function reverseWords(str) {
    strArr = str.split(' ');
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = reverseWord(strArr[i]);
    }
    return strArr.join(' ')
}
function reverseWord(str) {
    tempStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        tempStr += str[i];
    }

    return tempStr;
}

console.log(reverseWords(str5));
console.log(reverseWords(str6));
console.log(reverseWords(str7));


//Algo 3

/*
Reverse Word Order
Given a string of words (with spaces)
return a new string with words in reverse sequence.
*/

const str8 = "This is a test";
const expected8 = "test a is This";

const str9 = "hello";
const expected9 = "hello";

const str10 = " This is a test ";
const expected10 = "test a is This";

/**

Reverses the order of the words but not the words themselves form the given
string of space separated words.
@param {string} wordsStr A string containing space separated words.
@returns {string} The given string with the word order reversed but the words
themselves are not reversed.
*/
function reverseWordOrder(wordsStr) {
    wordsArr = wordsStr.split(' ');
    reversed = [];
    for (let i = wordsArr.length - 1, j = 0; i >= 0; i--, j++) {
        reversed[j] = wordsArr[i];
    }
    return reversed.join(" ");

}

console.log(reverseWordOrder(str8));
console.log(reverseWordOrder(str9));
console.log(reverseWordOrder(str10));
