//https://www.hackerrank.com/challenges/funny-string/problem?isFullScreen=true

// function funnyString(str) {
//     let counter = 0;
//     let reverseCounter = str.length - 1;
//     while (reverseCounter != counter) {

//         if (Math.abs(str.charCodeAt(counter) - str.charCodeAt(reverseCounter)) == 1) {
//             console.log(str);
//             counter++;
//             reverseCounter--;
//             continue;
//         }
//         return false;
//     }
//     return true;
// }


// console.log(funnyString("ponml") == "Funny");
// console.log(funnyString("lmnop") == "Funny");
// console.log(funnyString("bcxz") == "notFunny");
// console.log(funnyString("2") == "Funny");
// console.log(funnyString("23") == "Funny");
// console.log(funnyString("214") == "Funny");


// function funnyStringSingle(str) {
//     for (let i = 0; i < str.length - 1; i++) {
//         result = Math.abs(str.charCodeAt(i) - str.charCodeAt(i + 1)) == 1;
//         if (result) {
//             continue;
//         } else {
//             return "notFunny";
//         }
//     }
//     // console.log(str);
//     return "Funny";
// }

// function funnyString(str) {

//     return funnyStringSingle(str) && funnyStringSingle(str.split("").reverse().join(""));
// }


function funnyStringOptimized(str) {

    for (let i = 0; i < str.length / 2; i++) {
        resultLeftSide = Math.abs(str.charCodeAt(i) - str.charCodeAt(i + 1)) == 1;
        resultRightSide = Math.abs(str.charCodeAt(str.length - 1 - i) - str.charCodeAt(str.length - 2 - i)) == 1;
        if (resultRightSide == resultLeftSide) {
            continue;
        } else {
            return "notFunny";
        }
    }
    // console.log(str);
    return "Funny";
}

console.log(funnyStringOptimized("ponml") == "Funny");
console.log(funnyStringOptimized("lmnop") == "Funny");

console.log(funnyStringOptimized("abcd") == "Funny");
console.log(funnyStringOptimized("xyzed") == "notFunny");
console.log(funnyStringOptimized("bcxz") == "notFunny");
console.log(funnyStringOptimized("bcxz") == "notFunny");
console.log(funnyStringOptimized("acxz") == "Funny");
console.log(funnyStringOptimized("2") == "Funny");
console.log(funnyStringOptimized("23") == "Funny");
// console.log(funnyStringOptimized("214") == "Funny");
