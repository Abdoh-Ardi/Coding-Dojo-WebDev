
const str = "Hello World";
const rotateAmnt = 100;
// console.log(8 % 6);
console.log(rotate(str, rotateAmnt));
console.log(trim("         dawdad w          "));


/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

function trim(str) {

    let startIndex = -1;
    let endIndex = -1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {//get first spaces
            startIndex = i;
            break
        }

    }
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] != " ") {//get last spaces
            endIndex = i;
            break
        }

    }
    return str.slice(startIndex, endIndex + 1)
}



function rotate(str, rotateAmnt) {
    rotateAmnt = rotateAmnt % str.length;//7 % 6 = 1   1%6 = 1
    while (rotateAmnt > 0) {
        tempStr = str[str.length - 1]//get last character
        str = str.substring(0, str.length - 1);//remove from back
        str = tempStr + str//add to front
        rotateAmnt--;
    }
    return str
}