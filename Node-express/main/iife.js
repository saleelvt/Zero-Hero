
(function(){
    const http=require('http')
    const fs =require('fs')

    fs.writeFile('hay.txt','data got ',(error)=>{
        console.log(error);
    })

    const server=http.createServer((req,res)=>{
        res.write('saleel is a good boy ')
        res.end()

    })

    server.listen(3000)




})();