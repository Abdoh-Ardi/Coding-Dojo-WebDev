function camelCase(str) {
    // if string is empty or invalid camel case
    if (str.length == 0 || str[0].match(/^[A-Z]/)) {
        return 0;
    }
    //count matches
    const count = (str.match(/[A-Z]/g) || []).length;//count every Capital character return 0 if null 
    return count + 1;//+1 = the first word
}

console.log(camelCase("oneTwoThreeFour"));
console.log(camelCase(""));
console.log(camelCase("saveChangesInTheEditor"));
console.log(camelCase("oneTwo"));
console.log(camelCase("oneTwo "));
console.log(camelCase("Twoone")==0);
console.log(camelCase("one"));
console.log(camelCase("one Two"));

console.log("ABA".match(/A/g));