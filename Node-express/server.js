const http=require('http')

http.createServer((req,res)=>{

    res.writeHead(200,{'Content-type':'text/html'})
    res.end('hello world gfgf fdfdfdsf')

}).listen(6069)