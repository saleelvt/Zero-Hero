const http=require('http')

http.createServer((req,res)=>{

    res.writeHead(200,{'Content-type':'text/html'})

    const num1=req.params
    console.log('dd',num1);


    res.end('saleel')

}).listen(3033)

