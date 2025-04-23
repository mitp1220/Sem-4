const expr = require('express')
const app = expr();

app.use(expr.static('./'))
app.listen(2012)