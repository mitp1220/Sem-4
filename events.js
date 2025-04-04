const e = require("events")

// Number-1
// var event_emitter = new e.EventEmitter()
// event_emitter.on("SayName",()=> {
//     console.log("your name is jack")
// });
// event_emitter.emit("SayName")



// Number-2
var event_emitter = new e.EventEmitter()
var connectHandler = function Connect() {
    console.log("connection successful")
    event_emitter.emit("data received")
}
event_emitter.on("connection",connectHandler);

event_emitter.on("data received",function() {
    console.log("data received successfully")
});

event_emitter.emit("connection")
console.log("thanks")
