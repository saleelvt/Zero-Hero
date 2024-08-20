

let a ={
    name:'saleel',
    age:21,
   
}
function  myName(name,age,macha,add){
    console.log(this.name,this.age,macha,add)
}

let b={
    name:'anas',
    age:20
}



myName.apply(b,['dj','fdfdffd'])