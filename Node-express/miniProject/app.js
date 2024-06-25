
const express=require('express')
const userRouter=require('./routers/route.js')
const cookieParser= require('cookie-parser')
const path =require('path')
const { connect } = require('./db.js')
require('dotenv').config()
const app =express()
app.set('view engine','ejs')
app.set('views',path.join(__dirname+'/views'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
connect()
app.use('/',userRouter)
app.use('/myMiddle',userRouter)
const PORT=process.env.PORT 
app.listen(PORT,()=>{
    console.log(`surver running http://localhost:${PORT}` );
}

)

