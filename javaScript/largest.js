let array = [5, 43, 76, 9, 4, 2, 5, 8, 9, 3];
let nowElement = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] > nowElement) {
    nowElement = array[i];
  }
}
let secondLargest = -Infinity; 
// Find the second largest element
for (let j = 0; j < array.length; j++) {
  if (array[j] < nowElement && array[j] > secondLargest) {
    secondLargest = array[j];
  }
}
console.log('Second Largest:', secondLargest);

