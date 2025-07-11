// FindbyID and Update Data

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

const updateDoc = async(_id)=>{
    const result = await data.findByIdAndUpdate({_id},
        {$set:{name:"Sam"}},
        {$set:{age:29}},
        {upsert:true},
        {new:true}
    )
    console.log(result)
}
updateDoc("68708d87ae1a1b779144d9ec")