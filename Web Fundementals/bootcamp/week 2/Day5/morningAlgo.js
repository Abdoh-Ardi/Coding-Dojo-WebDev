/*
  Given an array and an index,
  remove the item at that index.
  return the removed item
  
  No built-in array methods except pop().

  const arr = ["a", "b", "c", "d"]
  removeAt(arr, 2) // c
 */
const arr = ["a", "b", "c", "d"]
//   console.log(removeAt(arr,2));
//   console.log(arr);
console.log(removeAtBetter(arr, 2));
console.log(arr);


// function removeAt(arr, index) {
//     resultArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (index != i) {
//             resultArray.push(arr[i]);
//         }
//     }
//     console.log(resultArray);
//     return arr[index];
// }



function removeAtBetter(arr, index) {
    tempArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i == index) {
            arr.pop();//pop the value

            for (let j = 0; j < tempArray.length; j++) {
                arr.push(tempArray[j]);

                return arr[index];
            }
        } else {
            tempArray.push(arr.pop());
        }

    }

    return arr[index];
}



