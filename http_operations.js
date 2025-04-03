var http = require ('http')

var server = http.createServer(
    function(req,res) {
        res.writeHead(200,{'content-type':'text/html'});
        // here, in the above line 200 is the status code like 404 page not found and content type is the type of header eg(text/html,text/css, text/JSON)
        res.write("Hello World");
        res.write("<b> Home Page </b>");
        

        // to display the url on which we are working.
        res.write(req.url);
        res.end();
    }
).listen(5050)
