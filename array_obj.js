const express = require('express');
const app = express();

var student = [
    { "id": 1, "name": "LJU" },
    { "id": 2, "name": "LJU" },
    { "id": 3, "name": "LJU" },
    { "id": 4, "name": "LJU" },
    { "id": 5, "name": "LJU" }
];

app.get("/", (req, res) => {
    res.set('Content-Type', 'text/html');
    res.write("<center><table cellspacing='5px' cellpadding='8px' border='1px solid'> <tr><th>ID</th><th>Name</th></tr>");
    
    // Using for...of loop to iterate through the student array
    for (const user of student) {
        res.write(`<tr><td>${user.id}</td><td>${user.name}</td></tr>`);
    }
    
    res.write("</table></center>");
    res.end();
});

app.listen(2022)
