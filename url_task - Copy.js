var url = require('url')
var http = require ('http')

var server = http.createServer(
    function(req,res) {
        res.writeHead(200,{"content-type":"text/html"});
        var add = req.url
        var value = url.parse(add,true).query
        res.write(value.year)
        res.write(value.month)
        res.end();
    }).listen(5063)