const object = [
  {
    name: "hamsa",
    place: "valapuram",
    fullNames: "kutty",
    salary: 30000,
    age: 23,
    obj: [
      {
        name: "jurij",
        age: "21",
        place: "kpkulampu",
      },
    ],

    fullName: function () {
      console.log("name", this.name + " " + this.fullNames);
    },
  },
  {
    name: "saleel",
    place: "thiruveegappura",
    fullNames: "maaran",
    salary: 50000,
    age: 22,
    // fullName: function () {
    //   console.log("name", this.name + this.fullNames);
    // },
  },
  {
    name: "niyas",
    place: "valapuram",
    salary: 40000,
    age: 22,
  },
  {
    name: "anas",
    place: "majampra",
    salary: 45000,
    age: 25,
  },
]

//  object.forEach((x)=>{
//       console.log(x);
// })  



const obj={
    name:'saleel',
    age:21,
    place:'thiruvegapura'
}

// const {name:myname,myAge:age,myPlace:place}=obj

// console.log(myname);


// let master={...object,...obj}

// console.log(master);


// let array=[1,2,3,4]

// let a =(a,b,c)=>{ 

//     return a+b+c+c}

// console.log(a(...array));


// function sum(...numbers){

//     return numbers.reduce((number,total)=>number+total,0)

         
// }

// console.log('sum ',sum(3,4,5,6,2,1,7,9,8));


const add = [first,...rest]=[1,2,3,4]

console.log(add);






// const filter=object.find((x)=>{

//     return x.age>21

// })

// console.log(filter);




// const bind=object[0].fullName.bind(object[1])
// bind()