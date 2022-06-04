
const arr1 = ["a", "b", "c"];
const arr2 = ["c", "e", "f"];

console.log(merge(arr1, arr2));
console.log(mergeBetter(arr1, arr2));
function merge(arr1, arr2) {

    let indexArr1 = 0;
    let indexArr2 = 0;
    var tempArr = [];
    while (true) {
        if (indexArr1 <= arr1.length - 1) {
            tempArr.push(arr1[indexArr1]);
            indexArr1++;
        } else if (indexArr2 <= arr2.length - 1) {
            tempArr.push(arr2[indexArr2])
            indexArr2++;
        } else {
            return tempArr;
        }

    }
}


function mergeBetter(arr1, arr2) {
    for (let index = 0; index < arr2.length; index++) {
        arr1.push(arr2[index]);
    }
    return arr1;
}

