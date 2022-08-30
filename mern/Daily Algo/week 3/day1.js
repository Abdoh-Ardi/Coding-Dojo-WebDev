
function stairCase(n) {
    let numberOfHashes = 1;
    let str = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - numberOfHashes; j++) {
            str += " ";
        }
        for (let j = 0; j < numberOfHashes; j++) {
            str += "#"
        }
        
        str += "\n";
        numberOfHashes++;
    }
    return str;
}
console.log(stairCase(-5));