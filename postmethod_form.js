const expr = require('express')
const app = expr();
app.use(expr.urlencoded({extended:false}));
app.use(expr.static(__dirname,{index:"postmethod_form.html"}));
app.post('/check',(req,res,next)=>{
 
    if(req.body.UserName=="admin"){
        next();
    }
    else{
        res.send("<h1 style='color:red'>Wrong credentials</h1>")
    }
});
app.post('/check',(req,res,next)=>{
 res.write("<h1>Welcome</h1>"+req.body.UserName);
 res.send();
});
app.listen(3100);