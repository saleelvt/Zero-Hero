
// const name='saleel'

// function add (){
    
//     let data='saleel is a good boy'
    
//     console.log('data is ',data);
// }
// add()

// console.log('my name is ', name)

let obj={

    age:21,
    place:'thiruveegapura',
    c:[3,4,5,6],
    d:[3,2,4,5,6]


}

let n=[]

for(let x in obj){

    if(Array.isArray(obj[x])){

        n.push(obj[x]
        )

    }

}
let a=n.flat()
console.log(a);

// console.log('obj data ' ,obj.place)
