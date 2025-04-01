// write file using json object
var fs = require('fs')

var data = {"name":"Jim"}



// fs.writeFileSync("json_object.txt",JSON.stringify(data))
// console.log(data)

var rd = fs.readFileSync("json_object.txt","utf-8")
console.log(JSON.parse(rd))

//  FS module completed and try doing the same with an array of objects.