
let nums=38
let num=nums.toString()
let a= num.split("")
console.log('my string array ' ,a );
let numberArray =a.map(Number)
console.log( 'number array',numberArray);

let sum=0
for (let i = 0; i < numberArray.length; i++) {
    
    sum= sum+numberArray[i]
    console.log('firstsum',sum);
    if (sum < 10) {
        console.log('my sum ',sum-1);
    }else{
        continue;
    }
}
// console.log('lat sum ',sum);




// console.log('my num is ',a);