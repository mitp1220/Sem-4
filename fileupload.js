const expr = require('express')
var multer = require('multer')
const app = expr();
app.use(expr.static(__dirname,{index:"fileupload.html"}))

var store = multer.diskStorage({
    destination:"Single",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
});

var upload = multer({storage:store})

app.post("/upload",upload.single('mypic'),(req,res)=>{
    const file = req.file
    if(file) {
        res.send("<h1>"+file.originalname+" has been uploaded</h1>")
    }
});
// upload.single allows user to upload only one file
app.listen(9096)