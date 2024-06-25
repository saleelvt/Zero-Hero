
let array=[4,3,6,7,8,9]
let value=2
let res=[]
for (let i=0;i<array.length;i+=value){
    res.push(array.slice(i,i+value))
}

console.log(res)

