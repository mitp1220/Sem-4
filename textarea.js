const expr = require('express');
const app = expr();

app.use(expr.static("./",{index:"textarea.html"}));
app.get('/login_page',(req,res)=>{
    res.set('Content-Type','text/html');
    response = req.query.textarea.split(".");
    for (i in response) {
        res.write(response[i]+"<br>");
    }
    res.end();
});

app.listen(3636);