const expr = require("express")
const mg = require("mongoose")
const cors = require("cors")
const app = expr()

app.use(cors())
app.use(expr.json());

mg.connect("mongodb://127.0.0.1:27017/mit258").then(()=> {
    console.log("connection successful")
}).catch((err)=> {
    console.error(err)
});
mg.pluralize(null)

const myschema = new mg.Schema({
    username: {type:String,required:true}
});

const data = new mg.model("test1",myschema)

app.post("/Signup7",async(req,res)=>{
    try{
        const{username}=request.body;
        const newUser = new data({username})
        await newUser.save();
        res.send("Data Inserted")
    }
    catch(error){
        res.send(error)
    }
});

app.listen(5000)