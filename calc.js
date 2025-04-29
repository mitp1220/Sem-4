const expr = require('express')
const app = expr();
app.use(expr.urlencoded({extended:false}));
app.use(expr.static(__dirname,{index:"calc.html"}));
app.get('/calc',(req,res,next)=>{

    if ((req.query.Num1>0) && (req.query.Num2>0)) {
        if(req.query.formula=="addition") {
            a = parseInt(req.query.Num1)+parseInt(req.query.Num2)
            res.write("Addition is: "+a)
        }
        else if(req.query.formula=="subtaction") {
            b = parseInt(req.query.Num1)-parseInt(req.query.Num2)
            res.write("subtraction is: "+b)
        }
        

        else {
            res.write("incomplete input stream, pls select an operator.")
        }

    }
    else {
        res.write("Both the inputs must be greater than 0")
    }
    res.send();
});

app.listen(1234)