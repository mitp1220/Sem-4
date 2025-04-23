const expr = require("express")
const app = expr();

// app.get("/",(req,res)=> {
//     res.set("Content-Type","text/plain")
//     res.write("<b>hello world</b>");
//     res.send();
// }); 
// app.get("/about",(req,res)=> {
//     res.set("Content-Type","text/html")
//     res.write("<h1>hello world</h1>");
//     res.send();
// }); 

app.get("/:id",(req,res) => {
    res.send("the id you specified is"+req.params.id);
});
app.listen(2225);