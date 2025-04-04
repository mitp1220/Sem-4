import val from "validator"

let email = "test@gmail.com"
console.log(val.isEmail(email))

let email1 = "test@"
console.log(val.isEmail(email1))

let name1 = "miles morales"
console.log(val.isLowercase(name1))

let name2 = "PETER Parker"
console.log(val.isLowercase(name2))

let bool = "true"
console.log(val.isBoolean(bool))

let num = "123456789"
console.log(val.isLowercase(num))

let no = "21"
console.log(val.isDivisibleBy(no,7))