// const { log } = require("console");

let arr= [2, 3, 4, 2, 7, 9, 8, 9, 6,9, 5,9, 4];

let count=0
let counts=[]

for(i=0;i<arr.length-1;i++){
    for(j=0;j<arr.length-1;j++){
        if(arr[i]===arr[j]){
            count=count +1 
        }
    }
    
    counts.push(count)
    count=0

}

console.log( Math.max(...counts));



//  let sorted = arr.sort((a,b)=> a-b ).reverse()

//  console.log(sorted);



