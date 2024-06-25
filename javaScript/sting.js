// const numbers = [1, 2, 3, 4, 5];
// const flatMapped = numbers.flatMap(x => [x]);
// console.log(flatMapped); // Output: [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
let obj = {
  name: 1,
  address: {
    pin: 8383,
  },
  age: 2,
  place: 3,
};
// let a=Object.entries(obj)
console.log(obj?.addresss?.mobile);
