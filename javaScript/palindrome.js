const { stat } = require("fs");

function pali(array){
  
  let sum =   array.reduce((state,value)=>{

    //  return     value > 4 ? state+=value :null

        // return state+=value
        if(value>4){
            return state+=value
        }else{
            return null
        }
        
        
    },0)

    return sum

  
}

console.log('my array ',pali([1,2,3,7,7,7]));