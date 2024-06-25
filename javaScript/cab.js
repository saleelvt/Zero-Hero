const { last } = require("lodash");

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

 let add=fullName.bind(a,'mavoor',4)


add('dfd')