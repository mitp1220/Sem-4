// write a node js script to create a file name temp.txt now check if available physical memory of the system is greater than 1 gb then print the msg sufficient memory in the file else print the msg low memory in file.

var fs = require('fs')
os = require('os')

var x = os.freemem()
var GB = x/1024/1024/1024
console.log(GB)

if(GB>1) {
    fs.writeFileSync('temp.txt',"sufficient memory in the file.")
}
else if(GB<1) {
    fs.writeFileSync('temp.txt',"insufficient memory")
}

