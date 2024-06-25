 let res=(function* sun(){

    let count =0

    while(true){

        yield count++

    }
    
})()


// let res=sun()
console.log(res.next().value)
console.log(res.next().value)












// function factoryfn(name,age){
//     return {

//         username:name,
//         userage:age,
//         greet:function(){

//             console.log(`${this.username} and ${this.userage}`)     
//            }
//     }


// }

// let person1=factoryfn("sreejith",40)
// let person2=factoryfn("saleel",40)

// person1.greet()
// person2.greet()



