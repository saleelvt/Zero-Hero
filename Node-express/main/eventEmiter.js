
const EventEmitter=require('events')

const myEmitter= new EventEmitter()

myEmitter.on('event',(message)=>{

        console.log('an event occured ',message)
})

myEmitter.once('once',(message)=>{

    console.log(message);
})

myEmitter.emit('event','hay saleel ')
myEmitter.emit('once','this message only print one time ')
// myEmitter.emit('onceEvent','this message 2 print one time ')
