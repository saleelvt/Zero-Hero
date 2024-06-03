// function checking(number){

const { resourceUsage } = require("process");

//     return new Promise((pass,fail)=>{

//         if(number>10){
//             pass('success')
//         }else{
//             fail('failed')
//         }

//     })

// }

// checking(20)

// .then((data)=>{

//     console.log(data);

// })
// .catch((error)=>{
//     console.log(error);
// })

let num1 = 5;
let num2 = 5;
let myPromise = new Promise((resolve, rejects) => {
    setTimeout(() =>  resolve(num1 + num2), 1000);

  rejects(null);
});


let sumPromise= datafromfirst=> new Promise((resolve,rejects)=>{

    setTimeout(() =>  resolve(datafromfirst *2), 1000);

        rejects (console.log('sdkf'))
})

myPromise
  .then((data) => {
    return sumPromise(data)
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
