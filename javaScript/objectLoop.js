
// const object = [
//     {
//       name: "hamsa",
//       place: "valapuram",
//       fullNames: "kutty",
//       salary: 30000,
//       age: 23,
//       obj: [
//         {
//           name: "jurij",
//           age: "21",
//           place: "kpkulampu",
//         },
//       ],
//       fullName: function () {
//         console.log("name", this.name + " " + this.fullNames);
//       },
//     },
//     {
//       name: "saleel",
//       place: "thiruveegappura",
//       fullNames: "maaran",
//       salary: 50000,
//       age: 22,
//     },
//     {
//       name: "niyas",
//       place: "valapuram",
//       salary: 40000,
//       age: 22,
//     },
//     {
//       name: "anas",
//       place: "majampra",
//       salary: 45000,
//       age: 25,
//     },
//   ]


let obj={

    name:'saleel',
    age:21,
    place:'thiruveegappura',
    address:'variyathodi',

}
// let values= Object.values(obj)
// console.log(values);


for(let key in obj){
    console.log('my data',  key, 'datas1',obj[key]);
}

