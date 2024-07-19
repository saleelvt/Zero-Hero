// let array = [2, 3, 4, 1, 2];
// function largest(array) {
//   let index = 0;
//   let large = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > large) {
//       index = i;
//       large = array[i];
//     }
//   }
//   return large;
// }

// console.log(largest(array));






let a =[4,5,6,7,8]
let b =a.reduce((acc,value)=>{

        let large= value>acc ? value:acc
        return large 

})


console.log(b);













