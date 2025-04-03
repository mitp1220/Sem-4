var obj = {"name":"Jacob","age":23}
var http = require ('http')

var server = http.createServer(
    function(req,res) {
            res.writeHead(200,{'content-type':'text/html'});
            res.write(JSON.stringify(obj));
            // res.write(req.url);
            res.end();
        }
).listen(5054)