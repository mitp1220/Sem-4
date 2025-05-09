const expr = require('express')
var multer = require('multer')
const app = expr();
app.use(expr.static(__dirname,{index:"fileupload.html"}))

var store = multer.diskStorage({
    destination:"Triple",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
});

var upload = multer({storage:store}).array('mypic',3);

app.post("/upload",upload,(req,res)=>{
    const file = req.file
    if(file) {
        res.send("<h1>"+file.originalname+" has been uploaded to "+file.destination+"</h1>");
    }
});
// upload.single allows user to upload only one file
app.listen(9062)