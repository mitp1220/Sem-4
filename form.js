const mg = require("mongoose")
const expr = require("express")
var app = expr()

mg.connect("mongodb://127.0.0.1:27017/mit258").then(()=> {
    console.log("connection successful")
}).catch((err)=> {
    console.error(err)
});
mg.pluralize(null)

const myschema = new mg.Schema({
    username: {type:String,required:true},
    password:{type:String,required:true},
});

const data = new mg.model("formdata",myschema)

app.use(expr.static(__dirname,{index:"form.html"}))

app.get("/redirect",(req,res)=>{
    const persondata = new data({username:req.query.uname,
                                password:req.query.pwd})
persondata.save()
res.send()
})

app.listen(5600)