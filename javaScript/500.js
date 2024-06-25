var findWords = function (words) {

    let row1 = "qwertyuiop"
    let row2 = "asdfghjkl"
    let row3 = "zxcvbnm"

    let newArray = []


      let  myArray=words.map(x=> x.toLowerCase())
      myArray.forEach(x => {
      
       for(i=0;i<x.length;i++){

        if(row2.includes(x[i])){

            newArray.push(x[i])

        }
       }

      });
      
console.log(newArray);
    

};
findWords(["Hello","Alaska","Dad","Peace"])