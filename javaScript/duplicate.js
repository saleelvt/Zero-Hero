
let array=[10, 5, 8, 22, 15, 22, 8, 5, 10, 3]


// let has=[]
let has = new Set();
let notHas=[]

for(i=0;i<array.length;i++){
    let count=0
    for(j=0;j<array.length;j++){

        if(array[i]==array[j] && i!=j){

            count++
        }
        }
        
        console.log(count);
        if(count> 0){
        has.add(array[i])
    }
}


let arrayr = Array.from(has)
console.log('duplicate ullath',arrayr);

// let siglevalue= array.filter((value)=>{
//     return array.indexOf(value) ==array.lastIndexOf(value)

// })

// console.log('duplicate illatath',siglevalue);
// console.log(notHas);
