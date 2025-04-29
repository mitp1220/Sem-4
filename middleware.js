const expr = require('express')
const app = expr();
const cb=(req,res,next)=>{
    console.log("initialized");
    res.set("content-type","text/html");
    res.write("<strong>First</strong>");
    next();
}
const cb1=(req,res,next)=>{
    // res.set("content-type","text/html");
    res.write("<p>Addition="+(5+5)+"</p>");
    next();
}
// cb or cb1 jene first execute karvu hoy eni text/html file chaalu rakhvani ane bijani comment kari devani.
app.use("/",cb,cb1);
app.get("/",(req,res)=>{
    res.write("Hello welcome");
    res.send();
})
app.listen(4321);