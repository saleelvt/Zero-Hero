
const express=require('express')
const app =express()



app.get('/',(req,res)=>{

    res.send('slaleel is a good b y ')

})


// app.use()



app.listen(3000,()=>{
    console.log('my data');
})



