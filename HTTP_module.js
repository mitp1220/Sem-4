var http = require('http')
var server = http.createServer(
    function(req,res) {
        res.write("<b>Home Page</b>");
        res.write("Hello World");
        res.end();
    }).listen(5055)
// or we can also write server.listen(5051) instead of the above line.