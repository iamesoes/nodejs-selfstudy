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
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
});

