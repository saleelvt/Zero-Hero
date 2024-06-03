const numbers = [1,4, 2,9, 3,,5,6,[4,5,65]];
const newarray=numbers.flat()

// console.log('my new array ',newarray)

// let add=[]
// for (let i = newarray.length-1 ; i>0; i--) {
//     // const element = newarray[i];

// add.push(newarray[i])
    
// }
// console.log('my elements', add.sort((d,c)=> d-c));




//       numbers.reverse()
const largest = newarray.reduce((state, Value) =>  {

    let largest=null

    if(Value>state){

        largest=Value
        
    }
    return largest
    
}, 0)


console.log('dfd',largest);