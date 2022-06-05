/* 
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
  var string1 = "abcd";
  var output = "dcba";
*/
var string1 = "abcd";
// console.log(reverseString(string1));

function reverseString(text) {
    var reversed;

    for (let i = text.length; i >= 0; i--) {
        reversed += text[i];
    }
    return reversed;
}

/********************************************************************/
/* 
  Acronyms
  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 
  Do it with .split first if you need to, then try to do it without
*/

const str1 = "object oriented programming";
const expected1 = "OOP";

// The 4 pillars of OOP
const str2 = "abstraction polymorphism inheritance encapsulation";
const expected2 = "APIE";

const str3 = "software development life cycle";
const expected3 = "SDLC";

// Bonus: ignore extra spaces
const str4 = "  global   information tracker    ";
const expected4 = "GIT";

/**
 * Turns the given str into an acronym.
 * @param {string} str A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
function acronymize(str) {
    var strArr=str.split(" ");
    console.log(strArr);
    var acronym="";
    for (let i = 0; i < strArr.length; i++) {
         acronym+= strArr[i][0].toUpperCase();
        
    }
    return acronym;
}

function acronymizeWithoutSplit(str) {
    // var lookforward="";
    var firstCharacter=true;
    var acronym ="";
    for (let i = 0; i < str.length; i++) {
        if (str[i]==" ") {
            // skip empty characters
            // the next character has to be a first character unless its a space
            firstCharacter=true;
        }else if(firstCharacter){
            acronym +=str[i].toUpperCase();
            firstCharacter=false;
        }
        
    }
    return acronym;
}



console.log(acronymize(str1));
console.log(acronymize(str2));
console.log(acronymize(str3));
console.log("\n");
console.log(acronymizeWithoutSplit(str1));
console.log(acronymizeWithoutSplit(str2));
console.log(acronymizeWithoutSplit(str3));
console.log(acronymizeWithoutSplit(str4));
