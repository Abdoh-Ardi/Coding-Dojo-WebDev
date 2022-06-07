/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) {
    // var lookAhead = false; // check if the next character is number
    var decoded = "";
    var chara = str[0];
    var repeatValue = "";
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (let i = 1; i <= str.length; i++) {
        if (numbers.includes(str[i])) {
            repeatValue += str[i];
            // lookAhead=true;//see if there is another number
        } else {
            decoded += chara.repeat(parseInt(repeatValue));
            chara = str[i];
            repeatValue = "";//reset 
        }
    }
    
    return decoded;
}
console.log(decodeStr("a3b2c1d3"));
console.log(decodeStr("a3b2c12d10"));


