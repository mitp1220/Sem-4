//  Add or Remove listeners

const e = require("events")

var event_emitter = new e.EventEmitter()

var listener1 = function listener1() {
    console.log("listner1 executed")
}

var listener2 = function listener2() {
    console.log("listner2 executed")
}

event_emitter.addListener("conn",listener1)
event_emitter.on("conn",listener2)

// count listeners
var count = event_emitter.listenerCount("conn")
console.log(count)

event_emitter.emit("conn")


// remove listeners
event_emitter.removeListener("conn",listener1)


//  count
var count = event_emitter.listenerCount("conn")
console.log(count)

//  remove all
event_emitter.removeAllListeners("conn",listener2)

event_emitter.emit("conn")
