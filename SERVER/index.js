 
 const http = require('http');
 const fs = require('fs'); // to create log of the incoming requests
const url = require('url'); // to parse the incoming request url


 const myServer = http.createServer((req, res) => {
   //console.log("New request received");
   //console.log(req.headers);
   if(req.url === '/favicon.ico') return res.end(); // to ignore the favicon request  

   const log = `${Date.now()}: ${req.method} ${req.url} New request received \n`;
   const myUrl = url.parse(req.url, true); // to parse the incoming request url
   

   fs.appendFile('log.txt', log, (err, data) =>{
      // res.end("Hello from the server again!");
       
       switch(myUrl.pathname){

        case "/": 
        if(req.method === "GET"){
        res.end("HomePage");}
        break;

        case "/about":
          const username = myUrl.query.username || "Subhava Ojha"; // to get the username from the query string
           res.end(`Hi, ${username}! Welcome to the about page!`);
        break;

        case "/contact":
          res.end("Get lost! Just kidding, contact us at contact@example.com");
          break;

        case "/signup":
          if(req.method ==="GET") res.end("This is a Signup page");
          else if(req.method === "POST"
            
          ){
            //DB query
            res.end("Signup successful!");
        }
          break;

        default:
           res.end("404: Page not found");
       }

   });

 });//this creates a server object

 myServer.listen(8000, () => console.log("Server started"));//this tells the server to listen on port 8000
