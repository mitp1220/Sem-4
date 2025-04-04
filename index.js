// var d = require("./calc.js")
// console.log("addition is "+d.x(10,15))
// console.log("multiplication is "+d.m(10,15))

// or we can also do,

// var {x,m} = require("./calc.js")
// console.log("addition is "+x(10,15))
// console.log("multiplication is "+m(10,15))

var {add,mul,name} = require("./calc.js")
console.log("multiplication is "+mul(10,15))
console.log("addition is "+add(10,15))
console.log(name)
