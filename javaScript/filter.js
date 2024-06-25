const array = [4, 5, 6, 7, 8, 5, 4, 3, 2, 8, 8, 1, 3, 4, 5, 6, 7, 8];

// Filter duplicate values
const duplicateValues = array.filter((value, index) => array.indexOf(value) !== index);

console.log(duplicateValues); // Output: [4, 5, 6, 7, 8]
