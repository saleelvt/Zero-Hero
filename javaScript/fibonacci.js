
let array =[1,1]
for(i=0;i<5;i++){
   array.push(array[i]+array[i+1])
}
console.log(array);

function generateFibonacci(array, n) {
   if (n === 2) {
       return;
   }
   const nextNumber = array[array.length - 1] + array[array.length - 2];
   array.push(nextNumber);
   generateFibonacci(array, n - 1);
}
const fibonacciArray = [1, 1];
generateFibonacci(fibonacciArray, 5);

console.log(fibonacciArray);
