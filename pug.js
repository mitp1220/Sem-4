const expr = require('express')
var pug = require('pug')
const app = expr();
app.set("view engine",pug)
app.get("/",(req,res)=>{
    res.render(__dirname+"/pg.pug")
});

app.get('/form',(req,res)=>{
    res.write("Your Name is "+req.query.name);
    res.write(" Your Email is "+req.query.email);
    res.send();
});
app.listen(1242);