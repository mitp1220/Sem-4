const expr = require('express')
const app = expr();
const m1 = require("./data")

app.use("/p",m1)

app.listen(1742)