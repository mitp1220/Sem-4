//  create a http webpage to display a msg "welcome to FSD-2 class in h1 tag after 10 seconds."

var http = require ('http')

const server = http.createServer((req,res)=> {
    setTimeout (()=>{
        res.writeHead(200,{'content-type':"text/html"});
        res.end('<h1>Welcome to FSD-2 class');
    },10000);
}).listen(5058)

// use command (npm install nodemon) to directly run the code of node js without writing localhost every time in the browser. and after installing delete a file from (c: user/appdata/roaming/npm/nodemon.ps1) aa file chelli vadi nodemon.ps1 delete kari devani install thai jaay nodemon pachi atle barabr work thase.