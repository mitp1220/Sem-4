const expr = require('express')
const app = expr();

app.use(expr.static("./",{index:"form.html"}))
app.get('/process_get',(req,res)=>{
    response = {Username:req.query.FullName,Password:req.query.Password};
    console.log(response)
    res.send(response)
});

app.listen(2548)