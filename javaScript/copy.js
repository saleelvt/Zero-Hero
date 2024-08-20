
let a ={
    name:'saleel',
    age:21
}



let b= JSON.parse(JSON.stringify(a))
 b.name='niyas'
console.log(a);
console.log(b);
if(a==b){
    console.log('treu ');
}else{
    console.log(false);
}