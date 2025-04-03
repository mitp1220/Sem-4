var http = require ('http')

var server = http.createServer(
    function(req,res) {
        if (req.url=="/") {
            res.writeHead(200,{'content-type':'text/html'});
            res.write("<b>Home Page</b>");
            // res.write(req.url);
            res.end();
        }
        else if(req.url=="/student") {
            res.writeHead(200,{'content-type':'text/html'});
            res.write("<b>Student Page</b>");
            // res.write(req.url);
            res.end();
        }
        else{
            res.writeHead(200,{'content-type':'text/html'});
            res.write("Page Not Found");
            // res.write(req.url);
            res.end();
        }   
    }
).listen(5057)
