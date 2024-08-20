

let a ={
    name:'saleel',
    last:'vt',
}

let fullName =function(address,sem ,d){

    console.log(this.name+' '+this.last,address,sem,d);
}


let obj={
    name:'jishnu',
    last:'tp'
}

let myObj={
    name : 'saleel',
    place: 'thiruveegappura ',
    age: 21,

    details : 'saleel from valanchery and its details : address : variyathodi and  this. name. address '
}


 let add=fullName.bind(a,'mavoor',4)


add('dfd')

