
const { log } = require('console');
const event=require('events')

const myEmitter= new event()

myEmitter.on('events',(data)=>{

    console.log(data);

    })
    
    myEmitter.emit('once','this message only print one time ')
    myEmitter.emit('onceEvent','this message 2 print one time ')

let data= console.log("new ");
// eval(data)
console.log(datsa);



// console.clear()
// console.log('sd',newsd);,


// e