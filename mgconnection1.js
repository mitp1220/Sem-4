// Step-1
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

// Step-4

// const personData = new data({name:'Andrew',
//                     surname:'Garfield',
//                     age:41
//                     })
// const personData1 = new data({name:'Tobey',
//                     surname:'Maguire',
//                     age:48
//                     })
// personData.save()
// personData1.save()

const createdoc=async()=> {
    try{
        const persondata=new data({name:"Tom",
                            surname:"Holland",
                            age:22
                            })
        const persondata1 = new data({name:'Andrew',
                            surname:'Garfield',
                            age:41
                            })
        const persondata2 = new data({name:'Tobey',
                            surname:'Maguire',
                            age:48
                            })
        const result = await data.insertMany([persondata,persondata1,persondata2])
        console.log(result)
    }
    catch(err) {
        console.log("error")
    }
}
createdoc()