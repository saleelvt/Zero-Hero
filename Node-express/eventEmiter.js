
const EventEmitter=require('events')

const myEmitter= new EventEmitter()

myEmitter.on('event',(message)=>{

        console.log('an event occured ',message)
})

myEmitter.once('onceEvent',(message)=>{

    console.log(message);
})

myEmitter.emit('event','hay saleel ')
myEmitter.emit('onceEvent','this message only print one time ')