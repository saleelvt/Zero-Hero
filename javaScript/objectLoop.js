
const event=require('events')
const eventEmiter= new event()


eventEmiter.on('evnet',(message)=>{
    console.log(message);
})
eventEmiter.once('event',(message)=>{
    console.log(message);
})

eventEmiter.emit('evnet','my mom name is saleelna ')
eventEmiter.emit('evnet','my mom name is saleelna ')
eventEmiter.emit('evnet','my mom name is saleelna ')
eventEmiter.emit('evnet','my mom name is saleelna ')
eventEmiter.emit('event','my name is saleel ')
eventEmiter.emit('event','my name is saleel ')
eventEmiter.emit('event','my name is saleel ')
eventEmiter.emit('event','my name is saleel ')
eventEmiter.emit('event','my name is saleel ')