const expr = require('express')
const app = expr();

var obj = {"id":2400,"name":"abc"}

app.get("/",(req,res)=>{
    res.set('Content-Type','text/JSON')
    // res.write(JSON.stringify(obj));
    res.send(obj.id+obj.name);
});

app.listen(2025)

//  write express js script to request server to display json object.