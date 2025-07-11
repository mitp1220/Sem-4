// Delete Data

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

const deleteDoc=async(_id)=>{
    const result = await data.deleteOne({name:"Tom"})
    const result1 = await data.findByIdAndDelete({_id})
    console.log(result)
    console.log(result1)
}
deleteDoc("68708d47ae1a0b778144d9ec")