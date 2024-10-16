
const http =require('http')

const server=http.createServer((req,res)=>{

    
// res.statusCode(200);
res.setHeader('Content-Type', 'text/plain')
const data =req.params.saleel

res.end('Saleel is a good boy ',data)

})


server.listen(3000,()=>{
         
    console.log('server is running ');
    
})
