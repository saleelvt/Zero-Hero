let arr= [2, 3, 4, 2, 7, 9, 8, 9, 6, 5, 4];

let largest = arr[0];
let secondLargest = arr[1];

// Ensure largest and secondLargest are correctly set
if (secondLargest > largest) {
    [largest, secondLargest] = [secondLargest, largest];
}
// console.log('dfjk',arr);

let jaged=[3,5]

jaged.push(2)
jaged.push(2)
// jaged.pop(2)
// jaged[0]='saleel'

console.log(jaged);









// const mySet=new Set(array)

// let sortedArray= [...mySet]

// let result = array.sort((c, d) => d - c);

// //   newArray=mySet.set(sortedArray)

// for (i = 0; i < result.length; i++) {
//   if (result[i] != result[i + 1]) {
//     console.log("second", result[i]);
//     break;
//   }
// }
// console.log(result);

// console.log("sorted array ", result[1]);
