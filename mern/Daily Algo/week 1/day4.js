function binarySeacrh(array, target) {
    array.sort((a, b) => a - b);
    // console.log(array);

    for (let index = Math.floor(array.length / 2), counter = Math.floor(array.length / 2); counter >= 0; counter--) { //result should be found in half the time else its not there 
        if (array[index] == target) {
            return true;
        }
        if (target > array[index]) {
            // target is on the right side
            index = Math.floor((index + array.length - 1) / 2);

        } else {
            index = Math.floor(index / 2);
        }
    }
    return false;

}

function binarySeacrhOccurance(array, target) {
    array.sort((a, b) => a - b);
    // console.log(array);
    occurance = 0;
    for (let index = Math.floor(array.length / 2), counter = Math.floor(array.length / 2); counter >= 0; counter--) { //result should be found in half the time else its not there 
        if (array[index] == target) {
            array.splice(index, 1) //remove item at this index
            occurance++;
            counter++;//pretend its not found and go for another iteration
            // return true;
            
        }
        if (target > array[index]) {
            // target is on the right side
            index = Math.floor((index + array.length - 1) / 2);

        } else {
            index = Math.floor(index / 2);
        }
    }
    return occurance;

}


const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

const nums4 = [3, 4, 2, 5, 6, 7, 8, 9, 2, 1, 22, 50, 6, 8, 12];
const searchNum4 = 90;
const expected4 = true;
console.log(binarySeacrh(nums1, searchNum1));
console.log(binarySeacrh(nums2, searchNum2));
console.log(binarySeacrh(nums3, searchNum3));
console.log(binarySeacrh(nums4, searchNum4));

const nums5 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8,8, 9];
const searchNum5 = 8;
const expected5 = 2;
console.log(binarySeacrhOccurance(nums5,searchNum5)==expected5);

const nums6 = [1,2,3];
const searchNum6 = 4;
const expected6 = 0;
console.log(binarySeacrhOccurance(nums6,searchNum6));