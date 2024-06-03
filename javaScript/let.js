// const { HighlightSpanKind } = require("typescript");

const { rejects } = require("assert");
const { resolve } = require("path");
const { resourceUsage } = require("process");
const { callbackify } = require("util");

// for( let  i=0;i<=5000;i++){
// setTimeout(()=>{

//         console.log('my data',i);

//     },0)
//     }

// let greet = {
//  naem: 'salel',

//   name1: function () {

//     let self=this
//           setTimeout( function (){
//             console.log(self.naem);
//           },1000)
//   },
// };
// greet.name1()

// let sum =  (num1, num2) => {
//   let mySum= num1 + num2;
   

//   let multiply = (callback, value) => {
//     return callback * value;
//   };
//   console.log(multiply(mySum, 5));
  
//   console.log(mySum);


// };

// sum(5, 5)

