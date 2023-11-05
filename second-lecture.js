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


//5 -routing based on url and getting message from user. writing dummy text to file after send button
// const  http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) =>{
//     const url = req.url;
//     const method = req.method;
//     //if there is only / 
//     if(url === '/'){
//         res.write('<html>');
//         res.write('<head><title>First Page</title></head>');
//         res.write('<body><form action="/message" method="POST" ><input type="text" name="message"><button type="submit">Send</button></form></body>')
//         res.write('</html>');
//         return res.end();
//     }
//     if(url === '/message' && method === 'POST'){
//         fs.writeFileSync('message.txt', 'dumy');
//         res.statusCode = 302;
//         res.setHeader('Location', '/');
//         return res.end();
//     }
//     res.write('<html>');
//     res.write('<head><title>First Page</title></head><body><h1>Hello!</h1></body>');
//     res.write('</html>');
//     res.end();

// });
// server.listen(3000);


//6 getting data from user and writing this on file (buffer system)
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;

//     if (url === '/'){
//         res.write('<html>');
//         res.write('<head><title>First Page</title></head>');
//         res.write('<body><form action="/message" method="POST" ><input type="text" name="message"><button type="submit">Send</button></form></body>')
//         res.write('</html>');
//         return res.end();
//     }

//     if(url === '/message' && method === 'POST'){
//         const body = [];
//         req.on('data', (chunk) => {
//             //console.log(chunk);
//             body.push(chunk);
//         });
//         // add return here so that it wont execute later lines in this createserver function 
//         return req.on('end', () =>{
//             const parsedBody = Buffer.concat(body).toString();
//             const message = parsedBody.split('=')[1];
//             //thanks to sync it will block code execution until this file is created
//             //so it is better to use writeFile because file can be large. we should not wait 
//             //fs.writeFileSync('message.txt', message);
//             //we can handle error
//             fs.writeFile('message.txt', message, err =>{
//                 res.statusCode = 302;
//                 res.setHeader('Location', '/');
//                 return res.end();
//             })
            
//         });
        
        
//     }
//     //if we remove return statement from req.on, this will be executed. because of the callback function logic 
//     res.write('<html>');
//     res.write('<head><title>First Page</title></head><body><h1>Hello!</h1></body>');
//     res.write('</html>');
//     res.end();
// });

// server.listen(3000);

///7
const http = require('http');
const routes = require('./second-lecture-routes');

const server = http.createServer(routes);
//we moved all routes to another file
server.listen(3000);