// Fetching Data after inserting it into the table

const mg = require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/mit258").then(()=> {
    console.log("connection successful")
}).catch((err)=> {
    console.error(err)
});
mg.pluralize(null)

// Step-2

const myschema = new mg.Schema({
    name: {type:String},
    surname:{type:String},
    age:{type:Number},
    date:{type:Date,default:new Date()}
});

// Step-3

const data = new mg.model("person",myschema)

const createDoc=async()=>{

    const result = []
    result.push(await data.find({name:"Tom"}))
    result.push(await data.find({age:{$gt:25}}))

    console.log(result)
}
createDoc()