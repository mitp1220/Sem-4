// Updating Data after inserting it into the table

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

const updateDoc = async(i)=>{
    const result = await data.updateMany({name:i},
        {$set:{age:25}
    })
    console.log(result)
}
updateDoc("Tom")