const path = require('path')
const expr = require('express')

const app = expr()
const sp = path.join(__dirname,"../public")
// app.use(expr.static(sp)) Either we can use this

// OR

app.use(expr.static(sp))
app.get("/",(req,res)=>{
    res.sendFile(sp+"/in1.html");
});

app.listen(2010)