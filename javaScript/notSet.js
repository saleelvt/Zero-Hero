
let array=[2,4,6,9,8,5,3,4,5,3,7]


const nonUnique= array.filter((item)=>{

    return  array.indexOf(item) !== array.lastIndexOf(item)
})

const set =new Set(nonUnique)

// function sum (){


// }

console.log(set);
// console.log(coppyArray);
