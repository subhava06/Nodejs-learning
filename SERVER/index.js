 
 const http = require('http');
 const fs = require('fs'); // to create log of the incoming requests


 const myServer = http.createServer((req, res) => {
   //console.log("New request received");
   //console.log(req.headers);

   const log = `${Date.now()}: ${req.url} New request received \n`;
   fs.appendFile('log.txt', log, (err, data) =>{
       res.end("Hello from the server again!");
       switch(req.url){
        case '/': res.end("HomePage");
        break;
        case '/about': res.end("About us");
        break;
        default: res.end("404: Page not found");
       }

   });

 });//this creates a server object

 myServer.listen(9000, () => console.log("Server started"));//this tells the server to listen on port 8000
