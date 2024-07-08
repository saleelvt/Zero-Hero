


// let obj={
//     a:10,
//     b:5,
//     c:20,
//     d:-1
// }



// let sortted = Object.entries(obj).sort((a,b)=> a[1]-b[1])
//   let sdf= Object.fromEntries(sortted)

// console.log(sortted);
// console.log(sdf);

let obj={
    a:[10,3,5,6],
    c:5,
    b:[20,5,6,],
    d:-1
}

// for(){}


// console.log('my aarya ',Array.from());

// for( let x in obj){

//     let array
//     console.log();
// }



// let arr=[]
for(let x of Object.keys(obj)){
    if(Array.isArray(obj[x])){        
    arr.push(obj[x])
    }
}


console.log(arr)



// for(i=0;i<array.length;i++){}




// let arr=Object.values(obj)
// let res=[]

// for(let i=0;i<arr.length;i++){
//     if(arr[i].length>0){
//         res.push(arr[i])

//     }
// }
// let sum=res.flat().reduce((acc,val)=>{
//     return acc+=val
// })

// console.log(res)
// console.log(sum)
// console.log(arr)










// let array =[1,2,8,6,5,4,7,9]

// let obj={

//     name:'sreejth'
 
// }

//  array.forEach((value,index)=>{

// obj[index]=value

// })
// // Object.freeze(obj)
// Object.seal(obj)

//  obj.name='saleel'

// console.log('sd',obj[5]);
// // delete obj[5]
// console.log(obj);






// let myarray = Object.entries(obj)
// console.log(myarray);

