var fs = require ('fs')
var url = require('url')
var http = require('http')

var server = http.createServer(
    function(req,res) {
        var add = req.url
        var value = url.parse(add,true).pathname
        var a = fs.readFileSync("./"+value,"utf-8")
        res.writeHead(200, {"content-type":"text/html"});
        res.write(a)
        res.end();
    }
).listen(5555)