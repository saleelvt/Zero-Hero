
// const buffe =Buffer.alloc(10)


const fs=require('fs')

const buffe= fs.createReadStream('hay.txt')


buffe.on('data',(cunck)=>{
    console.log('salelfd',cunck);
})

// console.log(buffe);