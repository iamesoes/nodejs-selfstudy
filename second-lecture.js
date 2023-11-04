//1 - ways of creating server
// const http = require('http');

// function rqListener(req, res){

// }
// //option 1
// http.createServer(rqListener); 

// //option 2 - anonymous function defining( instead of creating new function seperatly)
// http.createServer(function (req, res){});

// //option 3 - arrow function
// http.createServer((req, res) => {})


//2 - creating a node server
// const http = require('http');

// const server = http.createServer((req,res) => {
//     console.log(req);
//    // process.exit(); //hard exit for your event loop
// });

// server.listen(3000);

//3- calling specific part of request
// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method, req.headers);
// });

// server.listen(3000);

//4 - sending response
// const http = require('node:http');

// const server = http.createServer(async (req, res) =>{
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>First Page</title></head><body><h1>Hello!</h1></body>');
//     res.write('</html>');
//     res.end();
    
// });
// server.listen(3000);


//5 -routing based on url and getting message from user
const  http = require('http');
const server = http.createServer((req, res) =>{
    const url = req.url;
    //if there is only / 
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>First Page</title></head>');
        res.write('<body><form action="/message" method="POST" ><input type="text"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end();
    }

    res.write('<html>');
    res.write('<head><title>First Page</title></head><body><h1>Hello!</h1></body>');
    res.write('</html>');
    res.end();

    
});
server.listen(3000);