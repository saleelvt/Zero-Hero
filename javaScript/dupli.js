const array = [4, 5, 6, 7, 8, 8, 5, 5, 5];
const lodash = require("lodash");

// Filter duplicate values
const duplicateValues = array.filter(
  (value) => array.indexOf(value) !== array.lastIndexOf(value)
);

let ja = lodash.countBy(duplicateValues);
console.log('my count ',ja);

const nonUniqueValues = lodash.filter(
  duplicateValues,
  (value) => ja[value] > 2
);
let jd = lodash.uniq(nonUniqueValues);

console.log(jd);

console.log(duplicateValues); // Output: [4, 5, 6, 7, 8]
