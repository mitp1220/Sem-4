const expr = require('express')
const app = expr();

// app.use(expr.static('./')) use this if js file and html file (compulsarily named index) are present in same folder or use app.use(expr.static(__dirname))

//  OR

// app.use(expr.static(__dirname,{index:"test1.html"})) use this if your main html file is not named index.html

// app.use(expr.static('../')) use this if your js file is in a sub-folder and html and css files are in main folder.

app.use(expr.static('../public')) // use this if you js file is in src folder and html and css file are in public folder.

// app.use(expr.static('./public')) use this if js file is in main folder and html and css files are in public folder.

// in all these above variations, do keep in mind that the main html file must be named index.html except for the 2nd variation.

app.listen(2012)