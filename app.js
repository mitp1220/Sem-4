const expr = require('express');
const app = expr();
app.use(expr.static("../CSS"));
app.use(expr.static('../HTML',{index:"1.html"})); 

app.listen(2136);