os = require('os')
// console.log(os.hostname())
// console.log(os.tmpdir())
// console.log(os.platform())
console.log(os.freemem())

var x = os.freemem()
var GB = x/1024/1024/1024
console.log(GB)

