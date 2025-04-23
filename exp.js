const expr = require('express')
const app = expr();

// url:localhost:3021/user/342/test/889
// app.get("/user/:userid/test/:test1",(req,res)=>{
//     res.send(req.params);
// });

// url:localhost:3021/things/practice/12345
// app.get("/things/:name/:id",(req,res)=>{      
//     res.send(req.params);
// });

// url:localhost:3021/flights/ADI-NYC
app.get("/flights/:from-:to",(req,res)=>{
    res.send(req.params);
});
app.listen(3021)