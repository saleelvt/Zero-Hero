// function a() {
//     let count = 0;
//     return function() {
//         console.log('my coun t',count);
//         return count++;
//     };
// }

// let b = a();
// console.log(b()); // Output: 0
// console.log(b()); // Output: 1

 function a (x){

    return function b(y){
        
        return function c(z){
            return x+y+z
        }

    }

}
console.log(a(5)(5)(5));


