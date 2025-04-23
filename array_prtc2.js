const expr = require('express');
const app = expr();

var student = [
    { "age": 22, "name": "def" },
    { "age": 17, "name": "abc" },
    { "age": 41, "name": "pqr" },
    { "age": 58, "name": "stu" },
    { "age": 34, "name": "mno" },
];

app.get("/", (req, res) => {
    res.set('Content-Type', 'text/JSON');
    res.send(JSON.stringify(student));
});

app.get("/sort", (req, res) => {
    const SortedNames = student.sort((a,b)=>a.age-b.age);
    res.set('Content-Type','text/JSON');
    res.send(SortedNames);
});

app.listen(2018)