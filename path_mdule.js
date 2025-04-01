var pm = require("path")

// path1 = pm.dirname("D:/FSD-2/node/add_on.txt")
// console.log(path1)

// path2 = pm.extname("D:/FSD-2/node/add_on.txt")
// console.log(path2)

// path3 = pm.basename("D:/FSD-2/node/add_on.txt")
// console.log(path3)

path4 = pm.parse("D:/FSD-2/node/add_on.txt")
// console.log(path4)

console.log(path4.root)
console.log(path4.dir)
console.log(path4.base)
console.log(path4.ext)
console.log(path4.name)