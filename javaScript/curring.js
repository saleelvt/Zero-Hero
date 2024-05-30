
function a(a){

    return function(b){

        return function(c){

            return a+b+c

        }

    }

}

 console.log(a(5)(10)(3))