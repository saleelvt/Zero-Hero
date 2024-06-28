
// let obj ={

//     name:'saleel',
//     age:21,
//     address:{
//         min:[
//             {a:'data',b:[4,5,6,7,8,7]},{},{}
//         ]
//     }
    
// }

// console.log(Object.keys(obj).length);

let array =[4,3,[6,6]]
let a=array.flat()
let sum=a.reduce((state,value)=> {
    return state=state+value
},0)
console.log(sum)
return  sum