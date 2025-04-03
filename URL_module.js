var url = require('url')
var addr = "http://localhost:8080/default.htm?Name=xyz&initial=pqr#sir"
var q1 = url.parse(addr,true)  // also try without writing true.
// console.log(q1)
// console.log(q1.host)
// console.log(q1.pathname)
// console.log(q1.query)

