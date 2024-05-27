const mongoose = require("mongoose")
require('dotenv').config()

function connect(){

    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log('data base connected ');
    
    })
    .catch((error)=>{
    
        console.log('my error',error);
    })
}
module.exports={connect}