const expr = require('express')
var pug = require('pug')
const app = expr();
app.set("view engine",pug)
app.get("/",(req,res)=>{
    res.render(__dirname+"/data.pug",{message:"Hello from Node",
        name:"LJU",
        id:21
    });

});

app.listen(1224)

// write express js script to load student form using pug file which contain following fields.
// 1. name
// 2. email
// 3. course (radio button)=> CE,IT,CSE
//  once form is submitted, data must be displayed on "/data" page using    pug file.