const object = [{

    name:'hamsa',
    place:'valapuram',
    fullNames:'kutty',
    salary:30000,
    age:23,

   obj:[{
    name:'jurij',
    age:'21',
    place:'kpkulampu'

}],

    fullName: function (){

    console.log('name', this.name + " "+this.fullNames);
    
    }
},
{

    name:'saleel',
    place:'thiruveegappura',
    fullNames:'kutty',
    salary:50000,
    age:22,
    fullName: function (){

        console.log('name', this.name + this.fullNames);
        
        }
   
},{

    name:'niyas',
    place:'valapuram',
    salary:40000,
    age:22
},{

    name:'anas',
    place:'majampra',
    salary:45000,
    age:25
},

];



console.log(object.values());








// let fullNameofOne=object[1].fullName()

// for(i=0;i<object.length;i++){

//     console.log('haty ',object[i]);
    
// }

// // console.log('new ',object[0].obj.length);

// for( let x in object[0].obj ){
//     console.log('this is my jurij obj ' ,x);
// }

// let jurijarary = object[0].obj.map((x)=>{

//     return  x.name 

// })

// console.log('my object',jurijarary);


// console.log('my objects ',fullNameofOne);

// let hamsas=object.map((x)=>{

//     return  x.name

// })

// console.log('maped ',hamsas);
