 var createCounter=function (n) {
   
    return function(){

        return n+1

    }

    };


let counter = createCounter(10)
  console.log(counter()); // 10
  console.log(counter()); // 11
  console.log(counter()); // 12
 
 